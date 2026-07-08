import type { Translations } from "@/types/Languages";

/**
 * The shape of the About section's translated content.
 */
export type AboutContent = {
    subtitle: string;
    title: string;
    /** Bio paragraphs, rendered in order: the first is the short intro shown above the
     * Skills card, the rest continue underneath it. Written in chronological order - high
     * school foundation, pre-army programs, IDF service, self-initiated scripting work, the
     * HackerU course, and finally where things stand now. Some paragraphs contain glossary
     * terms (e.g. "Star-Tech", "Magshimim", "HackerU") that {@link renderWithGlossary} turns
     * into clickable popups - the exact wording of those terms must match the labels in
     * {@link glossarySectionLang}. */
    paragraphs: string[];
    skillsTitle: string;
};

/**
 * Translated content for the About section (the developer's background and skills).
 *
 * Bio content is kept factual and grounded in Gal's actual background, told in
 * chronological order: 5-unit Bagrut tracks in Software Engineering, Computer Science,
 * Physics, Math and English; the Star-Tech (9th grade) and Magshimim (10th-12th grade)
 * programs; his IDF service as a Network Administrator; the Batch/PowerShell automation
 * work he built on his own initiative during that service; the HackerU web development
 * course; and the current job search toward a first developer role.
 *
 * @see {@link AboutContent} for the shape of each language's content.
 */
export const aboutSectionLang: Translations<AboutContent> = {
    en: {
        subtitle: "Get to Know Me",
        title: "About Me",
        paragraphs: [
            "Hi, I'm Gal - a 21-year-old from Israel. I'm a released IDF soldier, with a " +
                "technical foundation that goes back to high school, long before my service " +
                "began.",
            "In high school, I completed a Bagrut (Israel's high-school diploma track) with 10 " +
                "units in Computers (5 in Software Engineering, 5 in Computer Science), " +
                "alongside 5-unit tracks in Physics, Mathematics, and English. Alongside my " +
                "studies, I took part in the Star-Tech program in 9th grade, followed by " +
                "Magshimim - Israel's national cyber education program - from 10th through 12th " +
                "grade.",
            "During my military service, I served as a Network Administrator, handling " +
                "computers, internet connectivity, and peripheral equipment such as keyboards, " +
                "mice, and printers, alongside managing user permissions and software " +
                "installations for over a thousand active users.",
            "On my own initiative, I also developed Batch and, primarily, PowerShell scripts " +
                "that streamlined my department's repetitive tasks, cutting jobs that used to " +
                "take hours - sometimes days - down to just minutes. The scripts were approved " +
                "and supervised, but the idea and the freedom to build them were mine; it was " +
                "something extra I chose to do, not something required of me.",
            "During my service, I also completed a year-and-three-month web development course " +
                "at HackerU, where I built real, end-to-end projects using React, Node.js, and " +
                "MongoDB.",
            "I'm now actively looking for my first developer role, ready to bring that same " +
                "initiative and structured problem-solving to a team - while continuing to work " +
                "toward a B.A. in Software Engineering.",
        ],
        skillsTitle: "Skills",
    },
    he: {
        subtitle: "קצת עליי",
        title: "אודותיי",
        paragraphs: [
            "היי, אני גל - בן 21 מישראל. אני חייל משוחרר מצה\"ל, עם רקע טכנולוגי שמתחיל " +
                "עוד בתיכון, הרבה לפני תחילת השירות שלי.",
            "בתיכון סיימתי בגרות עם 10 יחידות לימוד במחשבים (5 יח\"ל בהנדסת תוכנה ו-5 יח\"ל " +
                "במדעי המחשב), לצד 5 יחידות לימוד בפיזיקה, במתמטיקה ובאנגלית. במקביל ללימודים " +
                "השתתפתי בתוכנית סטארטק בכיתה ט', ולאחר מכן בתוכנית מגשימים - התוכנית הלאומית " +
                "לחינוך סייבר - מכיתה י' ועד יב'.",
            "במהלך השירות הצבאי שירתתי בתפקיד מנהל רשת, וטיפלתי במחשבים, בחיבורי אינטרנט " +
                "ובציוד נלווה כגון מקלדות, עכברים ומדפסות, לצד מתן הרשאות והתקנת תוכנות עבור " +
                "מעל אלף משתמשים פעילים.",
            "ביוזמתי פיתחתי גם סקריפטים בשפת Batch ובעיקר ב-PowerShell, שייעלו את העבודות " +
                "החוזרות של המחלקה וקיצרו משימות שנמשכו שעות ואף ימים לכדי דקות בודדות. " +
                "הסקריפטים פותחו באישור ובבקרה, אך הרעיון והחופש לפתח אותם היו שלי - זו הייתה " +
                "תוספת שבחרתי לעשות, לא דרישה.",
            "במהלך השירות גם סיימתי קורס בניית אתרים בהאקריו שנמשך שנה ושלושה חודשים, ובו " +
                "בניתי פרויקטים אמיתיים מקצה לקצה תוך שימוש ב-React, Node.js ו-MongoDB.",
            "כרגע אני מחפש באופן פעיל את משרת הפיתוח הראשונה שלי, מוכן להביא את אותה יוזמה " +
                "וגישה שיטתית לפתרון בעיות לצוות - תוך המשך התקדמות לתואר ראשון בהנדסת תוכנה.",
        ],
        skillsTitle: "כישורים",
    },
};
