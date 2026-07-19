import previewImage from "./project_preview.png";
import type { MarkupProjectMetadata } from "@data/projects/markupProjects/markupProjects";

/**
 * "Weather Cast" - a live weather application that fetches real-time temperature and detailed
 * weather data for any city using the OpenWeatherMap API, built in vanilla HTML, CSS, and
 * JavaScript.
 *
 * @see https://github.com/Gallucky/weather-cast for the source.
 */
const weatherCast: MarkupProjectMetadata = {
    slug: "weather-cast",
    stack: ["CSS", "JavaScript", "HTML"],
    githubLinks: [{ label: "View Repository", url: "https://github.com/Gallucky/weather-cast" }],
    liveUrl: "https://gallucky.github.io/weather-cast/",
    screenshots: [
        {
            url: previewImage,
            alt: "Weather Cast Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "Weather Cast",
            shortDescription:
                "A single-page weather app that fetches live temperature, conditions, and sunrise/sunset times for any city via the OpenWeatherMap API.",
            overview:
                "A single-page weather app: the user enters a city name and the app fetches current conditions - temperature, weather description, and sunrise/sunset times - from the OpenWeatherMap REST API and renders them on the page, alongside an info button with extra details. A custom web font, custom cursor, and shiny-button component round out the presentation.",
            architecture:
                "Vanilla JavaScript using async/await for the API call and DOM manipulation for rendering the result. All application logic - the fetch call, response handling, and DOM updates - lives in a single `script.js`. A `weather.drawio` diagram documents the app's flow. There's no framework, build step, or module system involved.",
            challenges: [
                "The OpenWeatherMap API key is embedded directly in `script.js` for demo purposes, which is a well-documented shortcut for a static, no-backend project rather than something that would be acceptable in a production app with a real backend to proxy the request.",
                "The app has no offline or fallback mode and depends on both an active internet connection and city names being entered in English for reliable API matches - there's no server layer to normalize or cache results.",
            ],
            lessons: [
                "Working directly with a public REST API using `fetch` and `async`/`await` made the request/response flow easy to reason about, but also made it obvious why API keys need a backend proxy in anything beyond a demo.",
                "Even a simple weather widget benefits from small UX details - an info button, sunrise/sunset icons, a custom web font - that make the result feel considered rather than just raw API data on a page.",
            ],
        },
        he: {
            title: "תחזית מזג אוויר",
            shortDescription:
                "אפליקציית מזג אוויר בעמוד יחיד ששולפת טמפרטורה חיה, תנאים ושעות זריחה/שקיעה לכל עיר דרך OpenWeatherMap API.",
            overview:
                "אפליקציית מזג אוויר בעמוד יחיד: המשתמש מזין שם עיר והאפליקציה שולפת את התנאים הנוכחיים - טמפרטורה, תיאור מזג האוויר, ושעות זריחה/שקיעה - מה-REST API של OpenWeatherMap ומציגה אותם בעמוד, לצד כפתור מידע עם פרטים נוספים. פונט רשת מותאם אישית, סמן מותאם אישית ורכיב כפתור מבריק משלימים את החוויה.",
            architecture:
                "JavaScript טהור המשתמש ב-async/await לקריאת ה-API ובמניפולציית DOM להצגת התוצאה. כל לוגיקת האפליקציה - קריאת ה-fetch, טיפול בתגובה ועדכוני ה-DOM - חיה בקובץ יחיד, `script.js`. דיאגרמת `weather.drawio` מתעדת את זרימת האפליקציה. אין כאן framework, שלב בנייה או מערכת מודולים.",
            challenges: [
                "מפתח ה-API של OpenWeatherMap מוטמע ישירות ב-`script.js` למטרות הדגמה, מה שמתועד במפורש כקיצור דרך עבור פרויקט סטטי ללא שרת אחורי, ולא כמשהו שהיה מתקבל באפליקציית ייצור עם שרת אמיתי שמתווך את הבקשה.",
                "לאפליקציה אין מצב לא מקוון או חלופי, והיא תלויה גם בחיבור אינטרנט פעיל וגם בהזנת שמות ערים באנגלית להתאמת API אמינה - אין שכבת שרת שמנרמלת או שומרת תוצאות במטמון.",
            ],
            lessons: [
                "עבודה ישירה עם REST API ציבורי באמצעות `fetch` ו-`async`/`await` הפכה את זרימת הבקשה/תגובה לקלה להבנה, אך גם המחישה בבירור מדוע מפתחות API זקוקים לתיווך שרת בכל דבר שהוא מעבר להדגמה.",
                "אפילו ווידג'ט מזג אוויר פשוט נהנה מפרטי חוויית משתמש קטנים - כפתור מידע, אייקוני זריחה/שקיעה, פונט רשת מותאם אישית - שגורמים לתוצאה להרגיש מחושבת ולא סתם נתוני API גולמיים על המסך.",
            ],
        },
    },
};

export default weatherCast;
