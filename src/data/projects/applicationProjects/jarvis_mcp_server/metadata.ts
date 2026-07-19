import previewImage from "./project_preview.png";
import type { ApplicationProjectMetadata } from "@data/projects/applicationProjects/applicationProjects";

/**
 * "jarvis-mcp-server" - a personal MCP (Model Context Protocol) server exposing an Obsidian
 * vault, a SQLite database, and an allowlisted filesystem as tools any Claude client can call,
 * self-hosted and reached over Tailscale Funnel with OAuth 2.1.
 *
 * Filed under "application" (rather than a dedicated MCP category) since it's currently the
 * only MCP project in the portfolio - a backend/server project at heart, just speaking MCP
 * instead of REST. No live URL: it's a personal/self-hosted server, not something with a public
 * demo to link to.
 *
 * @see https://github.com/Gallucky/jarvis-mcp-server for the source.
 */
const jarvisMcpServer: ApplicationProjectMetadata = {
    slug: "jarvis-mcp-server",
    featured: true,
    stack: [
        "TypeScript",
        "Node.js",
        "MCP",
        "OAuth 2.1",
        "SQLite",
        "Tailscale",
        "Zod",
        "Obsidian REST API",
    ],
    githubLinks: [
        { label: "View Repository", url: "https://github.com/Gallucky/jarvis-mcp-server" },
    ],
    screenshots: [
        {
            url: previewImage,
            alt: "Jarvis MCP Server Project Preview Image",
        },
    ],
    content: {
        en: {
            title: "jarvis-mcp-server",
            shortDescription:
                "A personal MCP server that exposes an Obsidian vault, a SQLite database, and an allowlisted filesystem as tools any Claude client can call, over Tailscale with OAuth 2.1.",
            overview:
                "Runs on a home server and speaks the Model Context Protocol, so Claude on any device - mobile, web, desktop - can read/write notes in an Obsidian vault, query a local SQLite database, and manage files, all authenticated via OAuth 2.1 tunneled through Tailscale Funnel. Tools are grouped by domain: vault reads/writes/search, a Jarvis-specific 'save a conversation distillation' workflow, SQLite query/execute/schema inspection, and filesystem read/write/move/delete.",
            architecture:
                "A TypeScript/Node.js MCP server structured by concern: `schemas/` holds Zod input schemas as an entrance guard for every tool, `services/` wraps the external workers (an ObsidianClient over the Local REST API plugin, the SQLite connection), `tools/` registers each domain's tools against the MCP server instance, and `utils/` holds shared helpers like path-safety checks. All filesystem operations are restricted to an explicit `FS_ALLOWED_PATHS` allowlist checked before any I/O runs, and the whole server sits behind OAuth 2.1 exposed only via Tailscale Funnel rather than the open internet.",
            challenges: [
                "Filesystem tools are inherently dangerous if unconstrained, so every `fs_*` tool routes through a path-safety check against an explicit allowlist before touching disk, and destructive operations (`fs_delete_file`) require an explicit `confirm: true` rather than running on a bare call.",
                "Exposing a personal server to Claude clients on any device meant it couldn't just sit on localhost - OAuth 2.1 plus a Tailscale Funnel tunnel was the chosen way to get real authentication and remote reachability without opening ports on the public internet.",
            ],
            lessons: [
                "Designing tools around Zod schemas up front made every tool's contract explicit and self-validating, which paid off immediately once multiple tool domains (vault, SQLite, filesystem) needed to share the same request-handling pattern.",
                "Structuring the server by domain (`schemas/services/tools/utils`) rather than by MCP mechanics made adding a new tool a matter of touching three predictable files instead of threading logic through one growing `index.ts`.",
            ],
        },
        he: {
            title: "jarvis-mcp-server",
            shortDescription:
                "שרת MCP אישי שחושף כספת Obsidian, בסיס נתוני SQLite ומערכת קבצים מוגבלת ככלים שכל לקוח Claude יכול לקרוא להם, דרך Tailscale עם OAuth 2.1.",
            overview:
                "רץ על שרת ביתי ומדבר בפרוטוקול ה-Model Context Protocol, כך ש-Claude בכל מכשיר - נייד, ווב, דסקטופ - יכול לקרוא/לכתוב פתקים בכספת Obsidian, לשאול בסיס נתוני SQLite מקומי ולנהל קבצים, הכול מאומת דרך OAuth 2.1 בתעלת Tailscale Funnel. הכלים מקובצים לפי תחום: קריאה/כתיבה/חיפוש בכספת, תהליך ייעודי של Jarvis ל'שמירת תמצית שיחה', שאילתות/הרצות/בדיקת סכימה ב-SQLite, וקריאה/כתיבה/העברה/מחיקה של קבצים.",
            architecture:
                "שרת MCP ב-TypeScript/Node.js מובנה לפי תחום: `schemas/` מכיל סכימות קלט של Zod כשומר כניסה לכל כלי, `services/` עוטף את העובדים החיצוניים (ObsidianClient מעל תוסף ה-Local REST API, חיבור ה-SQLite), `tools/` רושם את כלי כל תחום מול מופע שרת ה-MCP, ו-`utils/` מכיל עזרים משותפים כמו בדיקות בטיחות נתיב. כל פעולות מערכת הקבצים מוגבלות לרשימת היתרים מפורשת `FS_ALLOWED_PATHS` שנבדקת לפני כל פעולת קלט/פלט, וכל השרת יושב מאחורי OAuth 2.1 וחשוף רק דרך Tailscale Funnel ולא דרך האינטרנט הפתוח.",
            challenges: [
                "כלי מערכת קבצים מסוכנים מטבעם ללא הגבלה, כך שכל כלי `fs_*` עובר דרך בדיקת בטיחות נתיב מול רשימת היתרים מפורשת לפני נגיעה בדיסק, ופעולות הרסניות (`fs_delete_file`) דורשות `confirm: true` מפורש במקום לרוץ על קריאה גולמית.",
                "חשיפת שרת אישי ללקוחות Claude בכל מכשיר משמעה שהוא לא יכול פשוט לשבת על localhost - OAuth 2.1 יחד עם תעלת Tailscale Funnel נבחרו כדרך לקבל אימות אמיתי ונגישות מרחוק בלי לפתוח פורטים באינטרנט הציבורי.",
            ],
            lessons: [
                "תכנון כלים סביב סכימות Zod מראש הפך את החוזה של כל כלי למפורש ומאמת את עצמו, מה שהשתלם מיד ברגע שכמה תחומי כלים (כספת, SQLite, מערכת קבצים) נדרשו לשתף את אותו דפוס טיפול בבקשות.",
                "בניית השרת לפי תחום (`schemas/services/tools/utils`) במקום לפי מכניקת MCP הפכה הוספת כלי חדש לעניין של נגיעה בשלושה קבצים צפויים במקום לשזור לוגיקה בתוך `index.ts` אחד שהולך וגדל.",
            ],
        },
    },
};

export default jarvisMcpServer;
