import previewImage from "./project_preview.png";
import type { MarkupProjectMetadata } from "@data/projects/markupProjects/markupProjects";

/**
 * "Countries & Flags" - an interactive country explorer built with vanilla HTML, CSS, and
 * JavaScript. Fetches live data from the REST Countries API and renders it as a searchable,
 * filterable, sortable card gallery.
 *
 * @see https://github.com/Gallucky/countries-flags for the source.
 */
const countriesFlags: MarkupProjectMetadata = {
    slug: "countries-flags",
    stack: ["JavaScript", "CSS", "HTML", "Bootstrap"],
    githubLinks: [{ label: "View Repository", url: "https://github.com/Gallucky/countries-flags" }],
    liveUrl: "https://gallucky.github.io/countries-flags/",
    screenshots: [
        {
            url: previewImage,
            alt: "Countries & Flags Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "Countries & Flags",
            shortDescription:
                "An interactive country explorer with search, region filtering, and population sorting, built in vanilla JavaScript against a live REST API.",
            overview:
                "A dynamic single-page app that pulls real-time country data from the REST Countries API and renders it as an interactive card gallery - each card showing a country's flag, name, region, and population. Users can search by name, filter by region through a custom dropdown, and sort by population, all without a page reload. Selected filters and sort order persist across refreshes via localStorage.",
            architecture:
                "No framework - plain HTML, CSS, and ES6+ JavaScript loaded as ES Modules, organized around a small service-based pattern: a countries service handles all API communication, a DOM service handles rendering and updates, a localStorage service abstracts persisted preferences, and a self-contained custom-select component drives the region dropdown. An `index.js` entry point wires the services together. Bootstrap 4 supplies base layout utilities on top of the custom styling.",
            challenges: [
                "Building the region filter as a custom dropdown (rather than a native `<select>`) meant hand-rolling its open/close behavior, keyboard interaction, and styling as a standalone component instead of leaning on browser defaults.",
                "The app has a hard runtime dependency on the REST Countries API being up and reachable - there's no fallback or cached dataset if the API or the Bootstrap CDN is unavailable.",
            ],
            lessons: [
                "Splitting API calls, DOM rendering, and localStorage access into separate service modules kept each piece easy to reason about and change independently, even without a framework enforcing that structure.",
                "ES Modules made it straightforward to keep a vanilla-JS project organized across multiple files instead of collapsing everything into one script or relying on global variables.",
            ],
        },
        he: {
            title: "מדינות ודגלים",
            shortDescription:
                "אתר אינטראקטיבי לחקירת מדינות עם חיפוש, סינון לפי אזור ומיון לפי אוכלוסייה, שנבנה ב-JavaScript טהור מול API חי.",
            overview:
                "אפליקציית עמוד יחיד דינמית ששואבת נתוני מדינות בזמן אמת מה-REST Countries API ומציגה אותם כגלריית כרטיסים אינטראקטיבית - כל כרטיס מציג את דגל המדינה, שמה, האזור שלה והאוכלוסייה שלה. המשתמשים יכולים לחפש לפי שם, לסנן לפי אזור דרך תפריט נפתח מותאם אישית, ולמיין לפי אוכלוסייה - הכול בלי רענון עמוד. הסינונים והמיון הנבחרים נשמרים בין רענונים באמצעות localStorage.",
            architecture:
                "ללא framework - HTML, CSS ו-JavaScript (ES6+) טהורים, נטענים כ-ES Modules ומאורגנים סביב תבנית שירותים קטנה: שירות מדינות מטפל בכל התקשורת מול ה-API, שירות DOM מטפל ברינדור ובעדכונים, שירות localStorage מבודד את ההעדפות השמורות, ורכיב תפריט נפתח מותאם אישית ועצמאי מפעיל את סינון האזורים. נקודת הכניסה `index.js` מחברת בין כל השירותים. Bootstrap 4 מספק כלי פריסה בסיסיים מעל העיצוב המותאם אישית.",
            challenges: [
                "בניית סינון האזורים כתפריט נפתח מותאם אישית (במקום `<select>` רגיל) חייבה לבנות ידנית את התנהגות הפתיחה/סגירה, האינטראקציה עם המקלדת והעיצוב שלו כרכיב עצמאי, במקום להסתמך על ברירות המחדל של הדפדפן.",
                "לאפליקציה יש תלות ריצה מוחלטת בזמינות ה-REST Countries API - אין נתונים חלופיים או שמורים במקרה שה-API או ה-CDN של Bootstrap אינם זמינים.",
            ],
            lessons: [
                "פיצול קריאות ה-API, רינדור ה-DOM והגישה ל-localStorage למודולי שירות נפרדים שמר על כל חלק פשוט להבנה ולשינוי בנפרד, גם בלי framework שאוכף את המבנה הזה.",
                "שימוש ב-ES Modules אפשר לשמור על פרויקט JavaScript טהור מאורגן על פני מספר קבצים, במקום לדחוס הכול לסקריפט אחד או להסתמך על משתנים גלובליים.",
            ],
        },
    },
};

export default countriesFlags;
