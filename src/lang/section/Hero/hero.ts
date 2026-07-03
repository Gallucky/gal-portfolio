import type { Translations } from "@/types/Languages";

/**
 * The shape of the Hero section's translated content.
 */
export type HeroContent = {
    title: string;
    description: string;
};

/**
 * Translated content for the Hero section (the landing title and intro description).
 *
 * @see {@link HeroContent} for the shape of each language's content.
 */
export const heroSectionLang: Translations<HeroContent> = {
    en: {
        title: "Portfolio",
        description:
            "Welcome to my portfolio website. Here, you can explore a variety of works and " +
            "services I offer in web development and programming. The site showcases selected " +
            "projects that demonstrate my skills, alongside professional content and updates " +
            "on the technologies I specialize in.",
    },
    he: {
        title: "תיק עבודות",
        description:
            "ברוכים הבאים לאתר הפורטפוליו שלי. " +
            "כאן תוכלו להתרשם ממגוון העבודות והשירותים שאני מציע בתחום פיתוח אתרים ותכנות. " +
            "האתר מציג פרויקטים נבחרים שממחישים את היכולות שלי, " +
            "לצד תכנים מקצועיים ועדכונים על הטכנולוגיות בהן אני מתמחה.",
    },
};
