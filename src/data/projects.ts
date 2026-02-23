import type { SupportedLanguages } from "@/types/Languages";
import uiImplementationProjects from "./projects/uiImplementationProjects/uiImplementationProjects";
import markupProjects from "./projects/markupProjects/markupProjects";
import applicationProjects from "./projects/applicationProjects/applicationProjects";

type Screenshot = {
    url: string;
    alt: string;
};

export type ProjectContent = {
    title: string;
    shortDescription: string;
    overview: string;
    architecture: string;
    challenges: string[];
    lessons: string[];
};

export type Project = {
    // Non-translatable fields - same across all languages
    slug: string;
    featured: boolean;
    stack: string[];
    githubFrontend?: string;
    githubBackend?: string;
    liveUrl?: string;
    screenshots?: Screenshot[];

    // Translatable fields - all human-readable content/text that may differ by language
    content: {
        [key in SupportedLanguages]: ProjectContent;
    };
};

export const allProjects = [...uiImplementationProjects, ...markupProjects, ...applicationProjects];
export const featuredProjects = allProjects.filter((project) => project.featured);
