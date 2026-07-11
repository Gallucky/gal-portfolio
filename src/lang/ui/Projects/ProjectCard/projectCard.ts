import type { Translations } from "@/types/Languages";

/**
 * The shape of the ProjectCard's translated content: the fallback shown when a project has
 * no `shortDescription`, the trailing "view project" call to action, and the accessible label
 * used to describe the stack badge overflow (the "+N" pill for stacks of 4+ technologies).
 */
export type ProjectCardContent = {
    noDescription: string;
    viewProject: string;
    /** `{count}` is replaced with the number of hidden technologies - see {@link ProjectCard}. */
    moreTechnologies: string;
};

/**
 * Translated content for the {@link ProjectCard} component.
 *
 * @see {@link ProjectCardContent} for the shape of each language's content.
 */
export const projectCardLang: Translations<ProjectCardContent> = {
    en: {
        noDescription: "There is no description",
        viewProject: "View Project",
        moreTechnologies: "and {count} more technologies",
    },
    he: {
        noDescription: "אין תיאור זמין",
        viewProject: "צפייה בפרויקט",
        moreTechnologies: "ועוד {count} טכנולוגיות",
    },
};
