import type { ScriptsProjectMetadata } from "../scriptsProjects";

/**
 * "temp-delete" - a Windows PowerShell utility that clears temporary files and folders from
 * selected system locations (Windows Temp, user Temp, Prefetch, WER, SoftwareDistribution
 * Download) through a small WinForms GUI.
 *
 * @see https://github.com/Gallucky/temp-delete for the source.
 */
const tempDelete: ScriptsProjectMetadata = {
    slug: "temp-delete",
    stack: ["PowerShell", "WinForms"],
    githubLinks: [{ label: "View Repository", url: "https://github.com/Gallucky/temp-delete" }],
    content: {
        en: {
            title: "temp-delete",
            shortDescription:
                "A PowerShell utility with a WinForms GUI that clears temporary files from selected Windows system locations.",
            overview:
                "`TempDelete.ps1` launches a simple WinForms GUI that lets you pick one or more common Windows temporary directories - Windows Temp, the current user's Temp folder, Prefetch, WER, and SoftwareDistribution Download - and removes their contents recursively, skipping locked files silently.",
            architecture:
                "A single PowerShell script that self-elevates to administrator, hides the console window while the GUI is active, and drives a WinForms checklist plus a progress dialog for the selected cleanup targets. There's no framework or build step - just `System.Windows.Forms` and `System.Drawing` driven directly from PowerShell.",
            challenges: [
                "Deleting from system-level temp folders requires administrator rights, so the script checks for and requests elevation before touching any of the target directories.",
                "Locked or in-use files (common in Windows Temp and Prefetch while the OS is running) needed to be skipped without surfacing errors, so cleanup fails silently per-file rather than aborting the whole run.",
            ],
            lessons: [
                "Hiding the console window while keeping a WinForms GUI visible makes a script feel like a small standalone tool rather than something obviously run from a terminal.",
                "A GUI checklist over hardcoded directory targets keeps the script safe by default (nothing is deleted until explicitly selected) while still allowing a one-click 'Choose All' for the common case.",
            ],
        },
        he: {
            title: "temp-delete",
            shortDescription:
                "כלי PowerShell עם ממשק WinForms שמנקה קבצים זמניים ממיקומי מערכת נבחרים ב-Windows.",
            overview:
                "`TempDelete.ps1` פותח ממשק WinForms פשוט שמאפשר לבחור אחת או יותר מתיקיות הזמניות הנפוצות של Windows - Windows Temp, תיקיית ה-Temp של המשתמש הנוכחי, Prefetch, WER, ו-SoftwareDistribution Download - ומוחק את תוכנן באופן רקורסיבי, תוך דילוג שקט על קבצים נעולים.",
            architecture:
                "סקריפט PowerShell יחיד שמעלה את עצמו להרשאות מנהל, מסתיר את חלון הקונסולה בזמן שהממשק הגרפי פעיל, ומפעיל רשימת סימון WinForms יחד עם דיאלוג התקדמות עבור יעדי הניקוי הנבחרים. אין כאן framework או שלב בנייה - רק `System.Windows.Forms` ו-`System.Drawing` מופעלים ישירות מ-PowerShell.",
            challenges: [
                "מחיקה מתיקיות זמניות ברמת המערכת דורשת הרשאות מנהל, כך שהסקריפט בודק ומבקש הרשאות מוגברות לפני נגיעה בכל אחת מהתיקיות היעד.",
                "קבצים נעולים או בשימוש (נפוצים ב-Windows Temp וב-Prefetch בזמן שהמערכת פועלת) נדרשו לדילוג שקט ללא הצגת שגיאות, כך שהניקוי נכשל בשקט לכל קובץ בנפרד במקום לבטל את כל הריצה.",
            ],
            lessons: [
                "הסתרת חלון הקונסולה תוך שמירה על ממשק WinForms גלוי גורמת לסקריפט להרגיש ככלי עצמאי קטן ולא כמשהו שרץ מטרמינל באופן גלוי.",
                "רשימת סימון גרפית על פני יעדי תיקיות קבועים בקוד שומרת על הסקריפט בטוח כברירת מחדל (שום דבר לא נמחק עד לבחירה מפורשת) תוך אפשרות ל'בחר הכול' בלחיצה אחת למקרה הנפוץ.",
            ],
        },
    },
};

export default tempDelete;
