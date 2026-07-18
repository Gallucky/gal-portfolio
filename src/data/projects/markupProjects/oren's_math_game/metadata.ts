import type { MarkupProjectMetadata } from "../markupProjects";
import previewImage from "./project_preview.png";

/**
 * "Oren's Math Game" - a browser-based math quiz game with multiple difficulty levels and
 * randomly generated arithmetic questions, built in vanilla HTML, CSS, and JavaScript.
 *
 * @see https://github.com/Gallucky/oren-s-math-game for the source.
 */
const orensMathGame: MarkupProjectMetadata = {
    slug: "orens-math-game",
    stack: ["JavaScript", "CSS", "HTML"],
    githubLinks: [
        { label: "View Repository", url: "https://github.com/Gallucky/oren-s-math-game" },
    ],
    liveUrl: "https://gallucky.github.io/oren-s-math-game/",
    screenshots: [
        {
            url: previewImage,
            alt: "Oren's Math Game Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "Oren's Math Game",
            shortDescription:
                "A browser-based math quiz game with multiple difficulty levels and randomly generated arithmetic questions.",
            overview:
                "An interactive arithmetic quiz built entirely in vanilla HTML, CSS, and JavaScript. Players pick a difficulty level and are presented with randomly generated math questions, with instant feedback on each answer and a running score tracked throughout the session. Custom cursor styles and a shiny-button component round out the presentation.",
            architecture:
                "No framework - all game logic lives in a single `game_logic.js` module: difficulty selection controls the number range used in generated questions, a question generator produces the arithmetic problems, an answer validator checks user input against the correct result, and a score tracker maintains the running total for the session.",
            challenges: [
                "Generating arithmetic questions that scale fairly with the chosen difficulty level - keeping easy questions genuinely easy and hard questions genuinely hard - took some tuning of the number ranges and operators used.",
                "Keeping the feedback loop (question to answer to score update) instant and clear needed careful handling of input validation and UI state within a single, non-modular script.",
            ],
            lessons: [
                "Even in a single-file vanilla-JS game, separating question generation, answer validation, and score tracking into distinct responsibilities inside `game_logic.js` made the logic easier to follow and extend.",
                "Small UX touches - custom cursors, a styled button component - go a long way toward making a simple browser game feel finished.",
            ],
        },
        he: {
            title: "משחק המתמטיקה של אורן",
            shortDescription:
                "משחק חידון מתמטי בדפדפן עם מספר רמות קושי ושאלות חשבון שנוצרות באופן אקראי.",
            overview:
                "חידון חשבון אינטראקטיבי שנבנה כולו ב-HTML, CSS ו-JavaScript טהורים. השחקנים בוחרים רמת קושי ומקבלים שאלות מתמטיקה שנוצרות באופן אקראי, עם משוב מיידי על כל תשובה וניקוד רץ שנשמר לאורך כל הסשן. עיצובי סמן מותאמים אישית ורכיב כפתור מבריק משלימים את החוויה.",
            architecture:
                "ללא framework - כל לוגיקת המשחק חיה במודול יחיד, `game_logic.js`: בחירת רמת הקושי קובעת את טווח המספרים המשמש ביצירת השאלות, מחולל שאלות מייצר את בעיות החשבון, בדיקת תשובה משווה את קלט המשתמש לתוצאה הנכונה, ומעקב ניקוד שומר את הסכום הרץ לאורך הסשן.",
            challenges: [
                "יצירת שאלות חשבון שמתאימות בצורה הוגנת לרמת הקושי הנבחרת - כך שהשאלות הקלות אכן קלות והקשות אכן קשות - דרשה כוונון של טווחי המספרים והאופרטורים בהם נעשה שימוש.",
                "שמירה על לולאת משוב מיידית וברורה (שאלה, תשובה, עדכון ניקוד) חייבה טיפול קפדני בבדיקת קלט ובמצב הממשק בתוך סקריפט יחיד שאינו מודולרי.",
            ],
            lessons: [
                "גם במשחק JavaScript טהור בקובץ יחיד, הפרדת יצירת השאלות, בדיקת התשובות ומעקב הניקוד לאחריות נפרדות בתוך `game_logic.js` שמרה על הלוגיקה קלה יותר למעקב ולהרחבה.",
                "פרטים קטנים בחוויית המשתמש - סמנים מותאמים אישית, רכיב כפתור מעוצב - תורמים המון לתחושה שמשחק דפדפן פשוט מרגיש גמור.",
            ],
        },
    },
};

export default orensMathGame;
