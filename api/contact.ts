import { Resend } from "resend";
import type { IncomingMessage, ServerResponse } from "node:http";

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

/** Escapes the characters that would otherwise be interpreted as markup, since `name` and
 * `message` are attacker-controllable free text embedded directly into the email's `html`
 * body below - without this, a submission could inject its own markup/links into the email
 * that lands in your inbox. */
const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

/**
 * Builds the HTML body for a contact form notification email. Deliberately plain inline
 * styles only - no `<style>` block, no flexbox/grid, no CSS custom properties - because email
 * clients (Outlook desktop especially) support a much smaller, more inconsistent subset of
 * CSS than browsers do. This is also why the colors below are plain hex rather than the
 * site's `oklch()` tokens from globals.css: this HTML is a standalone document with no
 * connection to the site's stylesheet, and most email clients can't parse `oklch()` at all.
 * `white-space: pre-wrap` preserves the message's line breaks without needing to convert them
 * to `<br>` tags by hand.
 */
const buildContactEmailHtml = (payload: { name: string; email: string; message: string }) => {
    const name = escapeHtml(payload.name);
    const email = escapeHtml(payload.email);
    const message = escapeHtml(payload.message);

    return `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; padding: 32px 16px;">
  <div style="max-width: 480px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
    <div style="background-color: #1e3a8a; padding: 20px 24px;">
      <p style="margin: 0; color: #ffffff; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;">New Contact Form Message</p>
    </div>
    <div style="padding: 24px;">
      <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">From</p>
      <p style="margin: 0 0 20px; color: #0f172a; font-size: 16px;">${name} &lt;${email}&gt;</p>
      <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
      <p style="margin: 0; color: #0f172a; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
    </div>
    <div style="padding: 14px 24px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
      <p style="margin: 0; color: #94a3b8; font-size: 12px;">Sent from the contact form on your portfolio.</p>
    </div>
  </div>
</div>`.trim();
};

/**
 * Vercel serverless function backing the contact form's "send" action - the frontend's
 * `sendContactMessage` POSTs here. Validates the payload, then relays it through Resend to
 * the inbox set by `CONTACT_TO_EMAIL`.
 *
 * Lives in a top-level `api/` folder (sibling to `src/`), not under `src/`, because Vercel
 * only auto-detects serverless functions in a project-root `api/` directory - each file there
 * becomes an endpoint at the matching `/api/*` path (this one -> `/api/contact`). It also has
 * its own `api/tsconfig.json` and `typecheck:api` script since it builds as a separate Vercel
 * Function project, independent of the Vite/React app's build.
 *
 * Both `RESEND_API_KEY` and `CONTACT_TO_EMAIL` come from environment variables (set in the
 * Vercel project's dashboard for deploys, or a local `.env`/`.env.local` for `vercel dev`)
 * rather than being hardcoded, so the real API key never sits in source control or the
 * client bundle - the reason this moved off a client-side service like EmailJS in the first
 * place (see ContactPage's earlier doc comments for that discussion).
 *
 * `EMAIL_DRY_RUN=true` skips the actual Resend call and just logs the payload instead, still
 * returning the normal success response - lets the form (validation, honeypot, loading/error
 * states, etc.) be tested repeatedly during local `vercel dev` without spending Resend's
 * 100/day free-tier quota, which - per Resend's own docs - even their official test addresses
 * (delivered@resend.dev etc.) still count against. Only meant for local testing; never set
 * this in the real Vercel project's environment variables, or production submissions will
 * silently stop being delivered.
 *
 * Note: no rate limiting yet. Fine for a personal portfolio's current traffic, but if this
 * endpoint ever gets targeted directly (bypassing the frontend's honeypot, which only guards
 * the UI path - @see {@link ContactPage}), consider per-IP rate limiting (e.g. Vercel KV/Upstash).
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
        if (process.env.EMAIL_DRY_RUN === "true") {
            console.log("[EMAIL_DRY_RUN] Would send contact email:", { name, email, message });
        } else {
            await resend.emails.send({
                // resend.dev's shared sender works without verifying a custom domain first -
                // swap this for a "you@yourdomain.com" address once a domain is verified with
                // Resend for a more professional "from" line.
                from: "Portfolio Contact <onboarding@resend.dev>",
                to: destination,
                replyTo: email,
                subject: `New message from ${name}`,
                text: `From: ${name} <${email}>\n\n${message}`,
                html: buildContactEmailHtml({ name, email, message }),
            });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Failed to send contact email:", error);
        return res.status(500).json({ error: "Failed to send message. Please try again." });
    }
}
