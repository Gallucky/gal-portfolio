import type { ApplicationProjectMetadata } from "../applicationProjects";

/**
 * "Gal's HackerU Node + MongoDB Server Project" - a RESTful Node.js/Express/MongoDB backend for
 * user management, JWT authentication, and business-card CRUD, built as a HackerU Node module
 * project.
 *
 * No live URL and not currently featured - it's an unhosted backend-only exercise with nothing
 * public to demo (the sibling {@link https://github.com/Gallucky/Gal-Ben-Abu-s-HackerU-ReactModuleProject | React module project}
 * was built against equivalent API endpoints, but the two were built as separate HackerU module
 * assignments and are kept as separate project entries rather than combined).
 *
 * @see https://github.com/Gallucky/Gal-s-HackerU-Node-MongoDB-Server-Project for the source.
 */
const hackerUNodeMongoDBServer: ApplicationProjectMetadata = {
    slug: "hackeru-node-mongodb-server",
    featured: false,
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Joi", "Winston", "Morgan"],
    githubLinks: [
        {
            label: "View Repository",
            url: "https://github.com/Gallucky/Gal-s-HackerU-Node-MongoDB-Server-Project",
        },
    ],
    content: {
        en: {
            title: "Gal's HackerU Node + MongoDB Server Project",
            shortDescription:
                "A modular RESTful backend built with Express and MongoDB for user management, JWT authentication, and business-card CRUD - a HackerU Node module project.",
            overview:
                "A Node.js backend built with Express and MongoDB (via Mongoose) providing a RESTful API for two resources: users (registration, login, profile updates, admin-only listing/deletion) and cards (business-card CRUD, likes, and admin business-number regeneration). Access control is role-based - owner-only edits, business-only card creation, admin-only user management - enforced through JWT authentication middleware.",
            architecture:
                "A modular structure with clear separation of concerns: `auth/` for JWT logic, `users/` and `cards/` each with their own models, routes, services, and Joi validation schemas, `DB/` for the Mongoose connection, `middlewares/` for cross-cutting concerns like CORS, and `router/` composing everything into the main Express router. Logging runs through a custom logger plus Morgan for HTTP request logs, and errors flow through centralized handlers in `utils/`. Environment-specific settings (Mongo URI, JWT secret) load via the `config` package rather than being hardcoded.",
            challenges: [
                "Modeling three permission tiers (guest/regular user, business user, admin) across two resources meant every route needed its own precise combination of 'must be authenticated' + 'must own this resource' + 'must be this role', rather than one blanket auth check.",
                "Keeping validation, error handling, and logging centralized (Joi schemas, `utils/errorHandler.js`, the logger service) so each new route added consistent behavior automatically instead of re-implementing those concerns per-route.",
            ],
            lessons: [
                "Separating each resource (`users/`, `cards/`) into its own self-contained model/route/service/validation folder made the codebase easy to navigate and kept business-card logic from leaking into user logic or vice versa.",
                "Centralizing environment configuration through the `config` package - rather than scattering `process.env` reads throughout the codebase - made it obvious exactly what settings a fresh environment needs before the server will run.",
            ],
        },
        he: {
            title: "פרויקט שרת Node + MongoDB של גל ב-HackerU",
            shortDescription:
                "שרת REST מודולרי שנבנה עם Express ו-MongoDB לניהול משתמשים, אימות JWT ו-CRUD לכרטיסי ביקור - פרויקט מודול Node ב-HackerU.",
            overview:
                "שרת Node.js שנבנה עם Express ו-MongoDB (דרך Mongoose) המספק API מסוג REST לשני משאבים: משתמשים (הרשמה, התחברות, עדכון פרופיל, רשימה/מחיקה למנהלים בלבד) וכרטיסים (CRUD לכרטיסי ביקור, לייקים, ויצירת מספר עסק מחדש למנהלים). בקרת גישה מבוססת תפקידים - עריכה לבעלים בלבד, יצירת כרטיסים לעסקיים בלבד, ניהול משתמשים למנהלים בלבד - נאכפת דרך middleware של אימות JWT.",
            architecture:
                "מבנה מודולרי עם הפרדת אחריות ברורה: `auth/` ללוגיקת JWT, `users/` ו-`cards/` כל אחד עם המודלים, הנתיבים, השירותים וסכימות הולידציה של Joi שלו, `DB/` לחיבור Mongoose, `middlewares/` לעניינים חוצי-מערכת כמו CORS, ו-`router/` שמרכיב הכול לתוך נתב ה-Express הראשי. הלוגים רצים דרך לוגר מותאם אישית בתוספת Morgan ללוגי בקשות HTTP, ושגיאות זורמות דרך מטפלים מרוכזים ב-`utils/`. הגדרות ספציפיות לסביבה (כתובת Mongo, סוד JWT) נטענות דרך חבילת ה-`config` במקום להיות מוטמעות בקוד.",
            challenges: [
                "מידול שלוש רמות הרשאה (אורח/משתמש רגיל, משתמש עסקי, מנהל) על פני שני משאבים חייב כל נתיב בשילוב מדויק משלו של 'חייב להיות מאומת' + 'חייב להיות בעל המשאב' + 'חייב להיות בתפקיד הזה', במקום בדיקת אימות גורפת אחת.",
                "שמירה על ריכוזיות של ולידציה, טיפול שגיאות ולוגים (סכימות Joi, `utils/errorHandler.js`, שירות הלוגר) כך שכל נתיב חדש קיבל התנהגות עקבית אוטומטית במקום ליישם מחדש את הנושאים האלה בכל נתיב.",
            ],
            lessons: [
                "הפרדת כל משאב (`users/`, `cards/`) לתיקיית מודל/נתיב/שירות/ולידציה עצמאית משלו הפכה את בסיס הקוד לקל לניווט ומנעה מלוגיקת כרטיסי הביקור לדלוף ללוגיקת המשתמשים ולהפך.",
                "ריכוז תצורת הסביבה דרך חבילת ה-`config` - במקום לפזר קריאות `process.env` לאורך בסיס הקוד - הבהיר בדיוק אילו הגדרות סביבה חדשה צריכה לפני שהשרת ירוץ.",
            ],
        },
    },
};

export default hackerUNodeMongoDBServer;
