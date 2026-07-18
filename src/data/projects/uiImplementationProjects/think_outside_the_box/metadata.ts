import type { UIImplementationProjectMetadata } from "../uiImplementationProjects";
import previewImage from "./project_preview.png";

/**
 * "Think Outside the Box" - a pixel-perfect HTML & CSS implementation of a Figma design for a
 * Hebrew-only professional-services/consulting landing page, built with a modular SASS
 * architecture (variables, colors, and mixins split into dedicated partials).
 *
 * @see https://github.com/Gallucky/think-outside-the-box for the source.
 */
const thinkOutsideTheBox: UIImplementationProjectMetadata = {
    slug: "think-outside-the-box",
    stack: ["HTML", "CSS", "Sass"],
    githubLinks: [
        {
            label: "View Repository",
            url: "https://github.com/Gallucky/think-outside-the-box",
        },
    ],
    screenshots: [
        {
            url: previewImage,
            alt: "Think Outside the Box Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "Think Outside the Box",
            shortDescription:
                "A pixel-accurate, responsive HTML & CSS implementation of a Figma design for a Hebrew-only consulting landing page, built with a modular SASS architecture.",
            overview:
                "A UI implementation exercise built from a Figma design: a consulting/professional-services landing page with an RTL hero section (headline, subtext, and an SVG illustration), three icon-driven service cards, a contact form paired with an embedded Google Map, a circular social contact bar (WhatsApp, Facebook, Instagram, LinkedIn, phone), and a fixed floating WhatsApp button that hides on mobile. Built entirely in Hebrew - no language toggle, unlike the portfolio site itself.",
            architecture:
                "Styles are authored in a modular SASS (SCSS) architecture rather than one flat stylesheet: dedicated partials for color tokens (colors.scss), size/spacing variables (vars.scss), and reusable mixins (flex.scss, border.scss, position.scss, margins_paddings.scss), all pulled together via @use into a single compiled CSS output. Fully responsive with a single mobile breakpoint at 768px - column-reversed flex layouts, scaled typography/images, adjusted form sizing, full-width cards/map, and the floating WhatsApp button hidden on small screens.",
            challenges: [],
            lessons: [],
        },
        he: {
            title: "לחשוב מחוץ לקופסה",
            shortDescription:
                "מימוש HTML ו-CSS מדויק לפיקסל ורספונסיבי של עיצוב Figma עבור דף נחיתה לשירותי ייעוץ, כולו בעברית ובנוי עם ארכיטקטורת SASS מודולרית.",
            overview:
                "תרגיל מימוש ממשק שנבנה מעיצוב Figma: דף נחיתה לשירותים מקצועיים/ייעוץ עם אזור hero ב-RTL (כותרת, טקסט משנה ואיור SVG), שלושה כרטיסי שירות מונחי-אייקון, טופס יצירת קשר לצד מפת Google מוטמעת, סרגל יצירת קשר עגול ברשתות (וואטסאפ, פייסבוק, אינסטגרם, לינקדאין, טלפון), וכפתור וואטסאפ צף במיקום קבוע שמוסתר במובייל. נבנה כולו בעברית - ללא מתג שפה, בשונה מהאתר עצמו.",
            architecture:
                "העיצוב נכתב בארכיטקטורת SASS (SCSS) מודולרית ולא כגיליון סגנון שטוח אחד: קבצי חלקים ייעודיים לטוקני צבע (colors.scss), משתני גודל/מרווח (vars.scss), ומיקסינים לשימוש חוזר (flex.scss, border.scss, position.scss, margins_paddings.scss), המחוברים יחד באמצעות @use לפלט CSS מקומפל אחד. רספונסיבי לחלוטין עם נקודת שבירה יחידה למובייל ב-768px - פריסות flex בסדר הפוך בעמודות, טיפוגרפיה ותמונות בקנה מידה מוקטן, גודל טופס מותאם, כרטיסים ומפה ברוחב מלא, וכפתור הוואטסאפ הצף מוסתר במסכים קטנים.",
            challenges: [],
            lessons: [],
        },
    },
};

export default thinkOutsideTheBox;
