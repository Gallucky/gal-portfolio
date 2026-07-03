export type LanguageRating = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

export type Language = {
    id: string;
    name: string;
    description: string;
    difficulty: LanguageRating;
    experience: LanguageRating;
};

export type LanguageData = {
    title: string;
    languages: Language[];
};

/**
 * Supported languages.
 */
export type SupportedLanguages = "en" | "he";

/**
 * Wraps any content shape `T` into a per-language record - one `T` per supported language.
 * Use this for every piece of static/singleton UI text (nav labels, section copy, aria-labels, etc.)
 * so TypeScript enforces that every language has a matching shape - a missing or misspelled field
 * in one language becomes a compile error instead of a silent gap.
 *
 * @example
 * ```ts
 * type HeroContent = { title: string; description: string };
 * const heroLang: Translations<HeroContent> = { en: {...}, he: {...} };
 * ```
 */
export type Translations<T> = {
    [key in SupportedLanguages]: T;
};
