import type { ApplicationProjectMetadata } from "../applicationProjects";
import previewImage from "./project_preview.png";
// (see e.g. `weather_cast/metadata.ts` for the pattern) and add a `screenshots` entry below
// once it exists.

/**
 * "Gal Ben Abu's Portfolio Project" - Gal's original HackerU portfolio site: a multi-page,
 * vanilla HTML/CSS/JS hub linking out to 7 landing-page exercises and 6 interactive JS projects,
 * with built-in language switching and a settings panel.
 *
 * Superseded by this very site ({@link https://github.com/Gallucky/gal-portfolio | gal-portfolio}),
 * which is why this entry isn't featured even though its live demo still works - it's kept as
 * the origin point of the portfolio, not the current flagship.
 *
 * @see https://github.com/Gallucky/HackerU-Gal-Ben-Abu-s-Portfilio-Project for the source.
 * @see https://gallucky.github.io/HackerU-Gal-Ben-Abu-s-Portfilio-Project/ for the live deployment.
 */
const hackerUPortfolioProject: ApplicationProjectMetadata = {
    slug: "hackeru-portfolio-project",
    featured: false,
    stack: ["JavaScript", "HTML", "CSS", "SCSS/SASS"],
    githubLinks: [
        {
            label: "View Repository",
            url: "https://github.com/Gallucky/HackerU-Gal-Ben-Abu-s-Portfilio-Project",
        },
    ],
    liveUrl: "https://gallucky.github.io/HackerU-Gal-Ben-Abu-s-Portfilio-Project/",
    screenshots: [
        {
            url: previewImage,
            alt: "Gal Ben Abu's Portfolio Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "Gal Ben Abu's Portfolio Project",
            shortDescription:
                "Gal's original HackerU portfolio - a vanilla HTML/CSS/JS hub linking to 7 landing pages and 6 interactive JavaScript projects, with language switching and a settings panel.",
            overview:
                "The first version of this portfolio: a central navigation page linking out to two collections of standalone sub-projects - 7 HTML/CSS landing pages (each its own design exercise, one built with SCSS/SASS) and 6 interactive JavaScript applications (a countries-flags explorer, tic-tac-toe, a users CRUD manager, a weather app, a drag-and-drop website builder, and a math game). Built-in language switching and a settings panel round out the shared shell around all of them.",
            architecture:
                "No framework or build step - plain HTML, CSS/SCSS, and JavaScript, organized so each sub-project lives in its own folder under `Projects/` (split into `html_and_css_landing_pages/` and `JS Projects/`) with shared services (`navbarService.js`, `langService.js`, `slider.js`, `contactServiceValidation.js`) reused across pages via `<script>` includes. Assets are grouped under `images/` (by category: language logos, contact icons, JS project previews) and `styles/` mirrors the same global/page-specific split.",
            challenges: [
                "Sharing navigation, language-switching, and validation logic across more than a dozen independent HTML pages meant those concerns had to live in standalone scripts included on every page, rather than in a single app with one entry point - the closest thing to componentization available without a framework.",
                "Keeping 7 landing pages and 6 JS projects visually and structurally consistent (shared nav, shared language toggle, shared settings panel) while each sub-project still needed its own layout and logic required a disciplined shared-asset/shared-script structure instead of ad hoc copy-pasting.",
            ],
            lessons: [
                "Building the whole portfolio without a framework forced a real, first-hand understanding of DOM manipulation, script loading order, and manual state management - the exact fundamentals that make frameworks like React feel like a relief afterward.",
                "Organizing sub-projects into clearly separated folders with their own scripts/styles, rather than one growing monolith, made it possible to keep adding project after project without earlier ones breaking.",
            ],
        },
        he: {
            title: "פרויקט הפורטפוליו של גל בן אבו",
            shortDescription:
                "הפורטפוליו המקורי של גל מ-HackerU - מרכז מבוסס HTML/CSS/JS טהור המקשר ל-7 עמודי נחיתה ו-6 פרויקטי JavaScript אינטראקטיביים, עם החלפת שפה ופאנל הגדרות.",
            overview:
                "הגרסה הראשונה של הפורטפוליו הזה: עמוד ניווט מרכזי המקשר לשתי אוספים של תת-פרויקטים עצמאיים - 7 עמודי נחיתה ב-HTML/CSS (כל אחד תרגיל עיצוב בפני עצמו, אחד נבנה עם SCSS/SASS) ו-6 אפליקציות JavaScript אינטראקטיביות (סייר דגלי מדינות, איקס-עיגול, מנהל משתמשים מבוסס CRUD, אפליקציית מזג אוויר, בונה אתרים בגרירה-ושחרור, ומשחק מתמטיקה). החלפת שפה מובנית ופאנל הגדרות משלימים את המעטפת המשותפת סביב כולם.",
            architecture:
                "ללא framework או שלב בנייה - HTML, CSS/SCSS ו-JavaScript טהורים, מאורגנים כך שכל תת-פרויקט חי בתיקייה משלו תחת `Projects/` (מחולק ל-`html_and_css_landing_pages/` ו-`JS Projects/`) עם שירותים משותפים (`navbarService.js`, `langService.js`, `slider.js`, `contactServiceValidation.js`) המשמשים מחדש בין העמודים דרך הכללות `<script>`. נכסים מקובצים תחת `images/` (לפי קטגוריה: לוגואי שפות, אייקוני קשר, תצוגות מקדימות של פרויקטי JS) ו-`styles/` משקף אותה חלוקה גלובלית/ספציפית לעמוד.",
            challenges: [
                "שיתוף ניווט, החלפת שפה ולוגיקת ולידציה בין יותר מתריסר עמודי HTML עצמאיים חייב שהנושאים האלה יחיו בסקריפטים עצמאיים שנכללים בכל עמוד, במקום באפליקציה אחת עם נקודת כניסה יחידה - הדבר הקרוב ביותר לרכיביות שזמין בלי framework.",
                "שמירה על עקביות ויזואלית ומבנית בין 7 עמודי נחיתה ו-6 פרויקטי JS (ניווט משותף, החלפת שפה משותפת, פאנל הגדרות משותף) כאשר כל תת-פרויקט עדיין זקוק לפריסה וללוגיקה משלו דרשה מבנה נכסים/סקריפטים משותף ומשמעתי במקום העתק-הדבק אד-הוק.",
            ],
            lessons: [
                "בניית כל הפורטפוליו בלי framework חייבה הבנה אמיתית ומיידית של מניפולציית DOM, סדר טעינת סקריפטים וניהול מצב ידני - בדיוק היסודות שהופכים frameworks כמו React להרגיש כמו הקלה אחר כך.",
                "ארגון תת-פרויקטים לתיקיות מופרדות בבירור עם סקריפטים/סגנונות משלהם, במקום מונוליט אחד שהולך וגדל, אפשר להמשיך להוסיף פרויקט אחרי פרויקט בלי שהקודמים יישברו.",
            ],
        },
    },
};

export default hackerUPortfolioProject;
