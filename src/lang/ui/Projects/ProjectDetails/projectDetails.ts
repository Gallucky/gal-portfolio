import type { Translations } from "@/types/Languages";

/**
 * The shape of the ProjectDetails page's translated content: the "back to projects" link,
 * the headings for each content section ({@link ProjectContent}'s `overview`, `architecture`,
 * `challenges`, `lessons`), the labels for a project's outbound links, and the accessible
 * label used for the placeholder tile shown when a project has no screenshots yet.
 *
 * Deliberately doesn't redeclare the category/featured badge labels - those are already
 * translated in {@link ProjectCardContent} (`typeBadge`/`featuredBadge`) and reused as-is here
 * so a category reads with the exact same label everywhere it appears across the site.
 */
export type ProjectDetailsContent = {
    backToProjects: string;
    sectionTitles: {
        overview: string;
        architecture: string;
        challenges: string;
        lessons: string;
    };
    links: {
        githubFrontend: string;
        githubBackend: string;
        liveUrl: string;
    };
    /** Accessible label for the gradient placeholder tile shown in place of a screenshot
     * gallery when a project has no `screenshots` yet. */
    noScreenshots: string;
};

/**
 * Translated content for the {@link ProjectDetails} component - the project details page
 * reachable at `/projects/:slug`.
 *
 * @see {@link ProjectDetailsContent} for the shape of each language's content.
 */
export const projectDetailsLang: Translations<ProjectDetailsContent> = {
    en: {
        backToProjects: "Back to Projects",
        sectionTitles: {
            overview: "Overview",
            architecture: "Architecture",
            challenges: "Challenges",
            lessons: "Lessons Learned",
        },
        links: {
            githubFrontend: "Frontend Repo",
            githubBackend: "Backend Repo",
            liveUrl: "Live Site",
        },
        noScreenshots: "No screenshots available yet for this project",
    },
    he: {
        backToProjects: "חזרה לפרויקטים",
        sectionTitles: {
            overview: "סקירה כללית",
            architecture: "ארכיטקטורה",
            challenges: "אתגרים",
            lessons: "לקחים שנלמדו",
        },
        links: {
            githubFrontend: "מאגר Frontend",
            githubBackend: "מאגר Backend",
            liveUrl: "אתר חי",
        },
        noScreenshots: "עדיין אין צילומי מסך זמינים לפרויקט זה",
    },
};
