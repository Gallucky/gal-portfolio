import type { UIImplementationProjectMetadata } from "../uiImplementationProjects";
import previewImage from "./project_preview.png";

/**
 * "Here and Now" - a pixel-perfect HTML & CSS implementation of a minimal, whitespace-driven
 * lifestyle/mindfulness Figma design. Body copy is in Hebrew; only the title keeps its
 * original English/decorative styling.
 *
 * @see https://github.com/Gallucky/here-and-now for the source.
 */
const hereAndNow: UIImplementationProjectMetadata = {
    slug: "here-and-now",
    stack: ["HTML", "CSS"],
    githubLinks: [{ label: "View Repository", url: "https://github.com/Gallucky/here-and-now" }],
    screenshots: [
        {
            url: previewImage,
            alt: "Here and Now Project Preview Image",
        },
    ],
    // couldn't be downloaded from this environment (raw.githubusercontent.com isn't reachable
    // here). Add it manually once available; see `Screenshot` in src/data/projects.ts.
    content: {
        en: {
            title: "Here and Now",
            shortDescription:
                "A pixel-perfect HTML & CSS implementation of a minimal, whitespace-driven lifestyle/mindfulness Figma design.",
            overview:
                "A UI implementation exercise built from a Figma design: an elegant, minimal layout built around generous whitespace and a decorative-plus-readable font pairing. The page's body copy is in Hebrew, with only the title kept in its original English styling.",
            architecture:
                "A static HTML5 + CSS3 build with no JavaScript or build tooling - a single index.html paired with one stylesheet. Typography pairs a decorative display font with a clean, readable body font, and the layout adapts to desktop and mobile viewports via CSS media queries and fluid sizing.",
            challenges: [],
            lessons: [],
        },
        he: {
            title: "Here and Now",
            shortDescription:
                "מימוש HTML ו-CSS מדויק לפיקסל של עיצוב Figma מינימליסטי ועתיר-רווח לבן, בנושא לייף-סטייל ומיינדפולנס.",
            overview:
                "תרגיל מימוש ממשק שנבנה מעיצוב Figma: פריסה אלגנטית ומינימליסטית הבנויה סביב רווח לבן נדיב וזיווג של פונט דקורטיבי עם פונט קריא. טקסט הגוף של העמוד בעברית, כאשר רק הכותרת נשארת בעיצוב המקורי באנגלית.",
            architecture:
                "בנייה סטטית של HTML5 + CSS3 ללא JavaScript או כלי build - קובץ index.html יחיד יחד עם גיליון עיצוב אחד. הטיפוגרפיה מזווגת פונט תצוגה דקורטיבי עם פונט גוף קריא ונקי, והפריסה מתאימה עצמה למסכי דסקטופ ומובייל באמצעות media queries וגדלים גמישים ב-CSS.",
            challenges: [],
            lessons: [],
        },
    },
};

export default hereAndNow;
