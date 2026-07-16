import { corsair } from "@/lib/corsair";
import { generateOAuthUrl } from "corsair/oauth";

export async function GET() {
  const { url } = await generateOAuthUrl(corsair, "googlecalendar", {
    tenantId: "default",
    redirectUri: "http://localhost:3000/api/corsair/callback",
  });

  return Response.redirect(url);
}