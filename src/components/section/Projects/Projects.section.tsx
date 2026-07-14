import ProjectView from "@/components/ui/Projects/ProjectView/ProjectView";
import Section from "../Section";
import type { Project } from "@/data/projects";

const demoProjects: Project[] = [
    {
        slug: "think-outside-the-box",
        featured: true,
        stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
        githubFrontend: "https://github.com/galbenabu/think-outside-the-box-frontend",
        githubBackend: "https://github.com/galbenabu/think-outside-the-box-backend",
        liveUrl: "https://think-outside-the-box.demo.app",
        screenshots: [],
        content: {
            en: {
                title: "Think Outside The Box",
                shortDescription: "A full-stack puzzle platform for creative problem solving.",
                overview:
                    "A web app where users solve and submit lateral-thinking puzzles, vote on submissions, and track their progress over time. Built to practice full-stack fundamentals end to end, from schema design to deployment.",
                architecture:
                    "Client-server architecture with a React SPA consuming a REST API. The backend follows a layered structure (routes → controllers → services → repositories) to keep business logic separate from data access. Auth is handled with JWTs and refresh tokens; PostgreSQL stores users, puzzles, and votes with normalized relations.",
                challenges: [
                    "Designing a voting system resistant to duplicate/spam votes.",
                    "Keeping the REST API responsive under nested relational queries.",
                    "Handling auth token refresh without disrupting the user session.",
                ],
                lessons: [
                    "The value of separating business logic from route handlers early on.",
                    "How database indexing choices affect query performance at scale.",
                    "Practical trade-offs between REST and GraphQL for relational data.",
                ],
            },
            he: {
                title: "לחשוב מחוץ לקופסה",
                shortDescription: "פלטפורמת חידות פול-סטאק לפתרון בעיות יצירתי.",
                overview:
                    "אפליקציית ווב שבה משתמשים פותרים ומעלים חידות חשיבה לרוחב, מצביעים על הצעות, ועוקבים אחר ההתקדמות שלהם לאורך זמן. נבנתה כדי לתרגל יסודות פול-סטאק מקצה לקצה, מעיצוב סכמה ועד לפריסה.",
                architecture:
                    "ארכיטקטורת קליינט-שרת עם SPA ב-React הצורך API מסוג REST. השרת בנוי במבנה שכבתי (routes ← controllers ← services ← repositories) כדי להפריד לוגיקה עסקית מגישה לנתונים. האימות מתבצע באמצעות JWT וטוקני רענון; PostgreSQL מאחסן משתמשים, חידות והצבעות ביחסים מנורמלים.",
                challenges: [
                    "עיצוב מערכת הצבעות עמידה בפני הצבעות כפולות/ספאם.",
                    "שמירה על ביצועי API טובים תחת שאילתות יחסיות מקוננות.",
                    "טיפול ברענון טוקן אימות מבלי לשבש את הסשן של המשתמש.",
                ],
                lessons: [
                    "הערך שבהפרדת לוגיקה עסקית מ-route handlers מוקדם ככל האפשר.",
                    "איך בחירות אינדוקסציה במסד הנתונים משפיעות על ביצועי שאילתות בקנה מידה גדול.",
                    "פשרות מעשיות בין REST ל-GraphQL עבור נתונים יחסיים.",
                ],
            },
        },
    },
    {
        slug: "portfolio-site",
        featured: true,
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubFrontend: "https://github.com/galbenabu/portfolio-site",
        liveUrl: "https://galbenabu.dev",
        screenshots: [],
        content: {
            en: {
                title: "Personal Portfolio Site",
                shortDescription:
                    "A bilingual (EN/HE) personal site showcasing projects and skills.",
                overview:
                    "A statically generated portfolio site with full RTL/LTR support, dark mode, and animated project cards. Built to have a real-world, production-quality showcase of frontend craft.",
                architecture:
                    "Built with Next.js using the App Router and static generation for fast loads. Content (like this project list) is modeled as typed data rather than hardcoded JSX, so adding a project is a data change, not a code change. Framer Motion drives page and card transitions; Tailwind handles theming and responsive layout.",
                challenges: [
                    "Supporting both RTL (Hebrew) and LTR (English) layouts from the same components.",
                    "Keeping animations smooth without hurting Lighthouse performance scores.",
                    "Structuring content types so translations stay in sync across languages.",
                ],
                lessons: [
                    "How to design data models that cleanly support multi-language content.",
                    "RTL-aware CSS and layout patterns in Tailwind.",
                    "The importance of typed content contracts when content is data-driven.",
                ],
            },
            he: {
                title: "אתר תיק עבודות אישי",
                shortDescription: "אתר אישי דו-לשוני (עברית/אנגלית) המציג פרויקטים וכישורים.",
                overview:
                    "אתר תיק עבודות סטטי עם תמיכה מלאה ב-RTL/LTR, מצב כהה, וכרטיסי פרויקט מונפשים. נבנה כדי להציג בפועל, ברמת ייצור, את יכולות הפרונט-אנד.",
                architecture:
                    "נבנה עם Next.js תוך שימוש ב-App Router וייצור סטטי לטעינה מהירה. תוכן (כמו רשימת הפרויקטים הזו) מעוצב כנתונים מוקלדים ולא כ-JSX קשיח, כך שהוספת פרויקט היא שינוי נתונים ולא שינוי קוד. Framer Motion מניע מעברי עמוד וכרטיסים; Tailwind מטפל בעיצוב ובפריסה רספונסיבית.",
                challenges: [
                    "תמיכה בפריסות RTL (עברית) ו-LTR (אנגלית) מאותם רכיבים.",
                    "שמירה על אנימציות חלקות מבלי לפגוע בציוני Lighthouse.",
                    "עיצוב טיפוסי תוכן כך שהתרגומים יישארו מסונכרנים בין השפות.",
                ],
                lessons: [
                    "איך לעצב מודלי נתונים שתומכים בצורה נקייה בתוכן רב-לשוני.",
                    "דפוסי CSS ופריסה מודעי-RTL ב-Tailwind.",
                    "החשיבות של חוזי תוכן מוקלדים כאשר התוכן מונע נתונים.",
                ],
            },
        },
    },
    {
        slug: "task-flow-api",
        featured: false,
        stack: ["Node.js", "Express", "MongoDB", "Docker", "Jest"],
        githubBackend: "https://github.com/galbenabu/task-flow-api",
        screenshots: [],
        content: {
            en: {
                title: "TaskFlow API",
                shortDescription: "A RESTful task-management backend with team support.",
                overview:
                    "A backend service for managing tasks, teams, and permissions, exposed as a documented REST API. Focused on clean API design and solid test coverage rather than a UI.",
                architecture:
                    "Express-based REST API following MVC-like conventions, with MongoDB via Mongoose for flexible task/team schemas. Role-based access control gates endpoints by team membership. The whole stack is containerized with Docker for consistent local and CI environments.",
                challenges: [
                    "Modeling flexible team/permission structures in a document database.",
                    "Writing integration tests that don't depend on external service state.",
                    "Keeping API responses consistent across error and success cases.",
                ],
                lessons: [
                    "Patterns for role-based access control in a REST API.",
                    "How to write integration tests with an in-memory MongoDB instance.",
                    "The benefit of containerizing early instead of retrofitting Docker later.",
                ],
            },
            he: {
                title: "TaskFlow API",
                shortDescription: "שרת RESTful לניהול משימות עם תמיכה בצוותים.",
                overview:
                    "שירות שרת לניהול משימות, צוותים והרשאות, החשוף כ-API מתועד מסוג REST. ההתמקדות היא בעיצוב API נקי ובכיסוי בדיקות מוצק, ולא בממשק משתמש.",
                architecture:
                    "API מבוסס Express העוקב אחר מוסכמות דמויות MVC, עם MongoDB דרך Mongoose לסכמות משימות/צוותים גמישות. בקרת גישה מבוססת תפקידים חוסמת נקודות קצה לפי חברות בצוות. כל המחסנית מכולאת (containerized) עם Docker לסביבות פיתוח ו-CI עקביות.",
                challenges: [
                    "מידול מבני צוות/הרשאות גמישים במסד נתונים מסוג מסמכים.",
                    "כתיבת בדיקות אינטגרציה שלא תלויות במצב שירות חיצוני.",
                    "שמירה על עקביות תגובות ה-API במקרי שגיאה והצלחה כאחד.",
                ],
                lessons: [
                    "דפוסים לבקרת גישה מבוססת תפקידים ב-API מסוג REST.",
                    "איך לכתוב בדיקות אינטגרציה עם מופע MongoDB בזיכרון.",
                    "היתרון בהכלאה (containerization) מוקדמת במקום התאמת Docker בדיעבד.",
                ],
            },
        },
    },
];

const ProjectsSection = () => {
    return (
        <Section>
            <ProjectView type="featured" projects={demoProjects} />
        </Section>
    );
};

export default ProjectsSection;
