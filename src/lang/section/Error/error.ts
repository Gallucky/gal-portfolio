import type { Translations } from "@/types/Languages";

/** Copy for {@link ErrorSection} — the 404 "not found" page. */
export type ErrorContent = {
    title: string;
    description: string;
    buttonLabel: string;
};

export const errorSectionLang: Translations<ErrorContent> = {
    en: {
        title: "This page wandered off and didn't leave a forwarding address.",
        description:
            "The page you're looking for doesn't exist or may have moved. Let's get you back on track.",
        buttonLabel: "Go Back Home",
    },
    he: {
        title: "הדף הזה יצא לדרך ולא השאיר כתובת.",
        description: "הדף שחיפשת לא קיים או שהוזז. בוא נחזיר אותך למסלול.",
        buttonLabel: "חזרה לדף הבית",
    },
};
