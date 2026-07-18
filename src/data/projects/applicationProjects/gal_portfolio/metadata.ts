import type { ApplicationProjectMetadata } from "../applicationProjects";
import previewImage from "./project_preview.png";
// No screenshot yet - drop the actual file in this folder as `project_preview.png`
// (see e.g. `weather_cast/metadata.ts` for the pattern) and add a `screenshots` entry below
// once it exists.

/**
 * "gal-portfolio" - this very site: Gal's current portfolio, a React/TypeScript/Vite app with
 * full English/Hebrew i18n (including RTL), a data-driven project catalog, and a live contact
 * form, deployed on Vercel.
 *
 * Featured as the current flagship, replacing the original vanilla HTML/CSS/JS
 * {@link https://github.com/Gallucky/HackerU-Gal-Ben-Abu-s-Portfilio-Project | HackerU portfolio project}
 * this codebase is self-referential - this project entry describes the site that is rendering it.
 *
 * @see https://github.com/Gallucky/gal-portfolio for the source.
 * @see https://gal-portfolio-pi.vercel.app/ for the live deployment.
 */
const galPortfolio: ApplicationProjectMetadata = {
    slug: "gal-portfolio",
    featured: true,
    stack: [
        "TypeScript",
        "React",
        "Vite",
        "TailwindCSS",
        "React Router",
        "Framer Motion",
        "Resend",
    ],
    githubLinks: [{ label: "View Repository", url: "https://github.com/Gallucky/gal-portfolio" }],
    liveUrl: "https://gal-portfolio-pi.vercel.app/",
    screenshots: [
        {
            url: previewImage,
            alt: "gal-portfolio Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "gal-portfolio",
            shortDescription:
                "Gal's current portfolio site - a React/TypeScript/Vite app with full English/Hebrew i18n, a data-driven project catalog (this entry included), and a live contact form.",
            overview:
                "This site itself: a personal portfolio built to replace the original vanilla-JS HackerU portfolio with a proper React/TypeScript app. Every project - including this one - is defined as structured metadata (stack, links, screenshots, per-language content) rather than hardcoded markup, rendered through shared card/detail/grid views. The whole UI is bilingual (English/Hebrew) with real RTL support, not just mirrored text, and includes a working contact form backed by Resend.",
            architecture:
                "Vite + React 19 + TypeScript, styled with TailwindCSS 4 and animated with Framer Motion. Content is organized by concern: `components/section` for page sections, `components/ui` for reusable elements, `pages` for routed views, and `data/projects/<category>/<slug>/metadata.ts` for one file per project, aggregated by category (`applicationProjects.ts`, `markupProjects.ts`, etc.) into a single `allProjects` list consumed across the site. Translatable copy lives in a parallel `lang/` tree mirroring the component structure, keeping human-readable strings out of components entirely. Path aliases (`@components`, `@data`, `@lang`, etc.) replace relative imports throughout.",
            challenges: [
                "Modeling 'a project' as a single reusable type (`Project`/`CategorizedProject`) that has to describe everything from a vanilla-JS landing page to this very site's own metadata meant keeping the schema generic enough to fit wildly different kinds of work without becoming a pile of optional fields nobody fills in consistently.",
                "Building real bilingual support (not just translated strings, but RTL-aware layout using logical CSS properties) meant every new component had to be designed with both directions in mind from the start, rather than retrofitting RTL after the fact.",
            ],
            lessons: [
                "Treating projects as data (one metadata file per project, aggregated per category) instead of one-off JSX per project page made adding a new project - even this self-referential one - a matter of writing a metadata file, not touching rendering code.",
                "Keeping all human-readable text in a mirrored `lang/` tree instead of inline in components made the English/Hebrew split enforceable at the type level and kept components focused purely on structure and behavior.",
            ],
        },
        he: {
            title: "gal-portfolio",
            shortDescription:
                "אתר הפורטפוליו הנוכחי של גל - אפליקציית React/TypeScript/Vite עם תרגום מלא לאנגלית/עברית, קטלוג פרויקטים מבוסס נתונים (כולל הפרויקט הזה עצמו), וטופס יצירת קשר פעיל.",
            overview:
                "האתר הזה עצמו: פורטפוליו אישי שנבנה כדי להחליף את פורטפוליו ה-HackerU המקורי מבוסס JavaScript טהור באפליקציית React/TypeScript אמיתית. כל פרויקט - כולל זה - מוגדר כמטא-דאטה מובנית (טכנולוגיות, קישורים, תצוגות מקדימות, תוכן לפי שפה) במקום מרקאפ מקודד קשיח, ומוצג דרך תצוגות כרטיס/פירוט/רשת משותפות. כל הממשק דו-לשוני (אנגלית/עברית) עם תמיכת RTL אמיתית, לא רק טקסט משוקף, וכולל טופס יצירת קשר פעיל המגובה על ידי Resend.",
            architecture:
                "Vite + React 19 + TypeScript, מעוצב עם TailwindCSS 4 ומונפש עם Framer Motion. התוכן מאורגן לפי תחום: `components/section` לסקציות עמוד, `components/ui` לרכיבים לשימוש חוזר, `pages` לתצוגות מנותבות, ו-`data/projects/<category>/<slug>/metadata.ts` לקובץ אחד לכל פרויקט, מרוכז לפי קטגוריה (`applicationProjects.ts`, `markupProjects.ts` וכו') לרשימת `allProjects` יחידה הנצרכת בכל האתר. תוכן ניתן לתרגום חי בעץ `lang/` מקביל המשקף את מבנה הרכיבים, ושומר מחרוזות קריאות-אדם לגמרי מחוץ לרכיבים. כינויי נתיב (`@components`, `@data`, `@lang` וכו') מחליפים ייבואים יחסיים לאורך כל האתר.",
            challenges: [
                "מידול 'פרויקט' כטיפוס אחד לשימוש חוזר (`Project`/`CategorizedProject`) שצריך לתאר הכול, מעמוד נחיתה ב-JavaScript טהור ועד המטא-דאטה של האתר הזה עצמו, חייב לשמור על הסכימה גנרית מספיק כדי להתאים לסוגי עבודה שונים לחלוטין בלי להפוך לערימת שדות אופציונליים שאף אחד לא ממלא בעקביות.",
                "בניית תמיכה דו-לשונית אמיתית (לא רק מחרוזות מתורגמות, אלא פריסה מודעת RTL באמצעות תכונות CSS לוגיות) חייבה שכל רכיב חדש ייבנה מראש עם שני הכיוונים בראש, במקום להתאים RTL בדיעבד.",
            ],
            lessons: [
                "התייחסות לפרויקטים כנתונים (קובץ מטא-דאטה אחד לכל פרויקט, מרוכז לפי קטגוריה) במקום JSX חד-פעמי לכל עמוד פרויקט הפכה הוספת פרויקט חדש - אפילו הפרויקט הזה שמתאר את עצמו - לעניין של כתיבת קובץ מטא-דאטה, בלי לגעת בקוד התצוגה.",
                "שמירת כל הטקסט הקריא-אדם בעץ `lang/` מקביל במקום inline ברכיבים הפכה את הפיצול אנגלית/עברית לניתן לאכיפה ברמת הטיפוסים, ושמרה על הרכיבים ממוקדים אך ורק במבנה ובהתנהגות.",
            ],
        },
    },
};

export default galPortfolio;
