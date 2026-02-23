import type { UIImplementationProject } from "../uiImplementationProjects";

const hereAndNow: UIImplementationProject = {
    slug: "here-and-now",
    stack: ["HTML", "CSS"],
    featured: false,
    content: {
        en: {
            title: "Here & Now",
            shortDescription: "HTML & CSS implementation of a Figma UI design.",
            overview: "A UI implementation project focusing on clean markup and styling.",
            architecture:
                "Static HTML/CSS. No framework. Structured with semantic HTML and organized CSS for maintainability.",
            challenges: [
                "Achieving consistent cross-browser rendering and matching the design at all breakpoints.",
            ],
            lessons: [],
        },
        he: {
            title: "Here & Now",
            shortDescription: "מימוש HTML & CSS של עיצוב Figma.",
            overview: "פרויקט מימוש ממשק משתמש בדגש על קוד נקי ועיצוב מדויק.",
            architecture: "HTML/CSS סטטי ללא framework, שימוש ב-HTML סמנטי ו-CSS מאורגן לתחזוקה.",
            challenges: ["דיוק מול העיצוב בכל נקודות השבירה."],
            lessons: [],
        },
    },
};

export default hereAndNow;
