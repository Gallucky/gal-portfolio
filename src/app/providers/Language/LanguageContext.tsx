import { createContext, type Dispatch, type SetStateAction } from "react";
import type { SupportedLanguages } from "@/types/Languages";

/**
 * Language context data shape.
 */
type LanguageContextType = {
    /**
     * @field The current language value.
     */
    language: SupportedLanguages;

    /**
     * Setter function for updating the language.
     * Accepts either a new value of a code string for the language
     * e.g. "en" for English or "he" for Hebrew
     * or a function that derives the next value.
     */
    setLanguage: Dispatch<SetStateAction<SupportedLanguages>>;
};

// Creating the context //
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default LanguageContext;
