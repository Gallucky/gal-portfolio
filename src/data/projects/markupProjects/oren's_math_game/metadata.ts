import type { MarkupProject } from "../markupProjects";

const orensMathGame: MarkupProject = {
    slug: "orens-math-game",
    featured: false,
    stack: ["HTML", "CSS", "JavaScript"],
    content: {
        en: {
            title: "Oren's Math Game",
            shortDescription:
                "A math quiz game with multiple difficulty levels and randomly generated questions.",
            overview:
                "Built a browser-based math game where questions are randomly generated based on the selected difficulty level. Players answer arithmetic questions within a time or attempt limit.",
            architecture:
                "Static HTML/CSS/JS. Game state managed in JavaScript variables. DOM updated on each question to reflect score, remaining attempts, and feedback.",
            challenges: [
                "Generating random math questions that are appropriate for each difficulty level.",
                "Managing game state (score, lives, current question) cleanly without a framework.",
            ],
            lessons: [
                "How to structure a stateful interactive experience using only vanilla JavaScript.",
                "The importance of separating game logic from DOM rendering even in small projects.",
            ],
        },
        he: {
            title: "משחק המתמטיקה של אורן",
            shortDescription: "משחק חישוב מתמטי עם רמות קושי שונות ושאלות אקראיות.",
            overview:
                "בניתי משחק מתמטיקה מבוסס דפדפן בו שאלות נוצרות אקראית בהתאם לרמת הקושי שנבחרה. השחקנים עונים על שאלות חשבון בתוך מסגרת ניסיונות.",
            architecture:
                "HTML/CSS/JS סטטי. מצב המשחק מנוהל במשתני JavaScript. ה-DOM מתעדכן בכל שאלה.",
            challenges: [
                "יצירת שאלות מתמטיות אקראיות המתאימות לכל רמת קושי.",
                "ניהול מצב המשחק (ניקוד, חיים, שאלה נוכחית) ללא framework.",
            ],
            lessons: [
                "כיצד לבנות חוויה אינטראקטיבית עם מצב באמצעות JavaScript וניל בלבד.",
                "חשיבות ההפרדה בין לוגיקת המשחק לרינדור ה-DOM גם בפרויקטים קטנים.",
            ],
        },
    },
};

export default orensMathGame;
