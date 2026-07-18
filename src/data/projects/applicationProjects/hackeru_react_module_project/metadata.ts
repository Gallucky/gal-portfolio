import type { ApplicationProjectMetadata } from "../applicationProjects";
import previewImage from "./project_preview.png";

/**
 * "Business Cards Web Application" (Gal-Ben-Abu-s-HackerU-ReactModuleProject) - a full-featured
 * business-card management platform with JWT auth, role-based permissions (regular/business/
 * admin), and an admin CRM dashboard, built with React, TypeScript, and Redux Toolkit as a
 * HackerU React module project.
 *
 * Not featured and no `liveUrl` - the Render deployment this frontend talked to has since been
 * discontinued/broken, so the app has nothing working to demo right now even though the repo
 * link earlier resolved to a page shell.
 *
 * @see https://github.com/Gallucky/Gal-Ben-Abu-s-HackerU-ReactModuleProject for the source.
 */
const hackerUReactModuleProject: ApplicationProjectMetadata = {
    slug: "hackeru-react-business-cards",
    featured: false,
    stack: ["React", "TypeScript", "Redux Toolkit", "React Router", "Vite", "TailwindCSS", "Joi"],
    githubLinks: [
        {
            label: "View Repository",
            url: "https://github.com/Gallucky/Gal-Ben-Abu-s-HackerU-ReactModuleProject",
        },
    ],
    screenshots: [
        {
            url: previewImage,
            alt: "Business Cards Web Application Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "Business Cards Web Application",
            shortDescription:
                "A full-featured business-card management platform with JWT auth, role-based permissions, favorites, and an admin CRM dashboard, built with React, TypeScript, and Redux Toolkit.",
            overview:
                "A business-card management platform with three permission tiers - regular user, business user, and admin - each unlocking progressively more of the same feature set: browsing and favoriting cards as a regular user, creating/editing/deleting your own cards as a business user, and a full CRM dashboard (user management, card oversight, permission toggling) as an admin. Built against a REST API for users, cards, and favorites, with dark mode and a responsive layout throughout.",
            architecture:
                "React 18 + TypeScript on Vite, styled with TailwindCSS. State is centralized in Redux Toolkit rather than scattered local state, which suits the app's shape - the same card/user data needs to be read and mutated from many independent screens (home, favorites, CRM, profile). Routing uses React Router with protected routes gating access by auth state and role. Custom hooks (`useAuth`, `useCards`, `useUsers`, `useSearch`, `useViewMode`) wrap the repeated API/state patterns, and Joi schemas validate forms before they ever reach the API. A custom ESLint rule (flagging case-insensitive `todo` comments) supplements the standard lint/format/type-check pipeline.",
            challenges: [
                "Enforcing four different permission levels (guest, regular, business, admin) consistently across both UI (hiding/disabling actions) and routing (protected routes) meant the permission matrix had to be a single source of truth consulted everywhere, not re-derived ad hoc per screen.",
                "The app depends on a separate backend for its REST API (users, cards, favorites) - once that backend deployment was discontinued, the frontend had nothing to talk to, which is a real tradeoff of splitting frontend/backend into independently hosted pieces rather than one deployable unit.",
            ],
            lessons: [
                "Centralizing state in Redux Toolkit paid off specifically because the same entities (cards, users) are read and written from unrelated parts of the app (home feed, favorites, CRM) - local component state would have meant prop-drilling or duplicated fetches everywhere.",
                "Writing a custom ESLint rule (for the `todo` comment warning) showed how approachable ESLint's plugin API actually is, and made a low-effort but permanent way to keep loose ends from silently disappearing into the codebase.",
            ],
        },
        he: {
            title: "אפליקציית כרטיסי ביקור",
            shortDescription:
                "פלטפורמת ניהול כרטיסי ביקור מלאה עם אימות JWT, הרשאות מבוססות תפקיד, מועדפים ולוח בקרה למנהלים, נבנתה עם React, TypeScript ו-Redux Toolkit.",
            overview:
                "פלטפורמת ניהול כרטיסי ביקור עם שלוש רמות הרשאה - משתמש רגיל, משתמש עסקי ומנהל - כל אחת פותחת בהדרגה עוד מאותה מערכת פיצ'רים: עיון וסימון מועדפים כמשתמש רגיל, יצירה/עריכה/מחיקה של כרטיסים אישיים כמשתמש עסקי, ולוח CRM מלא (ניהול משתמשים, פיקוח כרטיסים, החלפת הרשאות) כמנהל. נבנתה מול REST API למשתמשים, כרטיסים ומועדפים, עם מצב כהה ופריסה רספונסיבית לכל אורכה.",
            architecture:
                "React 18 + TypeScript על Vite, מעוצב עם TailwindCSS. המצב מרוכז ב-Redux Toolkit במקום מפוזר ב-state מקומי, מה שמתאים לצורת האפליקציה - אותם נתוני כרטיס/משתמש צריכים להיקרא ולהשתנות ממסכים עצמאיים רבים (בית, מועדפים, CRM, פרופיל). הניתוב משתמש ב-React Router עם נתיבים מוגנים ששולטים בגישה לפי מצב אימות ותפקיד. hooks מותאמים אישית (`useAuth`, `useCards`, `useUsers`, `useSearch`, `useViewMode`) עוטפים את דפוסי ה-API/state החוזרים, וסכימות Joi מוודאות טפסים לפני שהם מגיעים ל-API. כלל ESLint מותאם אישית (מסמן הערות `todo` ללא תלות ברישיות) משלים את צינור ה-lint/format/type-check הרגיל.",
            challenges: [
                "אכיפת ארבע רמות הרשאה שונות (אורח, רגיל, עסקי, מנהל) בעקביות גם בממשק (הסתרה/נטרול פעולות) וגם בניתוב (נתיבים מוגנים) חייבה שמטריצת ההרשאות תהיה מקור אמת יחיד שנועץ בו בכל מקום, במקום להיגזר מחדש אד-הוק בכל מסך.",
                "האפליקציה תלויה בשרת אחורי נפרד ל-REST API שלה (משתמשים, כרטיסים, מועדפים) - ברגע שפריסת השרת האחורי הופסקה, לחזית לא היה עם מי לדבר, מה שממחיש טרייד-אוף אמיתי בפיצול חזית/שרת אחורי לשני חלקים מתארחים בנפרד במקום יחידת פריסה אחת.",
            ],
            lessons: [
                "ריכוז המצב ב-Redux Toolkit השתלם במיוחד כי אותן ישויות (כרטיסים, משתמשים) נקראות ונכתבות מחלקים לא קשורים באפליקציה (פיד הבית, מועדפים, CRM) - state מקומי לרכיב היה אומר prop-drilling או שליפות כפולות בכל מקום.",
                "כתיבת כלל ESLint מותאם אישית (לאזהרת הערת `todo`) הראתה כמה נגישה בפועל ה-API של תוספי ESLint, ויצרה דרך פשוטה אך קבועה למנוע מקצוות פתוחים להיעלם בשקט לתוך בסיס הקוד.",
            ],
        },
    },
};

export default hackerUReactModuleProject;
