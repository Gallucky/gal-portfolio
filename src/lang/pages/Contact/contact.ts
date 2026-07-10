import type { Translations } from "@/types/Languages";

/**
 * The shape of the Contact page's translated content: the header copy, each form field's
 * label/placeholder, and the button/status copy for every step of the submit lifecycle
 * (idle -> loading -> success | error).
 */
export type ContactContent = {
    subtitle: string;
    title: string;
    description: string;
    form: {
        name: { label: string; placeholder: string };
        /** `invalidHint` is surfaced by the browser's native validation bubble (via the
         * `title` attribute on the underlying `<input>`) when the email fails the `pattern`
         * check - native `type="email"` alone accepts "a@a" with no real domain, so `pattern`
         * tightens that and `title` supplies the message shown instead of a raw regex dump. */
        email: { label: string; placeholder: string; invalidHint: string };
        message: { label: string; placeholder: string };
    };
    submitLabel: string;
    submittingLabel: string;
    success: { title: string; message: string; resetLabel: string };
    error: { title: string; message: string };
};

/**
 * Translated content for the {@link ContactPage} - the standalone contact form page
 * (reachable at `/contact`).
 *
 * @see {@link ContactContent} for the shape of each language's content.
 */
export const contactPageLang: Translations<ContactContent> = {
    en: {
        subtitle: "Get In Touch",
        title: "Let's Talk",
        description:
            "Have a question, an opportunity, or just want to say hi? Fill out the form below and I'll get back to you as soon as I can.",
        form: {
            name: { label: "Name", placeholder: "Your name" },
            email: {
                label: "Email",
                placeholder: "you@example.com",
                invalidHint: "Please enter a valid email address, e.g. name@example.com",
            },
            message: { label: "Message", placeholder: "What's on your mind?" },
        },
        submitLabel: "Send Message",
        submittingLabel: "Sending",
        success: {
            title: "Message sent!",
            message: "Thanks for reaching out - I'll get back to you soon.",
            resetLabel: "Send another message",
        },
        error: {
            title: "Something went wrong",
            message: "Your message wasn't sent. Please try again in a moment.",
        },
    },
    he: {
        subtitle: "בואו נדבר",
        title: "יצירת קשר",
        description: "יש לך שאלה, הזדמנות, או סתם רוצה להגיד היי? מלאו את הטופס ואחזור אליכם בהקדם.",
        form: {
            name: { label: "שם", placeholder: "השם שלך" },
            email: {
                label: "אימייל",
                placeholder: "you@example.com",
                invalidHint: "אנא הזינו כתובת אימייל תקינה, למשל name@example.com",
            },
            message: { label: "הודעה", placeholder: "מה תרצו לומר?" },
        },
        submitLabel: "שליחת הודעה",
        submittingLabel: "שולח",
        success: {
            title: "ההודעה נשלחה!",
            message: "תודה שפניתם אליי - אחזור אליכם בהקדם.",
            resetLabel: "שליחת הודעה נוספת",
        },
        error: {
            title: "משהו השתבש",
            message: "ההודעה לא נשלחה. אנא נסו שוב בעוד רגע.",
        },
    },
};
