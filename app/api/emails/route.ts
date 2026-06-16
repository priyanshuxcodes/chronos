import { corsair } from "@/lib/corsair";

function getHeader(headers: any[], name: string) {
  return headers.find(
    (h) => h.name.toLowerCase() === name.toLowerCase()
  )?.value;
}

export async function GET() {
  try {
    const list = await corsair.gmail.api.messages.list({
      maxResults: 20,
    });

    const emails = await Promise.all(
      (list.messages || []).map(async (message) => {
        const email = await corsair.gmail.api.messages.get({
          id: String(message.id),
        });

        const gmailEmail = email as any;

        return {
          id: gmailEmail.id,
          threadId: gmailEmail.threadId,

          subject:
            getHeader(
              gmailEmail.payload?.headers || [],
              "Subject"
            ) || "No Subject",

          from:
            getHeader(
              gmailEmail.payload?.headers || [],
              "From"
            ) || "Unknown",

          date:
            getHeader(
              gmailEmail.payload?.headers || [],
              "Date"
            ) || "",

          snippet: gmailEmail.snippet,

          unread:
            gmailEmail.labelIds?.includes("UNREAD") ||
            false,
        };
      })
    );

    return Response.json(emails);
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to fetch emails" },
      { status: 500 }
    );
  }
}