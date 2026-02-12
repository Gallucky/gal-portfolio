import { title } from "framer-motion/client";

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

export type Lang = {
    [key in SupportedLanguages]: LanguageData;
};

/**
 * Supported languages.
 */
export type SupportedLanguages = "en" | "he";
