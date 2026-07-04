/**
 * The supported languages.
 * Those languages should be used for all static/singleton
 * UI text (nav labels, section copy, aria-labels, etc.)
 * and for all translations of the content in the project.
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
