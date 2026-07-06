import { US, IL } from "country-flag-icons/react/3x2";
import type { Translations, SupportedLanguages } from "@/types/Languages";

type FlagComponent = typeof US;

/**
 * The shape of the {@link LanguageToggle} component's translated content:
 * the accessible label announced for the language-switch trigger button.
 */
export type LanguageToggleContent = {
    label: string;
};

/**
 * Translated content for the {@link LanguageToggle} component.
 *
 * @see {@link LanguageToggleContent} for the shape of each language's content.
 */
export const languageToggleLang: Translations<LanguageToggleContent> = {
    en: {
        label: "Change language",
    },
    he: {
        label: "החלף שפה",
    },
};

/**
 * Metadata for a single selectable language option in the {@link LanguageToggle} dropdown.
 */
export type LanguageOption = {
    code: SupportedLanguages;
    nativeName: string;
    Flag: FlagComponent;
};

/**
 * The list of selectable languages, in their own native form.
 * Unlike {@link languageToggleLang}, this is not a {@link Translations} record -
 * each language's name is always shown the same way regardless of the active UI language.
 */
export const languageOptions: LanguageOption[] = [
    { code: "en", nativeName: "English", Flag: US },
    { code: "he", nativeName: "עברית", Flag: IL },
];
