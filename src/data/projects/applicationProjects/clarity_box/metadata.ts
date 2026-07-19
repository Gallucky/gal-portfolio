import previewImage from "./project_preview.png";
import type { ApplicationProjectMetadata } from "@data/projects/applicationProjects/applicationProjects";

/**
 * "ClarityBox" - a full-stack productivity platform combining gratitude journaling with
 * project & task management, built as the final project for HackerU's Full-Stack Web
 * Development course.
 *
 * @see https://github.com/Gallucky/ClarityBox for the source (single repo, `client/` + `server/`).
 * @see https://clarity-box.vercel.app/ for the live deployment.
 */
const clarityBox: ApplicationProjectMetadata = {
    slug: "clarity-box",
    featured: true,
    stack: [
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
        "Vite",
        "JWT",
        "Joi",
        "Winston",
    ],
    githubLinks: [{ label: "View Repository", url: "https://github.com/Gallucky/ClarityBox" }],
    liveUrl: "https://clarity-box.vercel.app/",
    screenshots: [
        {
            url: previewImage,
            alt: "ClarityBox Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "ClarityBox",
            shortDescription:
                "A full-stack productivity platform combining gratitude journaling with project and task management, built as a HackerU final project.",
            overview:
                "ClarityBox unifies reflection and productivity in one app: a gratitude tracker for recording daily wins alongside a project & task manager for setting goals and tracking progress. The backend MVP (v0.2.1-alpha) is complete with full CRUD routes, validation, and seeded demo data; the React/TypeScript frontend and public deployment are the current focus.",
            architecture:
                "A single repo split into `client/` (React, TypeScript, Vite, TailwindCSS) and `server/` (Node.js, Express, MongoDB via Mongoose). The backend is modular - auth, features, middlewares, and router each live in their own folder - with JWT/bcrypt authentication, Joi + Mongoose validation, and centralized Winston/Morgan logging. GitHub Actions automate the changelog and todo tracking, and `docs/` holds architecture, database, and UI planning docs alongside Draw.io diagrams.",
            challenges: [
                "Scoping a two-domain app (gratitude journaling + task/project management) meant designing a data model and API surface that stayed coherent across both feature sets instead of feeling like two apps bolted together.",
                "Sequencing the build so the backend MVP (auth, CRUD, validation, logging) was fully solid before frontend work started, rather than building both halves in parallel and risking rework once the API shape settled.",
            ],
            lessons: [
                "Investing early in centralized error handling, structured logging, and Joi/Mongoose validation on the backend made every subsequent route faster to add and easier to trust.",
                "Keeping `docs/` (architecture, database, UI) and an automated changelog in the repo from day one made it much easier to pick the project back up after gaps between working sessions.",
            ],
        },
        he: {
            title: "ClarityBox",
            shortDescription:
                "פלטפורמת פרודוקטיביות Full-Stack המשלבת יומן הכרת תודה עם ניהול פרויקטים ומשימות, נבנתה כפרויקט גמר ב-HackerU.",
            overview:
                "ClarityBox מאחדת רפלקציה ופרודוקטיביות באפליקציה אחת: מעקב הכרת תודה לתיעוד הצלחות יומיות לצד מנהל פרויקטים ומשימות להצבת יעדים ומעקב התקדמות. ה-MVP של השרת (v0.2.1-alpha) הושלם עם נתיבי CRUD מלאים, ולידציה ונתוני הדגמה מוכנים מראש; החזית ב-React/TypeScript והפריסה הציבורית הן המיקוד הנוכחי.",
            architecture:
                "ריפוזיטורי יחיד המחולק ל-`client/` (React, TypeScript, Vite, TailwindCSS) ול-`server/` (Node.js, Express, MongoDB דרך Mongoose). השרת מודולרי - אימות, פיצ'רים, middlewares ונתב כל אחד בתיקייה משלו - עם אימות JWT/bcrypt, ולידציה של Joi ו-Mongoose, ולוגים מרוכזים דרך Winston/Morgan. GitHub Actions מאוטמט את ה-changelog ומעקב המשימות, ו-`docs/` מכיל מסמכי ארכיטקטורה, בסיס נתונים ותכנון ממשק לצד דיאגרמות Draw.io.",
            challenges: [
                "תכנון היקף לאפליקציה עם שני תחומים (יומן הכרת תודה + ניהול משימות/פרויקטים) חייב מודל נתונים וממשק API שנשארים עקביים בין שני סטי הפיצ'רים, במקום שירגישו כשתי אפליקציות מחוברות בכוח.",
                "סידור סדר הבנייה כך שה-MVP של השרת (אימות, CRUD, ולידציה, לוגים) יהיה מוצק לחלוטין לפני תחילת עבודת החזית, במקום לבנות את שני החלקים במקביל ולסכן עבודה חוזרת אחרי שצורת ה-API תתייצב.",
            ],
            lessons: [
                "השקעה מוקדמת בטיפול שגיאות מרוכז, לוגים מובנים וולידציה של Joi/Mongoose בשרת הפכה כל נתיב עתידי למהיר יותר להוספה וקל יותר לסמוך עליו.",
                "שמירת `docs/` (ארכיטקטורה, בסיס נתונים, ממשק) ו-changelog מאוטמט בריפו מהיום הראשון הקלה משמעותית על חזרה לפרויקט אחרי הפסקות בין ישיבות עבודה.",
            ],
        },
    },
};

export default clarityBox;
