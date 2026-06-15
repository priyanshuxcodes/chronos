// app/api/test-gmail/route.ts

import { corsair } from "@/lib/corsair";

export async function GET() {
  try {
    const messages = await corsair.gmail.api.messages.list({
      maxResults: 10,
    });

    return Response.json(messages);
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}