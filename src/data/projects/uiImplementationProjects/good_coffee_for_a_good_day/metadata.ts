import type { UIImplementationProjectMetadata } from "../uiImplementationProjects";
import previewImage from "./project_preview.png";

/**
 * "Good Coffee for a Good Day" - a pixel-perfect HTML & CSS implementation of a Figma design for
 * a Hebrew-only coffee-brand promotional lead-capture landing page.
 *
 * @see https://github.com/Gallucky/good-coffee-for-a-good-day for the source.
 */
const goodCoffeeForAGoodDay: UIImplementationProjectMetadata = {
    slug: "good-coffee-for-a-good-day",
    stack: ["HTML", "CSS"],
    githubFrontend: "https://github.com/Gallucky/good-coffee-for-a-good-day",
    screenshots: [
        {
            url: previewImage,
            alt: "Good Coffee for a Good Day Project Preview Image",
        },
    ],
    // page: full-bleed coffee product photo up top, followed by a headline ("קפה טוב לבוקר
    // טוב" / "Good coffee for a good morning"), supporting copy about a free coffee coupon, and
    // a full name/email lead-capture form with a submit button - all set in the Heebo font.
    // Screenshot exists in the repo (images/project_preview.png) but couldn't be saved here -
    // this sandbox can't reach raw.githubusercontent.com to download it. Drop the file into this
    // folder (e.g. `project_preview.png`), import it, and add it to `screenshots` below; see
    // `Screenshot` in src/data/projects.ts for the expected shape.
    content: {
        en: {
            title: "Good Coffee for a Good Day",
            shortDescription:
                "A pixel-accurate, responsive HTML & CSS implementation of a Figma design for a Hebrew-only coffee-brand lead-capture page.",
            overview:
                "A UI implementation exercise built from a Figma design: a warm, inviting single-page layout for a coffee brand, opening with full-width hero product imagery and a custom Google Font (Heebo), followed by a headline, supporting copy about a free coffee coupon, and a name/email lead-capture form. Built entirely in Hebrew - no language toggle, unlike the portfolio site itself.",
            architecture:
                "Static HTML/CSS, no framework or JavaScript - semantic HTML paired with organized CSS. Layout uses flexible CSS units and media queries so the page scales cleanly from desktop down to mobile, with retina-ready (2x) image variants for the hero product shot.",
            challenges: [],
            lessons: [],
        },
        he: {
            title: "קפה טוב ליום טוב",
            shortDescription:
                "מימוש HTML ו-CSS מדויק לפיקסל ורספונסיבי של עיצוב Figma עבור דף נחיתה לאיסוף לידים למותג קפה, כולו בעברית.",
            overview:
                "תרגיל מימוש ממשק שנבנה מעיצוב Figma: פריסת עמוד יחיד חמימה ומזמינה למותג קפה, הנפתחת בתמונת מוצר גדולה במלוא הרוחב וגופן Google מותאם (Heebo), ולאחריה כותרת, טקסט תומך על קופון קפה חינם, וטופס איסוף לידים לשם ואימייל. נבנה כולו בעברית - ללא מתג שפה, בשונה מהאתר עצמו.",
            architecture:
                "HTML/CSS סטטי, ללא framework או JavaScript - HTML סמנטי יחד עם CSS מאורגן. הפריסה משתמשת ביחידות CSS גמישות ו-media queries כך שהעמוד מתרחב בצורה נקייה מדסקטופ ועד מובייל, עם גרסאות תמונה retina (2x) לתמונת המוצר הראשית.",
            challenges: [],
            lessons: [],
        },
    },
};

export default goodCoffeeForAGoodDay;
