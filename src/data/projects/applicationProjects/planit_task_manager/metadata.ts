import type { ApplicationProjectMetadata } from "../applicationProjects";

const planItTaskManager: ApplicationProjectMetadata = {
    slug: "planit-task-manager",
    featured: true,
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    content: {
        en: {
            title: "PlanIt – Task & Project Manager",
            shortDescription:
                "A full-stack Kanban-style task manager with authentication, real-time board updates, and team workspaces.",
            overview:
                "A MERN application for organizing work into boards, lists, and cards - think a lightweight Trello. Users can sign up, create workspaces, invite teammates, and drag cards between columns to track progress. Built end-to-end: React frontend, Express/MongoDB backend, and JWT-based authentication.",
            architecture:
                "React + TypeScript frontend talking to a REST API built with Express and MongoDB/Mongoose. Auth is JWT-based with refresh tokens stored in httpOnly cookies. Board state updates optimistically on the client and reconciles with the server response, so drag-and-drop feels instant even before the request resolves.",
            challenges: [
                "Modeling boards/lists/cards as a nested-but-queryable schema in MongoDB without over-fetching on every board load.",
                "Keeping drag-and-drop reordering consistent between optimistic UI updates and the server's source of truth, especially under concurrent edits from multiple users.",
                "Designing the auth flow (access + refresh tokens) so sessions persist across reloads without storing anything sensitive in localStorage.",
            ],
            lessons: [
                "Optimistic updates dramatically improve perceived performance, but need a clear reconciliation strategy for when the server disagrees with the client.",
                "Normalizing nested data (boards -> lists -> cards) into flat, ID-referenced state made the frontend far easier to reason about than deeply nested objects.",
                "JWT refresh flows have a lot of edge cases (expired-mid-request, concurrent refresh calls) that are easy to underestimate until you build one for real.",
            ],
        },
        he: {
            title: "PlanIt – מנהל משימות ופרויקטים",
            shortDescription:
                "מנהל משימות בסגנון Kanban עם הרשאות משתמשים, עדכוני לוח בזמן אמת וסביבות עבודה לצוותים.",
            overview:
                "אפליקציית MERN לניהול עבודה בלוחות, רשימות וכרטיסיות - בדומה ל-Trello קליל. משתמשים יכולים להירשם, ליצור סביבות עבודה, להזמין חברי צוות ולגרור כרטיסיות בין עמודות למעקב אחר התקדמות. נבנתה מקצה לקצה: frontend ב-React, backend ב-Express/MongoDB, והרשאות מבוססות JWT.",
            architecture:
                "Frontend ב-React + TypeScript מתקשר עם REST API שנבנה ב-Express ו-MongoDB/Mongoose. ההרשאות מבוססות JWT עם refresh tokens ששמורים ב-httpOnly cookies. מצב הלוח מתעדכן באופן אופטימי בצד הלקוח ומתיישר מול תגובת השרת, כך שגרירה ושחרור מרגישים מיידיים עוד לפני שהבקשה הושלמה.",
            challenges: [
                "מידול לוחות/רשימות/כרטיסיות כסכימה מקוננת אך ניתנת לשאילתה יעילה ב-MongoDB, בלי לשלוף יותר מדי נתונים בכל טעינת לוח.",
                "שמירה על עקביות בסידור מחדש בגרירה ושחרור בין עדכונים אופטימיים בלקוח למקור האמת בשרת, בפרט תחת עריכות במקביל ממספר משתמשים.",
                "תכנון תהליך ההרשאות (access + refresh tokens) כך שההתחברות תישמר גם אחרי רענון דף בלי לשמור מידע רגיש ב-localStorage.",
            ],
            lessons: [
                "עדכונים אופטימיים משפרים משמעותית את חוויית המהירות הנתפסת, אך דורשים אסטרטגיית התאמה ברורה למקרים בהם השרת לא מסכים עם הלקוח.",
                "נירמול נתונים מקוננים (לוחות -> רשימות -> כרטיסיות) למצב שטוח ומבוסס-מזהים הפך את ה-frontend לקריא ופשוט הרבה יותר מאובייקטים מקוננים לעומק.",
                "לתהליכי JWT refresh יש הרבה מקרי קצה (פקיעה באמצע בקשה, קריאות refresh במקביל) שקל להמעיט בערכם עד שבונים כזה בפועל.",
            ],
        },
    },
};

export default planItTaskManager;
