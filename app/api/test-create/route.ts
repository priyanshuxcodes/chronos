// app/api/test-create/route.ts

import { corsair } from "@/lib/corsair";

export async function GET() {
  try {
    const result =
      await corsair.googlecalendar.api.events.create({
        event: {
          summary: "Chronos Test Event",

          start: {
            dateTime: "2026-06-17T17:00:00Z",
          },

          end: {
            dateTime: "2026-06-17T18:00:00Z",
          },
        },
      });

    return Response.json(result);
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}