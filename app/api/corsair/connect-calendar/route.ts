import { corsair } from "@/lib/corsair";
import { generateOAuthUrl } from "corsair/oauth";

export async function GET(req: Request) {
  const origin = new URL(req.url).origin;

  const { url } = await generateOAuthUrl(corsair, "googlecalendar", {
    tenantId: "default",
    redirectUri: `${origin}/api/corsair/callback`,
  });

  return Response.redirect(url);
}