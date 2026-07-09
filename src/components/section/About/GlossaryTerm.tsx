import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import { glossarySectionLang, type GlossaryEntry } from "@lang/section/About/glossary";
import CTAButton from "@components/section/CTA/CTAButton";

type GlossaryTermProps = {
    entry: GlossaryEntry;
    /** Whether this instance is the one allowed to show its popup right now. */
    isActive: boolean;
    /** Claims the shared "active" slot for this term, bumping any other open popup. */
    onActivate: () => void;
    /** Releases the shared "active" slot, but only if it currently belongs to this term. */
    onDeactivate: () => void;
};

/**
 * An inline, clickable term inside the About section's bio text (e.g. "Magshimim",
 * "HackerU") that opens a short explanation popup on hover or click/tap, with a button that
 * opens the term's official page in a new tab.
 *
 * Mirrors {@link ProgrammingLanguage}'s hover-then-pin interaction model *and* its shared
 * "only one active at a time" coordination: every popup shares the same fixed, centered spot
 * on screen, so without `isActive` gating a click-pinned popup and a freshly hovered one
 * would render stacked on top of each other. `isActive`/`onActivate`/`onDeactivate` are
 * lifted up to {@link AboutSection} (see {@link renderWithGlossary}) exactly like
 * {@link LanguagesSection} does for its `ProgrammingLanguage` children.
 *
 * @see {@link renderWithGlossary} for how these get spliced into paragraph text and wired
 * up to the shared active-slot state.
 * @see {@link glossarySectionLang} for the entry content (label/description/href) this renders.
 */
const GlossaryTerm = (props: GlossaryTermProps) => {
    const { entry, isActive, onActivate, onDeactivate } = props;
    const { language } = useLanguage();
    const ui = glossarySectionLang[language];

    const [hovered, setHovered] = useState(false);
    const [pinned, setPinned] = useState(false);
    const shown = isActive && (hovered || pinned);

    const containerRef = useRef<HTMLSpanElement>(null);
    const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearHideTimeout = () => {
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
        }
    };

    const handleMouseEnter = () => {
        clearHideTimeout();
        setHovered(true);
        onActivate();
    };

    // Delay the hide slightly so moving the mouse from the term onto the popup (or vice
    // versa) doesn't register as a "leave" before the popup picks up its own
    // `onMouseEnter` — same trick used by the Languages popup.
    const handleMouseLeave = () => {
        clearHideTimeout();
        hideTimeoutRef.current = setTimeout(() => {
            setHovered(false);
            if (!pinned) onDeactivate();
        }, 150);
    };

    // Click/tap pins the popup open; clicking again while pinned closes it.
    const handleClick = () => {
        onActivate();
        setPinned((prev) => {
            const next = !prev;
            if (!next && !hovered) onDeactivate();
            return next;
        });
    };

    const close = () => {
        clearHideTimeout();
        setPinned(false);
        setHovered(false);
        onDeactivate();
    };

    // While pinned, close if the user clicks anywhere outside the term or the popup.
    useEffect(() => {
        if (!pinned) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                close();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [pinned]);

    // If a different term claims the shared active slot, fully reset this instance's local
    // state so it doesn't linger "shown" (or re-open on the next stray mouse event) — this
    // is what stops a newly activated popup from rendering underneath a previously pinned one.
    useEffect(() => {
        if (isActive) return;
        clearHideTimeout();
        setHovered(false);
        setPinned(false);
    }, [isActive]);

    // Clean up any pending hide timeout on unmount.
    useEffect(() => () => clearHideTimeout(), []);

    return (
        <span ref={containerRef} className="relative">
            <button
                type="button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                aria-expanded={shown}
                aria-label={`${entry.label} — ${ui.ctaLabel}`}
                className={`
                    text-primary font-bold underline decoration-dotted underline-offset-4
                    hover:decoration-solid transition-[text-decoration-style] hover:cursor-pointer
                    focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2
                    focus-visible:rounded-xs
                `}>
                {entry.label}
            </button>

            {/* Backdrop for mobile - close on click */}
            {shown && <span className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={close} />}

            {/* Popup - positioned the same fixed, centered bottom-sheet way as the
                Languages section's popup, for a consistent pattern across the app. */}
            <span
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`
                    fixed left-1/2 -translate-x-1/2 bottom-0 sm:bottom-[5%]

                    w-[90vw] max-w-sm
                    bg-linear-to-br from-bg-dark to-bg
                    border border-border
                    p-4 sm:p-5 rounded-lg shadow-2xl
                    transition-all duration-300 ease-in-out
                    text-start

                    ${
                        shown
                            ? "opacity-100 translate-y-0 md:scale-100 pointer-events-auto z-50!"
                            : "opacity-0 translate-y-full md:translate-y-3/4 md:scale-95 pointer-events-none -z-10"
                    }
                `}>
                <button
                    onClick={close}
                    className={`
                        absolute top-2 end-2 w-8 h-8 flex items-center justify-center
                        text-color-muted hover:text-color transition-colors
                    `}
                    aria-label={ui.closeLabel}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <h4 className="text-base font-bold text-primary mb-2 pe-8">{entry.label}</h4>
                <p className="text-sm text-color-muted mb-4">{entry.description}</p>

                <CTAButton
                    label={ui.ctaLabel}
                    href={entry.href}
                    target="_blank"
                    icon={ExternalLink}
                    animateIconOnHover={false}
                    className="rounded-lg border border-primary text-primary px-3 py-1.5 text-sm font-bold hover:bg-primary/10"
                />
            </span>
        </span>
    );
};

export default GlossaryTerm;
