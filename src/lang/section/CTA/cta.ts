import type { Translations } from "@/types/Languages";

/**
 * The shape of the CTA section's translated content.
 */
export type CTAContent = {
    title: string;
    description: string;
    contactLabel: string;
    cvLabel: string;
};

/**
 * Translated content for the CTA section (the closing "get in touch" / CV prompt).
 *
 * @see {@link CTAContent} for the shape of each language's content.
 */
export const ctaSectionLang: Translations<CTAContent> = {
    en: {
        title: "Contact Me",
        description: "Have a question or want to work together?",
        contactLabel: "Get in Touch",
        cvLabel: "Download CV",
    },
    he: {
        title: "צור קשר",
        description: "יש לך שאלה או רוצה לעבוד יחד?",
        contactLabel: "בואו נדבר",
        cvLabel: "הורד קורות חיים",
    },
};
