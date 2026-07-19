import type { ScriptsProjectMetadata } from "@data/projects/scriptsProjects/scriptsProjects";

/**
 * "system-check" - a Windows batch script that runs a sequence of built-in system integrity
 * and repair commands (`chkdsk`, `sfc /scannow`, `DISM ... /RestoreHealth`, `gpupdate`) with a
 * confirmation prompt, then restarts the machine.
 *
 * @see https://github.com/Gallucky/system-check for the source.
 */
const systemCheck: ScriptsProjectMetadata = {
    slug: "system-check",
    stack: ["Batch"],
    githubLinks: [{ label: "View Repository", url: "https://github.com/Gallucky/system-check" }],
    content: {
        en: {
            title: "system-check",
            shortDescription:
                "A Windows batch script that chains disk, system-file, and component-store repair commands into one confirmed run.",
            overview:
                "`SystemCheck.bat` runs a fixed sequence of built-in Windows maintenance commands - `chkdsk /f` to check and fix disk errors, `sfc /scannow` to repair corrupted system files, `DISM /Online /Cleanup-Image /RestoreHealth` to repair the component store, and `gpupdate /force` plus `gpupdate /sync` to refresh Group Policy - asking for confirmation before it starts and restarting the machine once it finishes.",
            architecture:
                "A single batch file with no external dependencies: it must be run from an elevated Command Prompt or PowerShell window, prompts for confirmation, then executes the maintenance commands in sequence and triggers a restart on completion.",
            challenges: [
                "Several of the chained commands (`chkdsk /f`, `DISM ... /RestoreHealth`) require administrator privileges and can be disruptive if run unintentionally, so the script requires an elevated shell and a confirmation prompt before doing anything.",
                "`chkdsk /f` on the system drive typically can't run while Windows is live, so the script's final restart is what actually lets the disk check complete on next boot rather than being a cosmetic step.",
            ],
            lessons: [
                "Chaining well-known Windows repair tools into one script turns a multi-step manual troubleshooting checklist into a single confirmed command, at the cost of losing the ability to skip an individual step.",
                "A repair script that ends in an unconditional restart needs a clear confirmation step up front - there's no undoing a `chkdsk`-triggered reboot once it's queued.",
            ],
        },
        he: {
            title: "system-check",
            shortDescription:
                "סקריפט batch ל-Windows ששרשרת פקודות תיקון לדיסק, לקבצי מערכת ולמאגר הרכיבים להרצה אחת מאושרת.",
            overview:
                "`SystemCheck.bat` מריץ רצף קבוע של פקודות תחזוקה מובנות ב-Windows - `chkdsk /f` לבדיקה ותיקון שגיאות דיסק, `sfc /scannow` לתיקון קבצי מערכת פגומים, `DISM /Online /Cleanup-Image /RestoreHealth` לתיקון מאגר הרכיבים, ו-`gpupdate /force` יחד עם `gpupdate /sync` לרענון מדיניות קבוצתית - תוך בקשת אישור לפני ההתחלה והפעלה מחדש של המחשב עם הסיום.",
            architecture:
                "קובץ batch יחיד ללא תלויות חיצוניות: יש להריץ אותו מחלון Command Prompt או PowerShell מוגבה, הוא מבקש אישור, ולאחר מכן מריץ את פקודות התחזוקה ברצף ומפעיל הפעלה מחדש עם הסיום.",
            challenges: [
                "כמה מהפקודות המשורשרות (`chkdsk /f`, `DISM ... /RestoreHealth`) דורשות הרשאות מנהל ועלולות להיות משבשות אם מורצות בטעות, כך שהסקריפט דורש מעטפת מוגבהת ואישור מפורש לפני כל פעולה.",
                "`chkdsk /f` על כונן המערכת בדרך כלל לא יכול לרוץ בזמן ש-Windows פעיל, כך שההפעלה מחדש בסוף הסקריפט היא בעצם מה שמאפשר לבדיקת הדיסק להשלים באתחול הבא, ולא רק שלב קוסמטי.",
            ],
            lessons: [
                "שרשור כלי תיקון מוכרים של Windows לסקריפט אחד הופך רשימת פתרון תקלות ידנית מרובת שלבים לפקודה אחת מאושרת, במחיר של איבוד היכולת לדלג על שלב בודד.",
                "סקריפט תיקון שמסתיים בהפעלה מחדש ללא תנאי זקוק לשלב אישור ברור מראש - אין דרך לבטל אתחול שהופעל על ידי `chkdsk` ברגע שהוא תוזמן.",
            ],
        },
    },
};

export default systemCheck;
