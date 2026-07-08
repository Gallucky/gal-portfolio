import type { Translations } from "@/types/Languages";

/**
 * A single glossary entry: a term that appears verbatim inside an About section bio
 * paragraph (see {@link AboutContent.paragraphs}) and gets turned into a clickable popup by
 * {@link renderWithGlossary}.
 */
export type GlossaryEntry = {
    /** The exact substring to find and highlight inside the bio text - must match the
     * spelling used in the corresponding language's paragraphs verbatim (e.g. "HackerU",
     * "האקריו"). */
    label: string;
    /** Short (1-2 sentence) explanation shown in the popup. */
    description: string;
    /** The program/course's official page, opened in a new tab from the popup. */
    href: string;
};

export type GlossaryKey = "startech" | "magshimim" | "hackeru";

/**
 * The full translated content for the glossary popups: the three terms referenced in the
 * bio (Star-Tech, Magshimim, HackerU) plus the shared UI copy for their popup ("visit site"
 * / "close").
 */
export type GlossaryContent = {
    entries: Record<GlossaryKey, GlossaryEntry>;
    ctaLabel: string;
    closeLabel: string;
};

/**
 * Translated glossary content, sourced from each program's official page:
 * - Star-Tech: Rashi Foundation junior-high (grades 7-9) tech/programming enrichment program.
 * - Magshimim: Israel's national 3-year cyber/computer excellence program for grades 10-12.
 * - HackerU: the Full-Stack (front-end + back-end) web development course.
 *
 * @see {@link GlossaryContent} for the shape of each language's content.
 */
export const glossarySectionLang: Translations<GlossaryContent> = {
    en: {
        entries: {
            startech: {
                label: "Star-Tech",
                description:
                    "A Rashi Foundation enrichment program for junior-high students, introducing " +
                    "programming, computers, and cyber fields through building games and " +
                    "hands-on projects.",
                href: "https://rashi.org.il/en/programs/startech/",
            },
            magshimim: {
                label: "Magshimim",
                description:
                    "Israel's national three-year cyber and computer excellence program for high " +
                    "schoolers (10th-12th grade), run in small groups with no prior knowledge " +
                    "required.",
                href: "https://www.magshimim.cyber.org.il/about",
            },
            hackeru: {
                label: "HackerU",
                description:
                    "The Israeli tech education company behind the hands-on Full-Stack web " +
                    "development course I completed, covering front-end and back-end " +
                    "development, including React and Node.js.",
                href: "https://www.hackeru.co.il/course/web-developer",
            },
        },
        ctaLabel: "Visit official site",
        closeLabel: "Close",
    },
    he: {
        entries: {
            startech: {
                label: "סטארטק",
                description:
                    'תוכנית העשרה של קרן רש"י לתלמידי חטיבת ביניים, המקנה חשיפה לתכנות, ' +
                    "מחשבים ותחומי הסייבר דרך בניית משחקים ופרויקטים מעשיים.",
                href: "https://rashi.org.il/en/programs/startech/",
            },
            magshimim: {
                label: "מגשימים",
                description:
                    "התוכנית הלאומית להעשרה בתחומי מחשבים וסייבר לבני נוער בתיכון (כיתות " +
                    "י'-יב'), הנלמדת בקבוצות קטנות ואינה דורשת ידע קודם.",
                href: "https://www.magshimim.cyber.org.il/about",
            },
            hackeru: {
                label: "האקריו",
                description:
                    "חברת הכשרות טכנולוגיות ישראלית, שבה השלמתי קורס פיתוח אתרים מעשי " +
                    "בגישת Full-Stack, הכולל פיתוח צד לקוח וצד שרת, ובהם React ו-Node.js.",
                href: "https://www.hackeru.co.il/course/web-developer",
            },
        },
        ctaLabel: "לעמוד הרשמי",
        closeLabel: "סגור",
    },
};
