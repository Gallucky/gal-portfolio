import type { IncomingMessage, ServerResponse } from "node:http";
import { Resend } from "resend";

/**
 * Payload shape accepted by this endpoint - mirrors `ContactMessagePayload` on the frontend
 * (src/utils/contact/sendContactMessage.ts). Duplicated here rather than imported because
 * this file builds as its own Vercel Function project (see api/tsconfig.json), separate from
 * the app's Vite/tsconfig project, and shouldn't depend on the frontend's path aliases.
 */
type ContactRequestBody = {
    name?: unknown;
    email?: unknown;
    message?: unknown;
};

/**
 * Hand-written stand-ins for `@vercel/node`'s `VercelRequest`/`VercelResponse` types, used
 * instead of depending on that package. `@vercel/node` bundles Vercel's own build/dev tooling
 * together with its types, which pulls in a large, frequently-shifting dependency tree just
 * for two interfaces - it was also the source of `npm audit`'s vulnerability warnings, and
 * got force-downgraded a full major version by `npm audit fix --force` trying to resolve
 * them. Vercel's Node.js runtime augments `req`/`res` with exactly this shape (parsed JSON
 * body on `req.body`, chainable `res.status()`, `res.json()`) regardless of which types
 * describe them, so this is functionally identical without the extra dependency.
 */
type ContactRequest = IncomingMessage & { body?: unknown };
type ContactResponse = ServerResponse & {
    status: (statusCode: number) => ContactResponse;
    json: (body: unknown) => void;
};

const resend = new Resend(process.env.RESEND_API_KEY);

/** A small "looks like an email" check - not RFC 5322-complete, just enough to reject
 * obvious garbage before it reaches Resend. The browser's `type="email"` input already gives
 * real users the friendlier validation; this is the backstop for requests that skip the UI
 * entirely (e.g. someone POSTing to this endpoint directly). */
const looksLikeEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

/**
 * Vercel serverless function backing the contact form's "send" action - the frontend's
 * `sendContactMessage` POSTs here. Validates the payload, then relays it through Resend to
 * the inbox set by `CONTACT_TO_EMAIL`.
 *
 * Both `RESEND_API_KEY` and `CONTACT_TO_EMAIL` come from environment variables (set in the
 * Vercel project's dashboard for deploys, or a local `.env`/`.env.local` for `vercel dev`)
 * rather than being hardcoded, so the real API key never sits in source control or the
 * client bundle - the reason this moved off a client-side service like EmailJS in the first
 * place (see ContactPage's earlier doc comments for that discussion).
 *
 * TODO: no rate limiting yet. Fine for a personal portfolio's current traffic, but if this
 * endpoint ever gets targeted directly (bypassing the frontend's honeypot, which only guards
 * the UI path - see ContactPage), consider per-IP rate limiting (e.g. Vercel KV/Upstash).
 *
 * @param req The incoming request; expects a JSON body of `{ name, email, message }`.
 * @param res Standard-shaped JSON responses: `{ success: true }` or `{ error: string }`.
 */
export default async function handler(req: ContactRequest, res: ContactResponse) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed." });
    }

    const { name, email, message } = (req.body ?? {}) as ContactRequestBody;

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof message !== "string" ||
        !name.trim() ||
        !email.trim() ||
        !message.trim()
    ) {
        return res.status(400).json({ error: "Name, email, and message are all required." });
    }

    if (!looksLikeEmail(email)) {
        return res.status(400).json({ error: "That email address doesn't look valid." });
    }

    const destination = process.env.CONTACT_TO_EMAIL;
    if (!destination) {
        // A misconfigured deploy, not the caller's fault - kept as a plain 500 so the
        // response doesn't leak env-var details, but logged server-side for debugging.
        console.error("CONTACT_TO_EMAIL is not set.");
        return res.status(500).json({ error: "Contact form is not configured yet." });
    }

    try {
        await resend.emails.send({
            // resend.dev's shared sender works without verifying a custom domain first -
            // swap this for a "you@yourdomain.com" address once a domain is verified with
            // Resend for a more professional "from" line.
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: destination,
            replyTo: email,
            subject: `New message from ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Failed to send contact email:", error);
        return res.status(500).json({ error: "Failed to send message. Please try again." });
    }
}
