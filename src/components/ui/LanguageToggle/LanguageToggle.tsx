import { languageOptions, languageToggleLang } from "@lang/ui/LanguageToggle/languageToggle";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import type { SupportedLanguages } from "@/types/Languages";

type LanguageToggleProps = {
    className?: string;
};

/**
 * Dropdown control that lets the user switch the active UI language.
 * The trigger shows the current language's flag; the panel lists every
 * {@link languageOptions} entry (flag + native name) as a `listbox`.
 *
 * @param props - Component props.
 * @returns The LanguageToggle component.
 */
const LanguageToggle = (props: LanguageToggleProps) => {
    const { className } = props;
    const { language, setLanguage } = useLanguage();
    const isRTL = language === "he";
    const text = languageToggleLang[language];

    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const currentOption =
        languageOptions.find((option) => option.code === language) ?? languageOptions[0];

    const closeMenu = () => setIsOpen(false);

    const selectLanguage = (code: SupportedLanguages) => {
        setLanguage(code);
        closeMenu();
        triggerRef.current?.focus();
    };

    // Close on outside click.
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Keyboard support: Escape closes + refocuses trigger, arrows/Home/End move focus.
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            const options = optionRefs.current.filter(Boolean) as HTMLButtonElement[];
            const currentIndex = options.findIndex((el) => el === document.activeElement);

            switch (event.key) {
                case "Escape":
                    event.preventDefault();
                    closeMenu();
                    triggerRef.current?.focus();
                    break;
                case "ArrowDown":
                    event.preventDefault();
                    options[(currentIndex + 1) % options.length]?.focus();
                    break;
                case "ArrowUp":
                    event.preventDefault();
                    options[(currentIndex - 1 + options.length) % options.length]?.focus();
                    break;
                case "Home":
                    event.preventDefault();
                    options[0]?.focus();
                    break;
                case "End":
                    event.preventDefault();
                    options[options.length - 1]?.focus();
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    // Move focus into the menu (to the selected option) when it opens.
    useEffect(() => {
        if (!isOpen) return;
        const selectedIndex = languageOptions.findIndex((option) => option.code === language);
        optionRefs.current[selectedIndex]?.focus();
    }, [isOpen, language]);

    return (
        <div ref={containerRef} className="relative">
            <button
                ref={triggerRef}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label={text.label}
                className={className}>
                <currentOption.Flag aria-hidden="true" className="size-5 rounded-sm" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        role="listbox"
                        aria-label={text.label}
                        className={`absolute top-full mt-2 ${isRTL ? "end-0" : "start-0"} z-50 min-w-max rounded-lg border border-border bg-bg-dark py-1 shadow-lg`}>
                        {languageOptions.map((option, index) => (
                            <button
                                key={option.code}
                                ref={(el) => {
                                    optionRefs.current[index] = el;
                                }}
                                type="button"
                                role="option"
                                aria-selected={option.code === language}
                                onClick={() => selectLanguage(option.code)}
                                className={`flex w-full items-center gap-2 px-3 py-1.5 text-sm hover:bg-color-muted/20 ${
                                    option.code === language
                                        ? "text-primary font-bold"
                                        : "text-color"
                                }`}>
                                <option.Flag aria-hidden="true" className="size-4 rounded-sm" />
                                <span>{option.nativeName}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageToggle;
