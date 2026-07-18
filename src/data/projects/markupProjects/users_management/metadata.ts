import type { MarkupProjectMetadata } from "../markupProjects";
import previewImage from "./project_preview.png";

/**
 * "Users Management" - a browser-based user management system featuring registration, login,
 * and a live user dashboard, built entirely in vanilla HTML, CSS, and JavaScript using ES
 * Modules and a `localStorage`-backed data layer.
 *
 * @see https://github.com/Gallucky/users-management for the source.
 */
const usersManagement: MarkupProjectMetadata = {
    slug: "users-management",
    stack: ["JavaScript", "CSS", "HTML"],
    githubLinks: [
        { label: "View Repository", url: "https://github.com/Gallucky/users-management" },
    ],
    liveUrl: "https://gallucky.github.io/users-management/",
    screenshots: [
        {
            url: previewImage,
            alt: "Users Management Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "Users Management",
            shortDescription:
                "A front-end-only user management system with registration, login, and a live user dashboard backed by localStorage.",
            overview:
                "A front-end-only user management application: new users can register through a validated form, existing users can log in with credential checking, and a management dashboard lists every registered user with edit and delete actions. There's no backend - all user data is persisted in the browser's localStorage.",
            architecture:
                "Vanilla JavaScript organized as ES Modules with clear separation of concerns: a `User` class models a user's data (name, email, password), `registration.js` and `login.js` each own their respective form's submission and validation flow, `regex.js` centralizes every validation pattern (email format, password strength, name rules), and `domService.js` handles all DOM interaction - rendering user rows, toggling views, and wiring edit/delete events. A `script.js` entry point initializes the app.",
            challenges: [
                "Validating registration and login input reliably with regular expressions - covering email format, password strength, and name rules - while keeping error messages inline and genuinely helpful to the user.",
                "Managing user records (create, edit, delete) purely through localStorage, without a backend to enforce data integrity or uniqueness constraints, meant that logic had to live entirely on the client.",
            ],
            lessons: [
                "Centralizing every validation regex in one `regex.js` module kept the email/password/name rules consistent between the registration and login flows instead of duplicating patterns in two places.",
                'Modeling a user as a dedicated `User` class - rather than passing plain objects around - made the registration, login, and dashboard code easier to reason about and kept the shape of a "user" consistent everywhere it was used.',
            ],
        },
        he: {
            title: "ניהול משתמשים",
            shortDescription:
                "מערכת ניהול משתמשים בצד לקוח בלבד עם הרשמה, התחברות ולוח בקרה חי המבוסס על localStorage.",
            overview:
                "אפליקציית ניהול משתמשים בצד לקוח בלבד: משתמשים חדשים יכולים להירשם דרך טופס עם ולידציה, משתמשים קיימים יכולים להתחבר עם בדיקת פרטי הזדהות, ולוח בקרה מציג את כל המשתמשים הרשומים עם פעולות עריכה ומחיקה. אין שרת אחורי - כל נתוני המשתמשים נשמרים ב-localStorage של הדפדפן.",
            architecture:
                "JavaScript טהור המאורגן כ-ES Modules עם הפרדת אחריות ברורה: מחלקת `User` מייצגת את נתוני המשתמש (שם, אימייל, סיסמה), `registration.js` ו-`login.js` אחראים כל אחד על שליחת הטופס והוולידציה של הזרימה שלו, `regex.js` מרכז את כל תבניות הוולידציה (פורמט אימייל, חוזק סיסמה, כללי שם), ו-`domService.js` מטפל בכל האינטראקציה עם ה-DOM - רינדור שורות המשתמשים, מעבר בין תצוגות, וחיווט אירועי עריכה/מחיקה. נקודת הכניסה `script.js` מאתחלת את האפליקציה.",
            challenges: [
                "ולידציה אמינה של קלט ההרשמה וההתחברות באמצעות ביטויים רגולריים - שמכסים פורמט אימייל, חוזק סיסמה וכללי שם - תוך שמירה על הודעות שגיאה מוטמעות ומועילות באמת למשתמש.",
                "ניהול רשומות משתמשים (יצירה, עריכה, מחיקה) אך ורק דרך localStorage, ללא שרת אחורי שאוכף שלמות נתונים או ייחודיות, משמעו שכל הלוגיקה הזו הייתה צריכה לחיות כולה בצד הלקוח.",
            ],
            lessons: [
                "ריכוז כל ביטויי הוולידציה במודול `regex.js` אחד שמר על עקביות בכללי האימייל/סיסמה/שם בין זרימות ההרשמה וההתחברות, במקום לשכפל תבניות בשני מקומות.",
                'ייצוג משתמש כמחלקת `User` ייעודית - במקום העברת אובייקטים גנריים - הפך את קוד ההרשמה, ההתחברות והדשבורד לקל יותר להבנה ושמר על צורה עקבית של "משתמש" בכל מקום שבו נעשה בו שימוש.',
            ],
        },
    },
};

export default usersManagement;
