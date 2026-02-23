import type { SupportedLanguages } from "@/types/Languages";

type Screenshot = {
    url: string;
    alt: string;
};

type ProjectContent = {
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

type UIImplementationProject = Omit<Project, "featured"> & {
    featured: false; // All UI implementations are not featured
    content: {
        [key in SupportedLanguages]: Omit<ProjectContent, "lessons"> & {
            lessons: string[]; // UI implementations do not have lessons learned
        };
    };
};

type MarkupProject = Omit<Project, "featured"> & {
    featured: false; // All markup projects are not featured
};

export const uiImplementations: UIImplementationProject[] = [
    {
        slug: "leading-you-forward",
        stack: ["HTML", "CSS"],
        featured: false,
        content: {
            en: {
                title: "Leading You Forward",
                shortDescription: "HTML & CSS implementation of a Figma UI design.",
                overview:
                    "Built a pixel-accurate responsive layout from a provided design spec. Focus was on CSS Grid, flexbox, and mobile-first implementation.",
                architecture:
                    "Static HTML/CSS. No framework. Structured with BEM naming convention.",
                challenges: [
                    "Achieving consistent cross-browser rendering and matching the design at all breakpoints.",
                ],
                lessons: [],
            },
            he: {
                title: "Leading You Forward",
                shortDescription: "מימוש HTML & CSS של עיצוב Figma.",
                overview:
                    "בניית פריסה רספונסיבית ומדויקת לפי עיצוב קיים תוך שימוש ב-CSS Grid ו-Flexbox.",
                architecture: "HTML/CSS סטטי ללא פריימוורק, שימוש במוסכמת BEM.",
                challenges: ["דיוק מול העיצוב בכל נקודות השבירה."],
                lessons: [],
            },
        },
    },
    {
        slug: "here-and-now",
        stack: ["HTML", "CSS"],
        featured: false,
        content: {
            en: {
                title: "Here & Now",
                shortDescription: "HTML & CSS implementation of a Figma UI design.",
                overview: "A UI implementation project focusing on clean markup and styling.",
                architecture:
                    "Static HTML/CSS. No framework. Structured with BEM naming convention.",
                challenges: [
                    "Achieving consistent cross-browser rendering and matching the design at all breakpoints.",
                ],
                lessons: [],
            },
            he: {
                title: "Here & Now",
                shortDescription: "מימוש HTML & CSS של עיצוב Figma.",
                overview: "פרויקט מימוש ממשק משתמש בדגש על קוד נקי ועיצוב מדויק.",
                architecture: "HTML/CSS סטטי ללא פריימוורק, שימוש במוסכמת BEM.",
                challenges: ["דיוק מול העיצוב בכל נקודות השבירה."],
                lessons: [],
            },
        },
    },
];

export const markupProjects: MarkupProject[] = [];

export const applicationProjects: Project[] = [];

export const allProjects = [...uiImplementations, ...markupProjects, ...applicationProjects];
export const featuredProjects = allProjects.filter((project) => project.featured);
