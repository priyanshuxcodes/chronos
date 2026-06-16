// app/api/test-calendar/route.ts

import { corsair } from "@/lib/corsair";

export async function GET() {
  try {

    const events =
      await corsair.googlecalendar.api.events.getMany({});

    console.log(
      "EVENTS:",
      JSON.stringify(events, null, 2)
    );

    return Response.json(events);
  } catch (error) {
    console.error("FULL ERROR:");
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