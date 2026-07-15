import type { UIImplementationProjectMetadata } from "../uiImplementationProjects";
import previewImage from "./project_preview.png";

/**
 * "Leading You Forward" - a pixel-perfect HTML & CSS implementation of a Figma design for a
 * Hebrew-only lead-capture landing page, built mobile-first around CSS Grid/flexbox.
 *
 * @see https://github.com/Gallucky/leading-you-forward for the source.
 */
const leadingYouForward: UIImplementationProjectMetadata = {
    slug: "leading-you-forward",
    stack: ["HTML", "CSS"],
    githubFrontend: "https://github.com/Gallucky/leading-you-forward",
    screenshots: [
        {
            url: previewImage,
            alt: "Leading You Forward Project Preview Image",
        },
    ],
    // page: pink/purple/magenta gradient background, a decorative circle grid + accent ring,
    // and a dark card with a headline, "Full Name"/"Email" fields, and a submit button) exists
    // but couldn't be saved here - this sandbox can't persist a pasted chat image to disk. Drop
    // the file into this folder (e.g. `project_preview.png`) and add it to `screenshots` below;
    // see `Screenshot` in src/data/projects.ts for the expected shape.
    content: {
        en: {
            title: "Leading You Forward",
            shortDescription:
                "A pixel-accurate, responsive HTML & CSS implementation of a Figma design for a Hebrew-only lead-capture page.",
            overview:
                "A UI implementation exercise built from a Figma design: a bold pink-to-purple gradient background with a decorative circle grid and accent ring, framing a dark card panel that holds a headline, supporting copy, name/email fields, and a submit button. Built entirely in Hebrew - no language toggle, unlike the portfolio site itself - with a mobile-first layout built on CSS Grid and flexbox.",
            architecture:
                "Static HTML/CSS, no framework or JavaScript - semantic HTML paired with organized, maintainable CSS. Layout leans on CSS Grid and flexbox rather than older float-based techniques, built mobile-first so the design scales up cleanly instead of being retrofitted for small screens.",
            challenges: [
                "Matching the Figma design pixel-for-pixel and keeping it consistent across breakpoints and browsers took real trial and error - this was one of the earlier UI-implementation exercises (over a year ago, roughly five months before splitting what was originally one combined exercises repo into a separate repo per project).",
            ],
            lessons: [],
        },
        he: {
            title: "מובילים אותך קדימה",
            shortDescription:
                "מימוש HTML ו-CSS מדויק לפיקסל ורספונסיבי של עיצוב Figma עבור דף נחיתה לאיסוף לידים, כולו בעברית.",
            overview:
                "תרגיל מימוש ממשק שנבנה מעיצוב Figma: רקע גרדיאנט ורוד-לסגול נועז עם רשת עיגולים דקורטיבית וטבעת הדגשה, המסגרת פאנל כרטיס כהה עם כותרת, טקסט תומך, שדות שם ואימייל וכפתור שליחה. נבנה כולו בעברית - ללא מתג שפה, בשונה מהאתר עצמו - עם פריסה מובייל-פירסט המבוססת על CSS Grid ו-Flexbox.",
            architecture:
                "HTML/CSS סטטי, ללא framework או JavaScript - HTML סמנטי יחד עם CSS מאורגן ותחזוקתי. הפריסה נשענת על CSS Grid ו-Flexbox במקום טכניקות float ישנות, ונבנתה מובייל-פירסט כך שהעיצוב מתרחב כלפי מעלה בצורה נקייה במקום להיות מותאם בדיעבד למסכים קטנים.",
            challenges: [
                "התאמת עיצוב ה-Figma לפיקסל ושמירה על עקביות בכל נקודות השבירה והדפדפנים דרשה הרבה ניסוי וטעייה - זה היה אחד מתרגילי מימוש הממשק המוקדמים (לפני יותר משנה, כחמישה חודשים לפני פיצול מה שהיה במקור מאגר אחד משותף לכל התרגילים למאגר נפרד לכל פרויקט).",
            ],
            lessons: [],
        },
    },
};

export default leadingYouForward;
