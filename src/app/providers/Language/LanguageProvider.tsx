import { useEffect, useState, type ReactNode } from "react";
import type { SupportedLanguages } from "@/types/Languages";
import LanguageContext from "./LanguageContext";

/**
 * Props accepted by {@link ThemeProvider}.
 */
type LanguageProviderProps = {
    /**
     * @field Nested React elements that will have access to the language context.
     */
    children: ReactNode;

    /**
     * @field Optional initial language value. Defaults to `"en"`.
     */
    initial?: SupportedLanguages;
};

// Creating the provider //
/**
 * Provides global language state to all child components.
 *
 * @param {LanguageProviderProps} props - Component props.
 * @returns {JSX.Element} The provider component.
 *
 * @example
 * ```tsx
 * <LanguageProvider initial="dark">
 *   <App />
 * </LanguageProvider>
 * ```
 */
export const LanguageProvider = (props: LanguageProviderProps) => {
    const { children, initial = "en" } = props;
    // Getting the language value from local storage.
    let localStorageLanguage = localStorage.getItem("lang");
    localStorageLanguage =
        localStorageLanguage === "en" || localStorageLanguage === "he"
            ? localStorageLanguage
            : null;
    const [language, setLanguage] = useState<SupportedLanguages>(
        (localStorageLanguage as SupportedLanguages) ?? initial,
    );

    // Sync <html> class + persistence
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("en", "he");
        root.classList.add(language);
        root.lang = language;
        root.dir = language === "he" ? "rtl" : "ltr";
        localStorage.setItem("lang", language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
