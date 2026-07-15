import type { UIImplementationProjectMetadata } from "../uiImplementationProjects";
import previewImage from "./project_preview.png";

/**
 * "Free Advisement" - a pixel-perfect HTML & CSS implementation of a Figma design for a
 * Hebrew-only consulting/advisement lead-capture landing page, styled with SASS.
 *
 * @see https://github.com/Gallucky/free-advisement for the source.
 */
const freeAdvisement: UIImplementationProjectMetadata = {
    slug: "free-advisement",
    stack: ["HTML", "CSS", "Sass"],
    githubFrontend: "https://github.com/Gallucky/free-advisement",
    screenshots: [
        {
            url: previewImage,
            alt: "Free Advisement Project Preview Image",
        },
    ],
    // page: a top accent border, a floating WhatsApp contact button, a hero phone-conversation
    // image next to a headline ("ייעוץ חינם" / "Free advisement") and supporting copy, a
    // name/email/message lead-capture form, and a row of social contact icons (Facebook,
    // Instagram, LinkedIn, phone) at the bottom. Screenshot exists in the repo
    // (images/project_preview.png) but couldn't be saved here - this sandbox can't reach
    // raw.githubusercontent.com to download it. Drop the file into this folder (e.g.
    // `project_preview.png`), import it, and add it to `screenshots` below; see `Screenshot`
    // in src/data/projects.ts for the expected shape.
    content: {
        en: {
            title: "Free Advisement",
            shortDescription:
                "A pixel-accurate, responsive HTML & CSS implementation of a Figma design for a Hebrew-only consulting lead-capture page, styled with SASS.",
            overview:
                "A UI implementation exercise built from a Figma design: a consulting/advisement landing page with a top accent border, a floating WhatsApp contact button, a hero phone-conversation image paired with a headline and supporting copy, a name/email/message lead-capture form, and a row of social contact icons (Facebook, Instagram, LinkedIn, phone) along the bottom. Built entirely in Hebrew - no language toggle, unlike the portfolio site itself.",
            architecture:
                "Static HTML with styles authored in SASS and compiled to plain CSS (the compiled output is committed, not hand-edited). Layout is mobile-first and responsive, using SASS-managed media queries and flexible units so the page adapts cleanly across viewports.",
            challenges: [],
            lessons: [],
        },
        he: {
            title: "ייעוץ חינם",
            shortDescription:
                "מימוש HTML ו-CSS מדויק לפיקסל ורספונסיבי של עיצוב Figma עבור דף נחיתה לאיסוף לידים לשירותי ייעוץ, כולו בעברית וכתוב ב-SASS.",
            overview:
                "תרגיל מימוש ממשק שנבנה מעיצוב Figma: דף נחיתה לשירותי ייעוץ עם קו הדגשה עליון, כפתור וואטסאפ צף ליצירת קשר, תמונת שיחת טלפון ראשית לצד כותרת וטקסט תומך, טופס איסוף לידים לשם/אימייל/הודעה, ושורת אייקוני יצירת קשר ברשתות (פייסבוק, אינסטגרם, לינקדאין, טלפון) בתחתית העמוד. נבנה כולו בעברית - ללא מתג שפה, בשונה מהאתר עצמו.",
            architecture:
                "HTML סטטי עם עיצוב שנכתב ב-SASS וקומפל ל-CSS רגיל (הפלט המקומפל נשמר במאגר, לא נערך ידנית). הפריסה היא מובייל-פירסט ורספונסיבית, ומשתמשת ב-media queries ויחידות גמישות המנוהלים ב-SASS כך שהעמוד מתאים עצמו בצורה נקייה לכל רוחב מסך.",
            challenges: [],
            lessons: [],
        },
    },
};

export default freeAdvisement;
