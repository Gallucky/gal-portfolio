import type { Translations } from "@/types/Languages";

/**
 * The shape of the Hero section's translated content.
 */
export type HeroContent = {
    title: string;
    subtitle: string;
    description: string;
};

/**
 * Translated content for the Hero section (the landing title and intro description).
 *
 * @see {@link HeroContent} for the shape of each language's content.
 */
export const heroSectionLang: Translations<HeroContent> = {
    en: {
        title: "Gal Ben Abu",
        subtitle: "Full-Stack Web Developer",
        description:
            "Welcome to my portfolio.\n" +
            "Explore selected projects showcasing my skills in " +
            "web development,\nalongside updates on the technologies I specialize in.",
    },
    he: {
        title: "גל בן אבו",
        subtitle: "מפתח אתרים (Full-Stack)",
        description:
            "ברוכים הבאים לתיק העבודות שלי.\n" +
            "גלו פרויקטים נבחרים המציגים את הכישורים שלי בפיתוח " +
            "אתרים,\nלצד עדכונים על הטכנולוגיות בהן אני מתמחה.",
    },
};
