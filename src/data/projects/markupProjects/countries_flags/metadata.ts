import type { MarkupProject } from "../markupProjects";

const countriesFlags: MarkupProject = {
    slug: "countries-flags",
    featured: false,
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
    content: {
        en: {
            title: "Countries Flags",
            shortDescription:
                "Interactive country cards with search and filter, powered by a REST API.",
            overview:
                "Built an interactive web app that fetches country data from a REST API and displays it as cards showing each country's flag and details. Includes search by country name and filtering functionality.",
            architecture:
                "Static HTML/CSS/JS. Data fetched from a public REST API on page load. DOM manipulation used to build and insert cards dynamically, and to handle search and filter interactions.",
            challenges: [
                "Handling asynchronous API fetch and inserting the response data into the DOM dynamically.",
                "Implementing search and filter logic that updates the displayed cards in real time.",
            ],
            lessons: [
                "Working with fetch and promises for the first time in a real project.",
                "Understanding how to structure DOM manipulation code to stay readable as complexity grows.",
            ],
        },
        he: {
            title: "דגלי מדינות",
            shortDescription: "קלפי מדינות אינטראקטיביים עם חיפוש וסינון, מבוססי REST API.",
            overview:
                "בניתי אפליקציית ווב שמושכת נתוני מדינות מ-REST API ומציגה אותם כקלפים עם דגל ופרטים. כולל חיפוש לפי שם מדינה ואפשרויות סינון.",
            architecture:
                "HTML/CSS/JS סטטי. נתונים נמשכים מ-API ציבורי בטעינת העמוד. מניפולציית DOM לבניית הקלפים והוספתם לדף באופן דינמי, וטיפול באינטראקציות חיפוש וסינון.",
            challenges: [
                "טיפול ב-fetch אסינכרוני והכנסת הנתונים לתוך ה-DOM באופן דינמי.",
                "מימוש לוגיקת חיפוש וסינון שמעדכנת את הקלפים בזמן אמת.",
            ],
            lessons: [
                "עבודה עם fetch ו-promises לראשונה בפרויקט אמיתי.",
                "הבנה כיצד לארגן קוד מניפולציית DOM כך שיישאר קריא ככל שהמורכבות גדלה.",
            ],
        },
    },
};

export default countriesFlags;
