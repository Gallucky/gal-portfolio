import type { Translations } from "@/types/Languages";

/**
 * The shape of the Navbar's translated content: the nav link labels
 * (paths themselves are structural and stay hardcoded in the component)
 * and the aria-labels for the mobile hamburger menu's open/close controls.
 */
export type NavbarContent = {
    links: {
        home: string;
        projects: string;
        about: string;
        contact: string;
    };
    toggleMenu: string;
    closeMenu: string;
};

/**
 * Translated content for the {@link Navbar} component.
 *
 * @see {@link NavbarContent} for the shape of each language's content.
 */
export const navbarLang: Translations<NavbarContent> = {
    en: {
        links: {
            home: "Home",
            projects: "Projects",
            about: "About",
            contact: "Contact",
        },
        toggleMenu: "Toggle menu",
        closeMenu: "Close menu",
    },
    he: {
        links: {
            home: "בית",
            projects: "פרויקטים",
            about: "אודות",
            contact: "צור קשר",
        },
        toggleMenu: "פתח תפריט",
        closeMenu: "סגור תפריט",
    },
};
