import type { Translations } from "@/types/Languages";
import type { ProjectViewType } from "@components/ui/Projects/ProjectView/ProjectView";

/**
 * The shape of the ProjectView's translated content: a label per {@link ProjectViewType}
 * (shown as the section heading) and the trailing "view all projects" call to action.
 *
 * `sectionTitles` is keyed by `ProjectViewType` (rather than being a single formatted string)
 * so every category gets an explicit, human-reviewed translation - relying on something like
 * `capitalizeWord` to derive a heading from the `type` prop would only capitalize the English
 * word (e.g. "uiImplementation" -> "Uiimplementation") and never produce real Hebrew text.
 */
export type ProjectViewContent = {
    sectionTitles: Record<ProjectViewType, string>;
    viewAllProjects: string;
};

/**
 * Translated content for the {@link ProjectView} component.
 *
 * @see {@link ProjectViewContent} for the shape of each language's content.
 */
export const projectViewLang: Translations<ProjectViewContent> = {
    en: {
        sectionTitles: {
            uiImplementation: "UI Implementations",
            markup: "Markup Projects",
            application: "Applications",
            featured: "Featured Projects",
        },
        viewAllProjects: "View All Projects",
    },
    he: {
        sectionTitles: {
            uiImplementation: "מימוש ממשקים",
            markup: "פרויקטי מארקאפ",
            application: "אפליקציות",
            featured: "פרויקטים נבחרים",
        },
        viewAllProjects: "צפייה בכל הפרויקטים",
    },
};
