import previewImage from "./project_preview.png";
import type { MarkupProjectMetadata } from "@data/projects/markupProjects/markupProjects";

/**
 * "Website Builder" - a drag-and-drop browser-based website builder that lets users create,
 * style, position, and save web elements without writing code, built with an OOP, ES-Modules
 * architecture in vanilla HTML, CSS, and JavaScript.
 *
 * @see https://github.com/Gallucky/website-builder for the source.
 */
const websiteBuilder: MarkupProjectMetadata = {
    slug: "website-builder",
    stack: ["JavaScript", "CSS", "HTML"],
    githubLinks: [{ label: "View Repository", url: "https://github.com/Gallucky/website-builder" }],
    liveUrl: "https://gallucky.github.io/website-builder/",
    screenshots: [
        {
            url: previewImage,
            alt: "Website Builder Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "Website Builder",
            shortDescription:
                "A drag-and-drop website builder that lets users place, style, and save web elements on a canvas - all without writing code.",
            overview:
                "A rich interactive application: users drag elements (headings, paragraphs, links, images, divs, spans) onto a canvas, style them through a toolbox (font, size, color, and more), and save their work - all persisted through localStorage. The project demonstrates advanced front-end concepts including drag-and-drop, inheritance-based class hierarchies, and service-based modular design.",
            architecture:
                "An OOP, ES-Modules architecture split into classes and services. `DraggableElements` is the base class for every placeable element, handling shared drag behavior and styling; `Header` and its `H1`-`H6` subclasses model heading levels through inheritance, alongside `P`, `Span`, `A`, `Div`, and `Image` element classes. A `Tool`/`ToolBox`/`ToolType` set of classes manages the styling toolbox. Cross-cutting concerns each live in their own service: `dragService` (drag-and-drop events and placement), `elementService` (creating and managing element instances), `toolService` (wiring tool inputs to element styles), `actionButtonsService` (save/load/clear actions), `storageService` (all localStorage persistence), `supportedFontsService` (loading and switching fonts), and `helperService` (shared utilities).",
            challenges: [
                "Designing a class hierarchy - `DraggableElements` at the base, `Header` through `H1`-`H6` via inheritance, plus `P`, `Span`, `A`, `Div`, and `Image` as siblings - flexible enough to share drag/style behavior across genuinely different element types (text vs. link vs. image) without forcing awkward special cases.",
                "Building drag-and-drop canvas placement together with a save/load system that reconstructs the exact canvas state from localStorage meant the persisted data had to fully capture each element's type, position, and applied styles.",
            ],
            lessons: [
                "An inheritance-based hierarchy paid off here: shared drag and styling behavior lived once in `DraggableElements`, and each element subclass only needed to override what genuinely differed for that element type.",
                "Splitting each concern - dragging, tool interaction, storage, fonts, generic helpers - into its own service kept a feature set this large (drag-and-drop, a styling toolbox, multi-font support, persistence) manageable instead of collapsing into one large script.",
            ],
        },
        he: {
            title: "בונה אתרים",
            shortDescription:
                "בונה אתרים בגרירה-והשלכה שמאפשר למשתמשים למקם, לעצב ולשמור רכיבי web על קנבס - הכול בלי לכתוב קוד.",
            overview:
                "אפליקציה אינטראקטיבית עשירה: משתמשים גוררים רכיבים (כותרות, פסקאות, קישורים, תמונות, divs, spans) אל קנבס, מעצבים אותם דרך ארגז כלים (פונט, גודל, צבע ועוד), ושומרים את העבודה שלהם - הכול נשמר דרך localStorage. הפרויקט מדגים מושגי front-end מתקדמים כולל גרירה-והשלכה, היררכיית מחלקות מבוססת ירושה, ותכנון מודולרי מבוסס שירותים.",
            architecture:
                "ארכיטקטורת OOP מבוססת ES Modules, מחולקת למחלקות ושירותים. `DraggableElements` היא מחלקת הבסיס לכל רכיב הניתן למיקום, ומטפלת בהתנהגות גרירה ועיצוב משותפים; `Header` ומחלקות המשנה שלה `H1` עד `H6` מייצגות רמות כותרת דרך ירושה, לצד מחלקות הרכיבים `P`, `Span`, `A`, `Div` ו-`Image`. קבוצת המחלקות `Tool`/`ToolBox`/`ToolType` מנהלת את ארגז כלי העיצוב. חששות חוצי-מערכת חיים כל אחד בשירות משלו: `dragService` (אירועי גרירה-והשלכה ומיקום), `elementService` (יצירה וניהול של מופעי רכיבים), `toolService` (חיווט קלטי הכלים לסגנונות הרכיבים), `actionButtonsService` (פעולות שמירה/טעינה/ניקוי), `storageService` (כל שמירת ה-localStorage), `supportedFontsService` (טעינה והחלפה של פונטים), ו-`helperService` (פונקציות עזר משותפות).",
            challenges: [
                "תכנון היררכיית מחלקות - `DraggableElements` בבסיס, `Header` ועד `H1`-`H6` דרך ירושה, לצד `P`, `Span`, `A`, `Div` ו-`Image` כמחלקות אחיות - גמישה מספיק כדי לשתף התנהגות גרירה/עיצוב בין סוגי רכיבים שונים באמת (טקסט מול קישור מול תמונה) בלי לכפות מקרי קצה מסורבלים.",
                "בניית מיקום גרירה-והשלכה על הקנבס יחד עם מערכת שמירה/טעינה שמשחזרת במדויק את מצב הקנבס מ-localStorage משמעה שהנתונים הנשמרים היו חייבים ללכוד באופן מלא את הסוג, המיקום והסגנונות המוחלים של כל רכיב.",
            ],
            lessons: [
                "היררכיה מבוססת ירושה השתלמה כאן: התנהגות גרירה ועיצוב משותפת חיה פעם אחת ב-`DraggableElements`, וכל מחלקת רכיב הייתה צריכה לדרוס רק את מה שבאמת שונה עבור סוג הרכיב הזה.",
                "פיצול כל חשש - גרירה, אינטראקציית כלים, אחסון, פונטים, פונקציות עזר כלליות - לשירות משלו שמר על סט פיצ'רים גדול כזה (גרירה-והשלכה, ארגז כלי עיצוב, תמיכה במספר פונטים, שמירה) ניתן לניהול במקום להתמוטט לסקריפט אחד גדול.",
            ],
        },
    },
};

export default websiteBuilder;
