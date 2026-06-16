import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const completion =
    await openai.chat.completions.create({
      model: "gpt-4o-mini",

      messages: [
        {
          role: "system",
          content: `
You are Chronos.

Return ONLY JSON.

Actions:

1. create_event
2. send_email

Examples:

User:
Schedule a meeting tomorrow at 5pm

Output:

{
  "action":"create_event",
  "title":"Meeting",
  "date":"tomorrow",
  "time":"5pm"
}

User:
Send email to john@gmail.com

Output:

{
  "action":"send_email",
  "to":"john@gmail.com"
}
          `,
        },

        {
          role: "user",
          content: message,
        },
      ],
    });

  return Response.json({
    result:
      completion.choices[0].message.content,
  });
}