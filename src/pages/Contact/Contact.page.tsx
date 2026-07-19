import { contactPageLang as lang } from "@lang/pages/Contact/contact";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import FormInput from "@components/ui/FormInput";
import FormTextboxInput from "@components/ui/FormTextboxInput";
import { sendContactMessage, type ContactMessagePayload } from "@utils/contact/sendContactMessage";

/** The contact form's lifecycle. Idle is the default; loading is set the instant the form
 * is submitted; success clears the fields, error restores them so nothing typed is lost. */
type ContactFormStatus = "idle" | "loading" | "success" | "error";

const emptyFormData: ContactMessagePayload = { name: "", email: "", message: "" };

/**
 * Renders the submit button's loading indicator: three dots bobbing up and down in a wave,
 * per this page's documented loading behavior (see {@link ContactPage}'s doc comment). Each
 * dot's `animation-delay` is staggered so they move out of phase instead of in lockstep.
 * @see Contact.page.css for the `animate-submit-dot-wave` keyframes.
 * @returns The submit button's loading indicator.
 */
const SubmitDotWave = () => (
    <span className="inline-flex items-center gap-1" role="status" aria-hidden="true">
        {[0, 1, 2].map((i) => (
            <span
                key={i}
                className="size-1.5 rounded-full bg-bg-dark animate-submit-dot-wave"
                style={{ animationDelay: `${i * 150}ms` }}
            />
        ))}
    </span>
);

/**
 * This is the contact page of the application, reachable at `/contact`.
 * This page is solely a form for the user to contact the developer; each submission is sent
 * to the developer's business email via {@link sendContactMessage}.
 *
 * Unlike {@link AboutPage} and {@link WelcomeRecruitersPage}, this page renders its content
 * directly rather than delegating to a `components/section` component - a contact form is
 * inherently single-page content with no reuse case on the home page, so it doesn't need the
 * section/page split those pages use.
 *
 * The form has 4 modes, tracked by {@link ContactFormStatus}:
 * - Idle - the default state.
 * - Loading - submit is disabled and shows {@link SubmitDotWave}.
 * - Success - fields are cleared and a checkmark confirmation replaces the form.
 * - Error - the user's input is restored (nothing is cleared) and an inline error banner is
 *   shown above the form so they can just retry.
 *
 * `pt-[var(--navbar-height)]` clears the fixed Navbar the same way {@link AboutPage} does -
 * this page has no Hero above it to push content down naturally.
 *
 * @see src/router/router.tsx for how this page is composed into the route tree.
 * @returns The ContactPage page component.
 */
