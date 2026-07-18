import type { UIImplementationProjectMetadata } from "../uiImplementationProjects";
import previewImage from "./project_preview.png";

/**
 * "Discover the World" - a pixel-perfect HTML & CSS implementation of a Figma design for a
 * Hebrew-only travel-themed landing page with a 14-image collage gallery.
 *
 * @see https://github.com/Gallucky/discover-the-world for the source.
 */
const discoverTheWorld: UIImplementationProjectMetadata = {
    slug: "discover-the-world",
    stack: ["HTML", "CSS"],
    githubLinks: [
        { label: "View Repository", url: "https://github.com/Gallucky/discover-the-world" },
    ],
    liveUrl: "https://gallucky.github.io/discover-the-world/",
    screenshots: [
        {
            url: previewImage,
            alt: "Discover the World Project Preview Image",
        },
    ],
    // page: a headline ("לגלות את העולם" / "Discover the world") with placeholder body copy, a
    // "tell us about your experience" lead-capture form (name/email/experience textarea,
    // submit button), and a 14-image collage of travel photos (forests, beaches, mountains,
    // trains, animals) scattered around the content as a decorative background gallery. Custom
    // fonts: Assistant + Heebo. Screenshot exists in the repo (images/project_preview.png) but
    // couldn't be saved here - this sandbox can't reach raw.githubusercontent.com to download
    // it. Drop the file into this folder (e.g. `project_preview.png`), import it, and add it to
    // `screenshots` below; see `Screenshot` in src/data/projects.ts for the expected shape.
    content: {
        en: {
            title: "Discover the World",
            shortDescription:
                "A pixel-accurate, responsive HTML & CSS implementation of a Figma design for a Hebrew-only travel-themed landing page with a 14-image collage gallery.",
            overview:
                "A UI implementation exercise built from a Figma design: a travel-themed landing page combining a headline and lead-capture form (name, email, and a free-text 'tell us about your experience' field) with a 14-image collage of travel photography - forests, beaches, mountains, a train, and animals - arranged as a decorative gallery around the content. Built entirely in Hebrew - no language toggle, unlike the portfolio site itself - using the Assistant and Heebo Google Fonts.",
            architecture:
                "Static HTML/CSS, no framework or JavaScript - semantic HTML paired with organized CSS. The multi-column image collage and layout adapt to different screen sizes using CSS media queries and flexible units.",
            challenges: [],
            lessons: [],
        },
        he: {
            title: "לגלות את העולם",
            shortDescription:
                "מימוש HTML ו-CSS מדויק לפיקסל ורספונסיבי של עיצוב Figma עבור דף נחיתה בנושא טיולים עם קולאז' של 14 תמונות, כולו בעברית.",
            overview:
                "תרגיל מימוש ממשק שנבנה מעיצוב Figma: דף נחיתה בנושא טיולים המשלב כותרת וטופס איסוף לידים (שם, אימייל, ושדה טקסט חופשי 'ספרו לנו על החוויה שלכם') לצד קולאז' של 14 תמונות טיולים - יערות, חופים, הרים, רכבת ובעלי חיים - המסודרות כגלריה דקורטיבית סביב התוכן. נבנה כולו בעברית - ללא מתג שפה, בשונה מהאתר עצמו - תוך שימוש בגופני Google Assistant ו-Heebo.",
            architecture:
                "HTML/CSS סטטי, ללא framework או JavaScript - HTML סמנטי יחד עם CSS מאורגן. קולאז' התמונות מרובה העמודות והפריסה מתאימים עצמם לגדלי מסך שונים באמצעות media queries ויחידות גמישות ב-CSS.",
            challenges: [],
            lessons: [],
        },
    },
};

export default discoverTheWorld;
