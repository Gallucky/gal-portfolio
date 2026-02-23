import type { MarkupProject } from "../markupProjects";

const ticTacToe: MarkupProject = {
    slug: "tic-tac-toe",
    featured: false,
    stack: ["HTML", "CSS", "JavaScript"],
    content: {
        en: {
            title: "Tic Tac Toe",
            shortDescription: "A browser-based Tic Tac Toe game with multiple difficulty levels.",
            overview:
                "Built a fully functional Tic Tac Toe game playable in the browser. Includes multiple difficulty levels affecting the computer opponent's decision making.",
            architecture:
                "Static HTML/CSS/JS. Game board represented as a JavaScript array. Win detection logic checks all rows, columns, and diagonals after each move.",
            challenges: [
                "Implementing win detection logic that correctly checks all possible winning combinations.",
                "Building a computer opponent with varying difficulty levels.",
            ],
            lessons: [
                "How to represent a game board as a data structure and keep the UI in sync with it.",
                "Breaking a problem into smaller logic functions makes testing and debugging significantly easier.",
            ],
        },
        he: {
            title: "איקס עיגול",
            shortDescription: "משחק איקס עיגול בדפדפן עם דרגות קושי שונות.",
            overview:
                "בניתי משחק איקס עיגול מלא הניתן למשחק בדפדפן, עם דרגות קושי שונות המשפיעות על קבלת ההחלטות של יריב המחשב.",
            architecture:
                "HTML/CSS/JS סטטי. לוח המשחק מיוצג כמערך JavaScript. לוגיקת זיהוי ניצחון בודקת את כל השורות, העמודות והאלכסונים.",
            challenges: [
                "מימוש לוגיקת זיהוי ניצחון הבודקת את כל צירופי הניצחון האפשריים.",
                "בניית יריב מחשב עם דרגות קושי משתנות.",
            ],
            lessons: [
                "כיצד לייצג לוח משחק כמבנה נתונים ולשמור את ה-UI מסונכרן איתו.",
                "פירוק בעיה לפונקציות לוגיות קטנות מקל מאוד על בדיקות ודיבאג.",
            ],
        },
    },
};

export default ticTacToe;