const ContactPage = () => {
    const { language } = useLanguage();
    const data = lang[language];

    const [status, setStatus] = useState<ContactFormStatus>("idle");
    const [formData, setFormData] = useState<ContactMessagePayload>(emptyFormData);
    // Honeypot: a field no sighted/screen-reader user can reach (aria-hidden + tabIndex={-1}
    // + off-screen via .contact-honeypot in Contact.page.css) but that naive bots filling
    // every input in the DOM will populate. A non-empty value here means the submission is
    // spam, so it's rejected before sendContactMessage is ever called.
    const [honeypot, setHoneypot] = useState("");

    const isSubmitting = status === "loading";

    const updateField = (field: keyof ContactMessagePayload) => (value: string) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (honeypot) {
            // Bot filled the hidden field. Pretend the submission succeeded (same UI a real
            // sender would see) without calling sendContactMessage - a differing response
            // would let a bot detect and route around the honeypot.
            setStatus("success");
            setFormData(emptyFormData);
            setHoneypot("");
            return;
        }

        setStatus("loading");

        try {
            await sendContactMessage(formData);
            setStatus("success");
            setFormData(emptyFormData);
        } catch {
            // Deliberately not clearing formData here - restoring what the user already typed
            // is the whole point of the error state (see doc comment above).
            setStatus("error");
        }
    };

    return (
        <div className="w-[90%] sm:w-[75%] flex flex-col items-center justify-center justify-self-center pt-[var(--navbar-height)]">
            <div className="w-full max-w-[80ch] mx-auto px-4 py-8 flex flex-col items-center">
                <div className="text-center">
                    <h2 className="text-xs text-color-muted font-bold font-assistant mb-2 tracking-widest">
                        {data.subtitle.toUpperCase()}
                    </h2>
                    <h1 className="text-3xl text-primary font-bold text-outline font-Heebo tracking-tight mb-4">
                        {data.title}
                    </h1>
                    <p className="text-base text-color tracking-wide font-body leading-relaxed">
                        {data.description}
                    </p>
                </div>

                <div className="w-full rounded-lg border border-border bg-linear-to-br from-bg-dark to-bg p-6 shadow-2xl mt-8">
                    {status === "success" ? (
                        <div className="flex flex-col items-center text-center gap-3 py-4">
                            <CheckCircle2 aria-hidden="true" className="size-12 text-success" />
                            <h3 className="text-xl font-bold text-color">{data.success.title}</h3>
                            <p className="text-base text-color-muted">{data.success.message}</p>
                            <button
                                type="button"
                                onClick={() => setStatus("idle")}
                                className="mt-2 rounded-3xl border border-primary text-primary px-4 py-2 font-bold hover:bg-primary/10 transition-colors hover:cursor-pointer">
                                {data.success.resetLabel}
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            aria-busy={isSubmitting}
                            className="flex flex-col gap-5">
                            {/* Honeypot field - invisible and unreachable to real users (see
                                the `honeypot` state doc comment above), left for bots to fill.
                                `name="company"` is a deliberately plausible-looking field name
                                for a scraper to auto-fill; a real human never sees or tabs to
                                it. */}
                            <div className="contact-honeypot" aria-hidden="true">
                                <label htmlFor="company">Company</label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={honeypot}
                                    onChange={(event) => setHoneypot(event.target.value)}
                                />
                            </div>

                            {status === "error" && (
                                <div
                                    role="alert"
                                    className="flex items-start gap-2 rounded-lg border border-danger/40 bg-danger/10 px-4 py-3 text-start">
                                    <AlertCircle
                                        aria-hidden="true"
                                        className="size-5 text-danger shrink-0 mt-0.5"
                                    />
                                    <div>
                                        <p className="text-sm font-bold text-danger">
                                            {data.error.title}
                                        </p>
                                        <p className="text-sm text-color-muted">
                                            {data.error.message}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <FormInput
                                id="contact-name"
                                label={data.form.name.label}
                                placeholder={data.form.name.placeholder}
                                value={formData.name}
                                onChange={updateField("name")}
                                required
                                disabled={isSubmitting}
                                autoComplete="name"
                            />
                            <FormInput
                                id="contact-email"
                                label={data.form.email.label}
                                type="email"
                                placeholder={data.form.email.placeholder}
                                value={formData.email}
                                onChange={updateField("email")}
                                required
                                disabled={isSubmitting}
                                autoComplete="email"
                                // Native `type="email"` alone accepts things like "a@a" with
                                // no real domain - this `pattern` requires an actual dot after
                                // the @ (matches the api/contact.ts server-side check), and
                                // `title` is what the browser shows in its validation bubble
                                // instead of the raw regex.
                                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                                title={data.form.email.invalidHint}
                            />
                            <FormTextboxInput
                                id="contact-message"
                                label={data.form.message.label}
                                placeholder={data.form.message.placeholder}
                                value={formData.message}
                                onChange={updateField("message")}
                                required
                                disabled={isSubmitting}
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="self-center mt-2 rounded-3xl bg-primary text-bg-dark px-6 py-2 font-bold hover:bg-secondary transition-colors hover:cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        {data.submittingLabel}
                                        <SubmitDotWave />
                                    </>
                                ) : (
                                    data.submitLabel
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
