import type { MarkupProject } from "../markupProjects";

const weatherCast: MarkupProject = {
    slug: "weather-cast",
    featured: false,
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    content: {
        en: {
            title: "Weather Cast",
            shortDescription:
                "A weather app that fetches live temperature and details for any city via API.",
            overview:
                "Built a weather application where users search for a city or country and get live weather data including temperature and additional details, fetched from a public weather API.",
            architecture:
                "Static HTML/CSS/JS. User input triggers a fetch request to a weather API. Response data is parsed and rendered into the DOM dynamically.",
            challenges: [
                "Handling API errors gracefully — invalid city names, network failures, and empty responses.",
                "Displaying meaningful feedback to the user when a search returns no results.",
            ],
            lessons: [
                "How to read and use third-party API documentation to extract the right data fields.",
                "Error handling in async code is just as important as the happy path.",
            ],
        },
        he: {
            title: "תחזית מזג אוויר",
            shortDescription: "אפליקציית מזג אוויר המביאה נתונים חיים לכל עיר באמצעות API.",
            overview:
                "בניתי אפליקציית מזג אוויר שבה משתמשים מחפשים עיר או מדינה ומקבלים נתוני מזג אוויר חיים כולל טמפרטורה ופרטים נוספים, הנמשכים מ-API ציבורי.",
            architecture:
                "HTML/CSS/JS סטטי. קלט המשתמש מפעיל בקשת fetch ל-API. הנתונים מנותחים ומרונדרים לתוך ה-DOM.",
            challenges: [
                "טיפול בשגיאות API — שמות ערים לא תקינים, כשלי רשת ותגובות ריקות.",
                "הצגת משוב משמעותי למשתמש כאשר החיפוש לא מחזיר תוצאות.",
            ],
            lessons: [
                "כיצד לקרוא ולהשתמש בתיעוד API של צד שלישי כדי לחלץ את שדות הנתונים הנכונים.",
                "טיפול בשגיאות בקוד אסינכרוני חשוב לא פחות מהמסלול התקין.",
            ],
        },
    },
};

export default weatherCast;
