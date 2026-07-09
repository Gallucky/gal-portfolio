import type { Translations } from "@/types/Languages";

/**
 * The shape of the WelcomeRecruiters section's translated content.
 */
export type WelcomeRecruitersContent = {
    subtitle: string;
    title: string;
    greeting: string;
    videoCaption: string;
    portfolioLabel: string;
    /** Public path to the language-specific recording of the pitch — Gal records the same
     * script once per language, so the video itself (not just the on-screen copy) switches
     * with {@link useLanguage}. */
    videoSrc: string;
};

/**
 * Translated content for the WelcomeRecruiters section — a short personal pitch (video)
 * aimed at recruiters/hiring managers landing here from a job application or email, with a
 * link through to the full portfolio.
 *
 * @see {@link WelcomeRecruitersContent} for the shape of each language's content.
 */
export const welcomeRecruitersSectionLang: Translations<WelcomeRecruitersContent> = {
    en: {
        subtitle: "For Recruiters & Hiring Managers",
        title: "Hey, I'm Gal 👋",
        greeting:
            "Thanks for stopping by - I put together this short video to introduce myself directly, instead of just leaving you with a resume. Take a look, and if you like what you see, the full portfolio is one click away.",
        videoCaption: "A quick hello from me.",
        portfolioLabel: "View Full Portfolio",
        videoSrc: "/videos/welcome-recruiters-en.mp4",
    },
    he: {
        subtitle: "למגייסים ומנהלי גיוס",
        title: "היי, אני גל 👋",
        greeting:
            "תודה שעצרת כאן - הכנתי סרטון קצר כדי להציג את עצמי ישירות, במקום להשאיר לך רק קורות חיים. תצפו, ואם אהבתם את מה שראיתם, כל התיק האישי שלי נמצא לחיצה אחת מכם.",
        videoCaption: "היי קצר ממני.",
        portfolioLabel: "צפו בתיק העבודות המלא",
        videoSrc: "/videos/welcome-recruiters-he.mp4",
    },
};
