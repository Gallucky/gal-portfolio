import type { MarkupProjectMetadata } from "../markupProjects";
import previewImage from "./project_preview.png";

/**
 * "Tic Tac Toe" - a browser-based Tic Tac Toe game with multiple difficulty levels, built in
 * vanilla HTML, CSS, and JavaScript using ES Modules and an OOP architecture.
 *
 * @see https://github.com/Gallucky/tic-tac-toe for the source.
 */
const ticTacToe: MarkupProjectMetadata = {
    slug: "tic-tac-toe",
    stack: ["JavaScript", "CSS", "HTML"],
    githubLinks: [{ label: "View Repository", url: "https://github.com/Gallucky/tic-tac-toe" }],
    liveUrl: "https://gallucky.github.io/tic-tac-toe/",
    screenshots: [
        {
            url: previewImage,
            alt: "Tic Tac Toe Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "Tic Tac Toe",
            shortDescription:
                "A fully interactive Tic Tac Toe game with multiple difficulty levels, built with an OOP, ES-Modules architecture.",
            overview:
                "A browser-playable Tic Tac Toe game: players choose a difficulty level from a start menu, play on a 3x3 board, and land on an end screen showing the result with a restart option. The game state and win/draw detection are encapsulated in a dedicated `Board` class rather than scattered across the UI code.",
            architecture:
                "Vanilla JavaScript organized as ES Modules with a clean separation of concerns: `Board.js` encapsulates the board as a class - cell state, win detection, and draw detection - while `domService.js` owns all DOM interaction (rendering the board, showing/hiding menus, binding events). An `index.js` entry point wires the `Board` model to the DOM service, following a start menu to game board to end menu flow.",
            challenges: [
                'Because the app uses ES Modules (`type="module"`), opening `index.html` directly via `file://` doesn\'t work reliably in every browser - it needs to be served through a local development server instead.',
                "Keeping win and draw detection entirely inside the `Board` class, separate from rendering, meant designing its public interface carefully so `domService.js` never needed to know how those checks were implemented.",
            ],
            lessons: [
                "Encapsulating board state and win/draw logic in a single `Board` class made the game far easier to reason about than mixing that logic into DOM event handlers directly.",
                "Splitting DOM rendering into its own `domService.js` module meant the game logic in `Board.js` stayed completely UI-agnostic and easy to test in isolation.",
            ],
        },
        he: {
            title: "איקס עיגול",
            shortDescription:
                "משחק איקס עיגול אינטראקטיבי לחלוטין עם מספר רמות קושי, שנבנה בארכיטקטורת OOP מבוססת ES Modules.",
            overview:
                "משחק איקס עיגול הניתן למשחק בדפדפן: השחקנים בוחרים רמת קושי מתפריט פתיחה, משחקים על לוח 3 על 3, ומגיעים למסך סיום שמציג את התוצאה עם אפשרות להתחיל מחדש. מצב המשחק וזיהוי הניצחון/תיקו מוכלים במחלקת `Board` ייעודית במקום להיות מפוזרים בקוד הממשק.",
            architecture:
                "JavaScript טהור המאורגן כ-ES Modules עם הפרדת אחריות נקייה: `Board.js` מכיל את הלוח כמחלקה - מצב התאים, זיהוי ניצחון וזיהוי תיקו - בעוד `domService.js` אחראי על כל האינטראקציה עם ה-DOM (רינדור הלוח, הצגה/הסתרה של תפריטים, קישור אירועים). נקודת הכניסה `index.js` מחברת בין מודל ה-`Board` לשירות ה-DOM, ועוקבת אחר זרימה של תפריט פתיחה, לוח משחק, ותפריט סיום.",
            challenges: [
                'מכיוון שהאפליקציה משתמשת ב-ES Modules (`type="module"`), פתיחת `index.html` ישירות דרך `file://` לא עובדת בצורה אמינה בכל דפדפן - יש צורך להגיש אותה דרך שרת פיתוח מקומי.',
                "שמירת זיהוי הניצחון והתיקו כולו בתוך מחלקת ה-`Board`, בנפרד מהרינדור, חייבה לתכנן בקפידה את הממשק הציבורי שלה כך ש-`domService.js` לעולם לא נדרש לדעת כיצד הבדיקות הללו מיושמות.",
            ],
            lessons: [
                "הכלת מצב הלוח ולוגיקת הניצחון/תיקו במחלקת `Board` אחת הפכה את המשחק לקל הרבה יותר להבנה מאשר לערבב את הלוגיקה הזו ישירות במאזיני אירועי ה-DOM.",
                "פיצול רינדור ה-DOM למודול `domService.js` נפרד שמר על לוגיקת המשחק ב-`Board.js` חסרת תלות לחלוטין בממשק וקלה לבדיקה בבידוד.",
            ],
        },
    },
};

export default ticTacToe;
