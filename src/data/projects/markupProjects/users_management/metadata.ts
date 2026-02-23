import type { MarkupProject } from "../markupProjects";

const usersManagement: MarkupProject = {
    slug: "users-management",
    featured: false,
    stack: ["HTML", "CSS", "JavaScript"],
    content: {
        en: {
            title: "Users Management",
            shortDescription:
                "A browser-based user management system with registration, login, and user status display.",
            overview:
                "Built a client-side user management app where users can register, log in, and view the list of registered users and their status. All data persisted in localStorage.",
            architecture:
                "Static HTML/CSS/JS. User data stored in localStorage. Separate views for registration, login, and user dashboard toggled via DOM manipulation.",
            challenges: [
                "Managing multiple application views (register, login, dashboard) without a router or framework.",
                "Validating form input and giving clear feedback for errors like duplicate usernames.",
            ],
            lessons: [
                "localStorage as a simple persistence layer and its limitations (no real security).",
                "How to manage application state and view transitions in vanilla JavaScript.",
            ],
        },
        he: {
            title: "ניהול משתמשים",
            shortDescription: "מערכת ניהול משתמשים בדפדפן עם הרשמה, התחברות והצגת סטטוס.",
            overview:
                "בניתי אפליקציית ניהול משתמשים בצד הלקוח שבה משתמשים יכולים להירשם, להתחבר ולצפות ברשימת המשתמשים הרשומים וסטטוסם. הנתונים נשמרים ב-localStorage.",
            architecture:
                "HTML/CSS/JS סטטי. נתוני משתמשים מאוחסנים ב-localStorage. תצוגות נפרדות להרשמה, התחברות ודשבורד מוחלפות באמצעות מניפולציית DOM.",
            challenges: [
                "ניהול מספר תצוגות אפליקציה ללא router או framework.",
                "ולידציה של קלט טפסים ומתן משוב ברור על שגיאות כמו שם משתמש כפול.",
            ],
            lessons: [
                "localStorage כשכבת persistence פשוטה והמגבלות שלה (ללא אבטחה אמיתית).",
                "כיצד לנהל מצב אפליקציה ומעברי תצוגה ב-JavaScript וניל.",
            ],
        },
    },
};

export default usersManagement;
