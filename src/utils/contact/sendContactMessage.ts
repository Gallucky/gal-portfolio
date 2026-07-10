/**
 * The fields collected by {@link ContactPage}'s form.
 */
export type ContactMessagePayload = {
    name: string;
    email: string;
    message: string;
};

/**
 * Submits a contact form message by POSTing it to the `/api/contact` Vercel Function
 * (api/contact.ts at the repo root), which validates it server-side and relays it to the
 * developer's inbox via Resend.
 *
 * Only reachable once the app is served by Vercel - either deployed, or locally via
 * `vercel dev` instead of the plain `npm run dev` (Vite-only) server. A bare Vite dev server
 * has no `/api/*` routes, so this will 404 there.
 *
 * @param payload The name/email/message entered by the user.
 * @throws If the request fails or the server rejects the payload, so {@link ContactPage} can
 * drive its error state and keep whatever the user already typed.
 */
export const sendContactMessage = async (payload: ContactMessagePayload): Promise<void> => {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error("Failed to send contact message.");
    }
};
