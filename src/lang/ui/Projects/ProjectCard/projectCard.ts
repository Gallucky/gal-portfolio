import type { CategorizedProject } from "@/data/projects";
import type { Translations } from "@/types/Languages";

/**
 * The shape of the ProjectCard's translated content: the fallback shown when a project has
 * no `shortDescription`, the trailing "view project" call to action, the accessible label
 * used to describe the stack badge overflow (the "+N" pill for stacks of 4+ technologies),
 * the short label shown on the diagonal category ribbon (one per {@link CategorizedProject}
 * `type` - kept separate from `ProjectView`'s longer `sectionTitles` since the ribbon has far
 * less room), and the accessible label for the icon-only featured star badge.
 */
export type ProjectCardContent = {
    noDescription: string;
    viewProject: string;
    /** `{count}` is replaced with the number of hidden technologies - see {@link ProjectCard}. */
    moreTechnologies: string;
    typeBadge: Record<CategorizedProject["type"], string>;
    featuredBadge: string;
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
        typeBadge: {
            uiImplementation: "UI",
            markup: "Markup",
            application: "App",
            scripts: "Script",
        },
        featuredBadge: "Featured project",
    },
    he: {
        noDescription: "אין תיאור זמין",
        viewProject: "צפייה בפרויקט",
        moreTechnologies: "ועוד {count} טכנולוגיות",
        typeBadge: {
            uiImplementation: "ממשק",
            markup: "Markup",
            application: "אפליקציה",
            scripts: "סקריפט",
        },
        featuredBadge: "פרויקט נבחר",
    },
};
