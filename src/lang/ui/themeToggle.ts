import type { Translations } from "@/types/Languages";

/**
 * The shape of the {@link ThemeToggle} component's translated content:
 * the accessible label announced for the theme-switch button, per destination theme.
 */
export type ThemeToggleContent = {
    switchToLight: string;
    switchToDark: string;
};

/**
 * Translated content for the {@link ThemeToggle} component.
 *
 * @see {@link ThemeToggleContent} for the shape of each language's content.
 */
export const themeToggleLang: Translations<ThemeToggleContent> = {
    en: {
        switchToLight: "Switch to light mode",
        switchToDark: "Switch to dark mode",
    },
    he: {
        switchToLight: "עבור למצב בהיר",
        switchToDark: "עבור למצב כהה",
    },
};
