import type { UIImplementationProject } from "../uiImplementationProjects";

const discoverTheWorld: UIImplementationProject = {
    slug: "discover-the-world",
    stack: ["HTML", "CSS"],
    featured: false,
    content: {
        en: {
            title: "Discover the World",
            shortDescription: "HTML & CSS implementation of a Figma UI design.",
            overview:
                "Built a pixel-accurate responsive layout from a provided design spec. Focus was on CSS Grid, flexbox, and mobile-first implementation.",
            architecture:
                "Static HTML/CSS. No framework. Structured with semantic HTML and organized CSS for maintainability.",
            challenges: [
                "Achieving consistent cross-browser rendering and matching the design at all breakpoints.",
            ],
            lessons: [],
        },
        he: {
            title: "גלו את העולם",
            shortDescription: "מימוש HTML & CSS של עיצוב Figma.",
            overview:
                "בניית פריסה רספונסיבית ומדויקת לפי עיצוב קיים תוך שימוש ב-CSS Grid ו-Flexbox.",
            architecture: "HTML/CSS סטטי ללא framework, שימוש ב-HTML סמנטי ו-CSS מאורגן לתחזוקה.",
            challenges: ["דיוק מול העיצוב בכל נקודות השבירה."],
            lessons: [],
        },
    },
};

export default discoverTheWorld;
