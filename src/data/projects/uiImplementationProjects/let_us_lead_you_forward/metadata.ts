import previewImage from "./project_preview.png";
import type { UIImplementationProjectMetadata } from "@data/projects/uiImplementationProjects/uiImplementationProjects";

/**
 * "Let Us Lead You Forward" - a pixel-perfect HTML & CSS implementation of a Figma design for a
 * Hebrew-only professional-services lead-capture landing page, built with Bootstrap 5.
 *
 * @see https://github.com/Gallucky/let-us-lead-you-forward for the source.
 */
const letUsLeadYouForward: UIImplementationProjectMetadata = {
    slug: "let-us-lead-you-forward",
    stack: ["HTML", "CSS", "Bootstrap"],
    githubLinks: [
        { label: "View Repository", url: "https://github.com/Gallucky/let-us-lead-you-forward" },
    ],
    liveUrl: "https://gallucky.github.io/let-us-lead-you-forward/",
    screenshots: [
        {
            url: previewImage,
            alt: "Let Us Lead You Forward - a pixel-perfect HTML & CSS implementation of a Figma design for a Hebrew-only professional-services lead-capture landing page, built with Bootstrap 5.",
        },
    ],
    // page: a full-bleed decorative envelope background image behind a centered headline
    // ("תן לנו להוביל אותך קדימה" / "Let us lead you forward") and supporting copy, followed by
    // a name/email lead-capture form (RTL-aligned inputs with an underline accent) and a submit
    // button. Screenshot exists in the repo (images/project_preview.png) but couldn't be saved
    // here - this sandbox can't reach raw.githubusercontent.com to download it. Drop the file
    // into this folder (e.g. `project_preview.png`), import it, and add it to `screenshots`
    // below; see `Screenshot` in src/data/projects.ts for the expected shape.
    content: {
        en: {
            title: "Let Us Lead You Forward",
            shortDescription:
                "A pixel-accurate, responsive HTML & CSS implementation of a Figma design for a Hebrew-only professional-services lead-capture page, built with Bootstrap 5.",
            overview:
                "A UI implementation exercise built from a Figma design: a professional-services landing page with a full-bleed decorative envelope background image behind a centered headline and supporting copy, followed by a name/email lead-capture form with RTL-aligned inputs and a submit button. Built entirely in Hebrew - no language toggle, unlike the portfolio site itself.",
            architecture:
                "Built with Bootstrap 5.3.3 (loaded via CDN) for the grid system, flexbox utilities, and responsive layout, supplemented by custom CSS for project-specific styling not covered by Bootstrap's defaults.",
            challenges: [],
            lessons: [],
        },
        he: {
            title: "תן לנו להוביל אותך קדימה",
            shortDescription:
                "מימוש HTML ו-CSS מדויק לפיקסל ורספונסיבי של עיצוב Figma עבור דף נחיתה לאיסוף לידים לשירותים מקצועיים, כולו בעברית ובנוי עם Bootstrap 5.",
            overview:
                "תרגיל מימוש ממשק שנבנה מעיצוב Figma: דף נחיתה לשירותים מקצועיים עם תמונת רקע דקורטיבית של מעטפה במלוא הרוחב מאחורי כותרת ממורכזת וטקסט תומך, ולאחריה טופס איסוף לידים לשם ואימייל עם שדות מיושרים ל-RTL וכפתור שליחה. נבנה כולו בעברית - ללא מתג שפה, בשונה מהאתר עצמו.",
            architecture:
                "נבנה עם Bootstrap 5.3.3 (נטען דרך CDN) עבור מערכת ה-grid, יוטיליטי ה-flexbox והפריסה הרספונסיבית, בתוספת CSS מותאם אישית לעיצוב ספציפי לפרויקט שלא מכוסה על ידי ברירות המחדל של Bootstrap.",
            challenges: [],
            lessons: [],
        },
    },
};

export default letUsLeadYouForward;
