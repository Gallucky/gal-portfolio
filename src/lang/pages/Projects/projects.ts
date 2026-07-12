import type { Translations } from "@/types/Languages";

/**
 * The shape of the Projects page's translated content: the header copy, the search input's
 * accessible labels, the view-toggle's per-view labels, the sort dropdown's option labels, and
 * the empty-state copy shown when a search matches nothing.
 */
export type ProjectsPageContent = {
    subtitle: string;
    title: string;
    description: string;

    search: {
        /** Accessible label for the search input (no visible `<label>` - the icon + placeholder
         * already communicate its purpose visually). */
        label: string;
        placeholder: string;
        /** Accessible label for the "clear search" button that appears once there's a query. */
        clearLabel: string;
    };

    viewToggle: {
        /** Accessible label for the toggle button group as a whole. */
        groupLabel: string;
        groupedBy: string;
        grid: string;
        list: string;
    };

    sort: {
        /** Accessible label for the sort `<select>`. */
        label: string;
        options: {
            featuredFirst: string;
            nameAsc: string;
            nameDesc: string;
        };
    };

    noResults: {
        title: string;
        message: string;
    };
};

/**
 * Translated content for the {@link ProjectsPage} - the full projects listing page (reachable
 * at `/projects`).
 *
 * @see {@link ProjectsPageContent} for the shape of each language's content.
 */
export const projectsPageLang: Translations<ProjectsPageContent> = {
    en: {
        subtitle: "Portfolio",
        title: "All Projects",
        description:
            "Everything I've built, from UI implementations and markup exercises to full applications. Search, sort, or switch views to browse.",
        search: {
            label: "Search projects",
            placeholder: "Search by name, description, or technology…",
            clearLabel: "Clear search",
        },
        viewToggle: {
            groupLabel: "Change project view",
            groupedBy: "Group by category",
            grid: "Grid view",
            list: "List view",
        },
        sort: {
            label: "Sort projects",
            options: {
                featuredFirst: "Featured first",
                nameAsc: "Name (A–Z)",
                nameDesc: "Name (Z–A)",
            },
        },
        noResults: {
            title: "No projects found",
            message: "Try a different search term or clear the search to see everything.",
        },
    },
    he: {
        subtitle: "תיק עבודות",
        title: "כל הפרויקטים",
        description:
            "כל מה שבניתי - ממימושי ממשק ותרגילי מארקאפ ועד אפליקציות מלאות. חפשו, מיינו או החליפו תצוגה כדי לעיין.",
        search: {
            label: "חיפוש פרויקטים",
            placeholder: "חיפוש לפי שם, תיאור או טכנולוגיה…",
            clearLabel: "ניקוי חיפוש",
        },
        viewToggle: {
            groupLabel: "החלפת תצוגת פרויקטים",
            groupedBy: "קיבוץ לפי קטגוריה",
            grid: "תצוגת רשת",
            list: "תצוגת רשימה",
        },
        sort: {
            label: "מיון פרויקטים",
            options: {
                featuredFirst: "נבחרים תחילה",
                nameAsc: "שם (א-ת)",
                nameDesc: "שם (ת-א)",
            },
        },
        noResults: {
            title: "לא נמצאו פרויקטים",
            message: "נסו מונח חיפוש אחר או נקו את החיפוש כדי לראות הכול.",
        },
    },
};
