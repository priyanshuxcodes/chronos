// app/api/calendar/route.ts

import { corsair } from "@/lib/corsair";

export async function GET() {
  try {
   const response =
  await corsair.googlecalendar.api.events.getMany({});

return Response.json(
  (response.items || []).map((event) => ({
    id: event.id,
    title: event.summary,
    start: event.start?.dateTime || event.start?.date,
    end: event.end?.dateTime || event.end?.date,
  }))
);
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