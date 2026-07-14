import type { Translations } from "@/types/Languages";

/**
 * The shape of the Footer's translated content: the landmark aria-label, the short
 * tagline under the brand mark, the quick-links/connect column headings and link
 * labels (paths themselves are structural and stay hardcoded in the component), the
 * accessible names for each social icon, and the bottom-bar copyright/credit copy.
 */
export type FooterContent = {
    ariaLabel: string;
    tagline: string;
    quickLinksTitle: string;
    connectTitle: string;
    links: {
        home: string;
        projects: string;
        about: string;
        contact: string;
    };
    social: {
        github: string;
        linkedin: string;
        email: string;
    };
    rightsReserved: string;
    builtWith: string;
};

/**
 * Translated content for the {@link Footer} component.
 *
 * @see {@link FooterContent} for the shape of each language's content.
 */
export const footerLang: Translations<FooterContent> = {
    en: {
        ariaLabel: "Footer",
        tagline: "Full-stack developer crafting clean, purposeful web experiences.",
        quickLinksTitle: "Quick Links",
        connectTitle: "Connect",
        links: {
            home: "Home",
            projects: "Projects",
            about: "About",
            contact: "Contact",
        },
        social: {
            github: "Visit my GitHub profile",
            linkedin: "Visit my LinkedIn profile",
            email: "Send me an email",
        },
        rightsReserved: "All rights reserved.",
        builtWith: "Built with React, TypeScript & Tailwind CSS",
    },
    he: {
        ariaLabel: "פוטר",
        tagline: "מפתח Full-Stack שיוצר חוויות משתמש נקיות ומדויקות.",
        quickLinksTitle: "קישורים מהירים",
        connectTitle: "יצירת קשר",
        links: {
            home: "בית",
            projects: "פרויקטים",
            about: "אודות",
            contact: "צור קשר",
        },
        social: {
            github: "בקרו בפרופיל ה-GitHub שלי",
            linkedin: "בקרו בפרופיל ה-LinkedIn שלי",
            email: "שלחו לי אימייל",
        },
        rightsReserved: "כל הזכויות שמורות.",
        builtWith: "נבנה עם React, TypeScript ו- Tailwind CSS",
    },
};
