import { useContext } from "react";
import ProviderError from "@errors/providerError";
import LanguageContext from "./LanguageContext";

/**
 * Custom hook that exposes the language context.
 *
 * @throws {ProviderError} If used outside of a {@link LanguageProvider}.
 *
 * @returns {LanguageContextType} The current language value and setter.
 *
 * @example
 * ```tsx
 * const { language, setLanguage } = useLanguage();
 * setLanguage("en");
 * ```
 */
export const useLanguage = () => {
    // Getting the object data from the context.
    const context = useContext(LanguageContext);

    // If the context is undefined, throw an error.
    if (context === undefined) {
        throw new ProviderError(
            "LanguageProvider",
            "useLanguage must be used within a LanguageProvider"
        );
    }

    // Return the object data.
    return context;
};
