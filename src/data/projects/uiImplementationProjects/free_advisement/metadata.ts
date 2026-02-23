import type { UIImplementationProject } from "../uiImplementationProjects";

const freeAdvisement: UIImplementationProject = {
    slug: "free-advisement",
    stack: ["HTML", "CSS", "SASS"],
    featured: false,
    content: {
        en: {
            title: "Free Advisement",
            shortDescription: "HTML & CSS implementation of a Figma UI design using SASS.",
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
            title: "ייעוץ חינם",
            shortDescription: "מימוש HTML & CSS של עיצוב Figma תוך שימוש ב-SASS.",
            overview:
                "בניית פריסה רספונסיבית ומדויקת לפי עיצוב קיים תוך שימוש ב-CSS Grid ו-Flexbox.",
            architecture: "HTML/CSS סטטי ללא framework, שימוש ב-HTML סמנטי ו-CSS מאורגן לתחזוקה.",
            challenges: ["דיוק מול העיצוב בכל נקודות השבירה."],
            lessons: [],
        },
    },
};

export default freeAdvisement;
