import type { ApplicationProjectMetadata } from "../applicationProjects";

const quickCartStorefront: ApplicationProjectMetadata = {
    slug: "quickcart-storefront",
    featured: false,
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux", "REST API"],
    content: {
        en: {
            title: "QuickCart – E-Commerce Storefront",
            shortDescription:
                "A full-stack storefront with product browsing, cart management, and a checkout flow backed by a REST API.",
            overview:
                "A MERN e-commerce demo covering the full shopping flow: browsing a product catalog, filtering by category, managing a persistent cart, and completing a mock checkout. The backend exposes a REST API for products, carts, and orders; the frontend manages cart state globally with Redux so it survives navigation between pages.",
            architecture:
                "React frontend with Redux for global cart/session state, talking to an Express + MongoDB REST API. Product listings are paginated and filterable server-side rather than loading everything up front. Cart state is synced to the backend on every change so it persists across devices once a user is logged in, and falls back to local state for guest sessions.",
            challenges: [
                "Keeping cart state in sync between Redux (client) and MongoDB (server) without race conditions when a user rapidly adds/removes items.",
                "Designing pagination and filtering that stays fast as the product catalog grows, instead of filtering an already-fetched full list client-side.",
                "Handling the guest-cart-to-logged-in-cart merge cleanly when a user signs in partway through shopping.",
            ],
            lessons: [
                "Server-side filtering/pagination is worth the extra API design work almost immediately - client-side filtering stopped scaling very quickly.",
                "Redux's real value here wasn't the store itself but having one predictable place for cart state that many unrelated components needed to read.",
                "Merging guest and authenticated state is a surprisingly common real-world problem that's easy to get wrong without thinking through it upfront.",
            ],
        },
        he: {
            title: "QuickCart – חנות מקוונת",
            shortDescription:
                "חנות מקוונת מלאה עם עיון במוצרים, ניהול עגלת קניות ותהליך תשלום מגובה ב-REST API.",
            overview:
                "דמו של חנות מקוונת ב-MERN שמכסה את כל תהליך הקנייה: עיון בקטלוג מוצרים, סינון לפי קטגוריה, ניהול עגלת קניות מתמשכת והשלמת תהליך תשלום מדומה. ה-backend חושף REST API למוצרים, עגלות והזמנות; ה-frontend מנהל את מצב העגלה גלובלית באמצעות Redux כך שהיא נשמרת גם בין דפים.",
            architecture:
                "Frontend ב-React עם Redux למצב עגלה/סשן גלובלי, מתקשר עם REST API שנבנה ב-Express ו-MongoDB. רשימות המוצרים מחולקות לעמודים ומסוננות בצד השרת במקום טעינת הכול מראש. מצב העגלה מסונכרן לשרת בכל שינוי כך שהוא נשמר בין מכשירים למשתמש מחובר, ונופל חזרה למצב מקומי עבור משתמשי אורח.",
            challenges: [
                "שמירה על סנכרון מצב העגלה בין Redux (לקוח) ל-MongoDB (שרת) בלי race conditions כשמשתמש מוסיף/מסיר פריטים במהירות.",
                "תכנון עימוד וסינון שנשארים מהירים גם כשקטלוג המוצרים גדל, במקום סינון רשימה מלאה שכבר נשלפה בצד הלקוח.",
                "טיפול נקי במיזוג עגלת אורח לעגלת משתמש מחובר כאשר משתמש מתחבר באמצע הקנייה.",
            ],
            lessons: [
                "סינון ועימוד בצד שרת משתלמים כמעט מיד למרות העבודה הנוספת בתכנון ה-API - סינון בצד לקוח הפסיק להתרחב מהר מאוד.",
                "הערך האמיתי של Redux כאן לא היה ה-store עצמו אלא מקום אחד וצפוי למצב העגלה שהרבה רכיבים לא קשורים היו צריכים לקרוא ממנו.",
                "מיזוג מצב אורח ומצב מחובר היא בעיה נפוצה במציאות שקל לפתור לא נכון בלי לחשוב עליה מראש.",
            ],
        },
    },
};

export default quickCartStorefront;
