import type { Translations } from "@/types/Languages";

/**
 * The developer's rating of a programming language in terms of difficulty and experience.
 * Difficulty and experience are rated on a scale from 0 to 5, with increments of 0.5.
 */
export type ProgrammingLanguageRating = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

/**
 * Defines the structure of a programming language entry,
 * including its ID, name, description, difficulty rating,
 * and experience rating.
 *
 * @see {@link ProgrammingLanguageRating} for the rating scale used for difficulty and experience.
 */
export type ProgrammingLanguage = {
    id: string;
    name: string;
    description: string;
    difficulty: ProgrammingLanguageRating;
    experience: ProgrammingLanguageRating;
};

/**
 * Defines the structure of the content for the "Programming Languages" section,
 * including the title and a list of programming languages with their respective ratings.
 *
 * Each area of the content is translated into multiple languages
 * (e.g., English and Hebrew) using the {@link Translations} type.
 *
 * @see {@link ProgrammingLanguage} for the structure of each programming language entry.
 */
export type ProgrammingLanguageData = {
    title: string;
    programmingLanguages: ProgrammingLanguage[];
};

/**
 * Defines the content of the "Programming Languages" section, including the
 * title and a list of programming languages with the developer's difficulty and experience ratings.
 * The content is provided in multiple languages (English and Hebrew).
 *
 * @see {@link useLanguage} for more information on translations in the applications.
 */
export const languagesSectionLang: Translations<ProgrammingLanguageData> = {
    en: {
        title: "Programming Languages: Difficulty & Experience",
        programmingLanguages: [
            {
                id: "html",
                name: "HTML - Hypertext Markup Language",
                description: "HTML is a tag based language that is used to structure a website.",
                difficulty: 1,
                experience: 5,
            },
            {
                id: "css",
                name: "CSS - Cascading Style Sheets",
                description:
                    "CSS is used to style and design websites, including layout, colors, spacing, and responsiveness.",
                difficulty: 2.5,
                experience: 3.5,
            },
            {
                id: "javascript",
                name: "JavaScript",
                description:
                    "JavaScript is a programming language used to add interactivity and dynamic behavior to websites and web applications.",
                difficulty: 3.5,
                experience: 4.5,
            },
            {
                id: "java",
                name: "Java",
                description:
                    "Java is a strongly typed, object-oriented programming language commonly used for enterprise applications and backend systems.",
                difficulty: 4,
                experience: 4,
            },
            {
                id: "python",
                name: "Python",
                description:
                    "Python is a high-level, readable programming language used for scripting, automation, backend development, and data-related tasks.",
                difficulty: 2.5,
                experience: 4,
            },
            {
                id: "powershell",
                name: "PowerShell",
                description:
                    "PowerShell is a task automation and configuration management framework built on .NET, mainly used for system administration and scripting.",
                difficulty: 3.5,
                experience: 4,
            },
            {
                id: "csharp",
                name: "CSharp (C# / CS)",
                description:
                    "C# is a modern object-oriented programming language developed by Microsoft, widely used for desktop apps, backend services, and game development.",
                difficulty: 3,
                experience: 4,
            },
            {
                id: "c++",
                name: "C Plus Plus (C++)",
                description:
                    "C++ is a powerful systems programming language that supports object-oriented and low-level memory management features.",
                difficulty: 3.5,
                experience: 3.5,
            },
            {
                id: "c",
                name: "C",
                description:
                    "C is a low-level procedural programming language that provides direct memory access and is widely used in system programming.",
                difficulty: 4.5,
                experience: 3,
            },
            {
                id: "batch",
                name: "Batch (CMD)",
                description:
                    "Batch scripting is used in Windows command line to automate tasks and execute sequences of system commands.",
                difficulty: 4.5,
                experience: 3.5,
            },
            {
                id: "assembly",
                name: "Assembly (ASM)",
                description:
                    "Assembly is a low-level programming language that provides direct interaction with CPU instructions and hardware.",
                difficulty: 5,
                experience: 1,
            },
        ],
    },
    he: {
        title: "שפות תכנות עם דירוג קושי וניסיון אישי",
        programmingLanguages: [
            {
                id: "html",
                name: "HTML - שפת סימון היפר-טקסט",
                description:
                    "שפה זו בנויה מתגים, אפשר לחשוב עליהם כמו על בלוקים, אלמנטים ו/או חלקים שאיתם משתמשים כדי ליצור מבנה של אתר אינטרנט.",
                difficulty: 1,
                experience: 5,
            },
            {
                id: "css",
                name: "CSS - גיליונות עיצוב מדורגים",
                description:
                    "CSS משמשת לעיצוב אתרי אינטרנט, כולל צבעים, פריסות, ריווח, אנימציות והתאמה למסכים שונים.",
                difficulty: 2.5,
                experience: 3.5,
            },
            {
                id: "javascript",
                name: "JavaScript",
                description:
                    "JavaScript היא שפת תכנות שמוסיפה אינטראקטיביות והתנהגות דינמית לאתרי אינטרנט ואפליקציות ווב.",
                difficulty: 3.5,
                experience: 4.5,
            },
            {
                id: "java",
                name: "Java",
                description:
                    "Java היא שפה מונחית עצמים עם טיפוסיות חזקה, נפוצה בפיתוח מערכות צד שרת ויישומים ארגוניים.",
                difficulty: 4,
                experience: 4,
            },
            {
                id: "python",
                name: "Python",
                description:
                    "Python היא שפה עילית ופשוטה לקריאה, נפוצה בסקריפטים, אוטומציה, פיתוח צד שרת ועבודה עם נתונים.",
                difficulty: 2.5,
                experience: 4,
            },
            {
                id: "powershell",
                name: "PowerShell",
                description:
                    "PowerShell היא סביבת סקריפטים ואוטומציה מבית מיקרוסופט, מבוססת .NET, ומשמשת בעיקר לניהול מערכות.",
                difficulty: 3.5,
                experience: 4,
            },
            {
                id: "csharp",
                name: "CSharp (C#)",
                description:
                    "C# היא שפת תכנות מודרנית מונחית עצמים מבית מיקרוסופט, נפוצה בפיתוח יישומי דסקטופ, שירותי צד שרת ומשחקים.",
                difficulty: 3,
                experience: 4,
            },
            {
                id: "c++",
                name: "C++",
                description:
                    "C++ היא שפה עוצמתית לפיתוח מערכות ותוכנות ביצועים גבוהים, עם שליטה בזיכרון ותמיכה ב-OOP.",
                difficulty: 3.5,
                experience: 3.5,
            },
            {
                id: "c",
                name: "C",
                description:
                    "C היא שפה פרוצדורלית ברמה נמוכה המאפשרת גישה ישירה לזיכרון, ונפוצה בפיתוח מערכות ותוכנות מערכת.",
                difficulty: 4.5,
                experience: 3,
            },
            {
                id: "batch",
                name: "Batch (CMD)",
                description:
                    "Batch היא שפת סקריפטים לשורת הפקודה ב-Windows, המשמשת לאוטומציה והרצת פקודות מערכת.",
                difficulty: 4.5,
                experience: 3.5,
            },
            {
                id: "assembly",
                name: "Assembly (ASM)",
                description:
                    "Assembly היא שפה ברמה נמוכה מאוד, המאפשרת עבודה ישירה מול פקודות המעבד והחומרה.",
                difficulty: 5,
                experience: 1,
            },
        ],
    },
};
