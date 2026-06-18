import { GoogleGenAI } from "@google/genai";
import { corsair } from "@/lib/corsair";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

function getHeader(email: any, name: string) {
  return (
    email.payload?.headers?.find((header: any) => header.name === name)
      ?.value || ""
  );
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are Chronos AI.

You are an AI assistant that controls Gmail and Google Calendar.

Return ONLY valid JSON.

Never explain your answer.

Possible actions:

1. create_event

{
  "action":"create_event",
  "title":"Meeting",
  "date":"tomorrow",
  "time":"5 PM"
}

2. send_email

{
  "action":"send_email",
  "to":"john@gmail.com",
  "subject":"Meeting",
  "body":"See you tomorrow."
}

3. read_emails

{
  "action":"read_emails",
  "query":"is:unread"
}

If you cannot determine an action, return:

{
  "action":"unknown"
}

User:
Summarize my unread emails

Output:

{
  "action":"read_emails",
  "query":"is:unread"
}

User:
Show today's emails

Output:

{
  "action":"read_emails",
  "query":"newer_than:1d"
}

User:
Show GitHub emails

Output:

{
  "action":"read_emails",
  "query":"from:github"
}

User:
${message}
      `,
    });

    const rawText = response.text!;

    const cleanedText = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const action = JSON.parse(cleanedText);

    if (action.action === "create_event") {
      const start = new Date();

      start.setDate(start.getDate() + 1);

      start.setHours(17);
      start.setMinutes(0);

      const end = new Date(start);

      end.setHours(18);

      const event = await corsair.googlecalendar.api.events.create({
        event: {
          summary: action.title,

          start: {
            dateTime: start.toISOString(),
          },

          end: {
            dateTime: end.toISOString(),
          },
        },
      });
      return Response.json({
        success: true,
        message: `"` + action.title + `" has been added to your calendar.`,
        event,
      });
    }

    if (action.action === "send_email") {
      const email = [
        `To: ${action.to}`,
        `Subject: ${action.subject}`,
        "Content-Type: text/plain; charset=utf-8",
        "",
        action.body,
      ].join("\n");

      const raw = Buffer.from(email)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");

      const result = await corsair.gmail.api.messages.send({
        raw,
      });

      return Response.json({
        success: true,
        message: "Email sent successfully!",
        result,
      });
    }

    if (action.action === "read_emails") {
      const list = await corsair.gmail.api.messages.list({
        q: action.query,
        maxResults: 10,
      });

      const emails = await Promise.all(
        (list.messages || []).map((message) =>
          corsair.gmail.api.messages.get({
            id: String(message.id),
          }),
        ),
      );

      const emailData = emails.map((email: any) => ({
        from: getHeader(email, "From"),

        subject: getHeader(email, "Subject"),

        snippet: email.snippet,
      }));

      const summaryResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",

        contents: `
You are Chronos, an executive assistant.

Summarize these emails.

Rules:

- Keep under 120 words.
- Group into:
  1. Urgent
  2. Important
  3. Updates
- Ignore newsletters if possible.

Emails:

${JSON.stringify(emailData, null, 2)}
`,
      });

      return Response.json({
        success: true,
        message: summaryResponse.text,
      });
    }

    return Response.json(action);
  } catch (error) {
    console.error(error);

    return Response.json({ error: String(error) }, { status: 500 });
  }
}
