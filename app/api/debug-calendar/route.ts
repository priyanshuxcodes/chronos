import { corsair } from "@/lib/corsair";

export async function GET() {
  console.log(
    Object.keys(
      corsair.googlecalendar.api.events
    )
  );

  return Response.json({
    ok: true,
  });
}