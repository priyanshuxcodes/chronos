import { corsair } from "@/lib/corsair";
import { processOAuthCallback } from "corsair/oauth";

export async function GET(req: Request) {
    const { searchParams, origin } = new URL(req.url);

    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (!code || !state) {
        return new Response("Missing code/state", {
            status: 400,
        });
    }

    try {
        const result = await processOAuthCallback(corsair, {
            code,
            state,
            redirectUri: `${origin}/api/corsair/callback`,
        });

        console.log("Corsair OAuth result:", result);

        return Response.redirect(`${origin}/dashboard`);
    } catch (err) {
        console.error("Corsair OAuth failed:", err);

        return new Response("OAuth failed", {
            status: 500,
        });
    }
}