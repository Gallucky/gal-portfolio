import type { SupportedLanguages } from "@/types/Languages";
import uiImplementationProjects from "./projects/uiImplementationProjects/uiImplementationProjects";
import markupProjects from "./projects/markupProjects/markupProjects";
import applicationProjects from "./projects/applicationProjects/applicationProjects";

/**
 * Defines the images/screenshots associated with a project,
 * including the URL and alt text for accessibility.
 *
 * Exported (not just used internally) so components that render a single project image -
 * e.g. `ProjectCard`'s preview thumbnail - can type their prop against this shape instead of
 * redeclaring an equivalent one-off type.
 *
 * @see {@link Project} for more information on how screenshots are used in the context of a project.
 */
export type Screenshot = {
    url: string;
    alt: string;
};

/**
 * Defines the structure of a project's content.
 * Contains the title and description of the project - in multiple languages,
 * as well as technical details such as the stack used, GitHub links,
 * download button, and live URL.
 */
export type ProjectContent = {
    title: string;
    shortDescription: string;

    /** General summary of what was built and its focus (one level more detail than `shortDescription`). */
    overview: string;

    /** Narrative of how the project was built/structured (approach, patterns) - distinct from `stack`, which lists the technologies used. */
    architecture: string;

    /** Challenges faced during the project. */
    challenges: string[];

    /** Lessons learned from the project. */
    lessons: string[];
};

/**
 * Defines the structure of a project, including its content in multiple languages.
 * Contains also the metadata of the project along side it's content.
 *
 * @see {@link ProjectContent} for more information on the content structure of a project.
 */
export type Project = {
    // Non-translatable fields - metadata, links, and flags that don't have separate en/he versions
    // (only `content` below varies by language).

    // TODO: not yet consumed anywhere in the UI - `featuredProjects` below is exported but unused, and no route reads `slug` yet either.
    /** Unique URL-friendly identifier for the project (e.g. "think-outside-the-box"), used to link to its page. */
    slug: string;

    /** Whether to highlight this project (e.g. on the home page). */
    featured: boolean;

    /** List of technologies used - distinct from `architecture`, which describes how they were used. */
    stack: string[];

    /** Link to the GitHub repository related to the frontend of the project */
    githubFrontend?: string;

    /** Link to the GitHub repository related to the backend of the project */
    githubBackend?: string;

    /** Link to the live website of the project */
    liveUrl?: string;

    /** Screenshots of the project to showcase and display */
    screenshots?: Screenshot[];

    // Translatable fields - all human-readable content/text that may differ by language
    content: {
        [key in SupportedLanguages]: ProjectContent;
    };
};

/**
 * A {@link Project} as it actually appears in {@link allProjects}: every project gets a `type`
 * discriminant (`"uiImplementation" | "markup" | "application"`) attached by its category's
 * aggregator file (e.g. `uiImplementationProjects.ts`), even though the category-agnostic
 * {@link Project} type itself doesn't declare that field. Components that need to group or
 * filter `allProjects` by category - e.g. {@link ProjectsGroupedByView} - should type their
 * `projects` prop against this instead of the bare `Project` type.
 */
export type CategorizedProject = Project & {
    type: "uiImplementation" | "markup" | "application";
};

/** All projects across every category: UI implementations, markup projects, and applications. */
export const allProjects: CategorizedProject[] = [
    ...uiImplementationProjects,
    ...markupProjects,
    ...applicationProjects,
];

/** Projects that are highlighted on the home page. */
export const featuredProjects = allProjects.filter((project) => project.featured);
