import { useEffect, useRef, useState } from "react";
import ProgrammingLanguageIcon from "./ProgrammingLanguageIcon";
import StarRating from "@/components/ui/StarRating";

export type ProgrammingLanguageProps = {
    id: string;
    name: string;
    description: string;
    difficulty: number;
    experience: number;
    /** Whether this instance is the one allowed to show its popup right now. */
    isActive: boolean;
    /** Claims the shared "active" slot for this language, bumping any other open popup. */
    onActivate: () => void;
    /** Releases the shared "active" slot, but only if it currently belongs to this language. */
    onDeactivate: () => void;
};

/**
 * Renders a programming language item with an icon and details.
 * The component displays the programming language's icon, name, description, difficulty rating,
 * and overall enjoyment rating based on the developer's options and experience.
 *
 * Uses the ProgrammingLanguageIcon component to render the programming language's icon.
 * Grouped in the LanguagesSection component.
 *
 * Interaction model: two independent local flags control visibility — `hovered` (desktop
 * mouse enter/leave) and `pinned` (set by a click/tap) — gated by the `isActive` prop from
 * the parent, since every popup shares the same fixed, centered spot on screen and only one
 * may be shown at a time:
 * - Hovering (or clicking) the icon calls `onActivate`, claiming the shared slot. If another
 *   language's popup was open, its `isActive` prop flips to false and it closes immediately —
 *   this is what stops a newly hovered popup from rendering underneath a previously pinned one.
 * - Hovering previews the popup; moving the mouse away closes it again after a short delay
 *   (see `handleMouseLeave`) that bridges the gap between the icon and the popup below it —
 *   without it, crossing that gap flickers the popup closed and immediately re-opens it.
 * - Clicking/tapping the icon pins the popup open regardless of hover state. Once pinned, it
 *   stays open even after the mouse leaves, until the user clicks the X button, clicks outside
 *   the icon/popup, clicks the icon again, or a different language becomes active.
 *
 * @see {@link ProgrammingLanguageIcon} for more information on the icon component.
 * @see {@link LanguagesSection} for more information on the parent component.
 * @param props the data to display passed to the component.
 * @returns The ProgrammingLanguage component.
 */
const ProgrammingLanguage = (props: ProgrammingLanguageProps) => {
    const { id, name, description, difficulty, experience, isActive, onActivate, onDeactivate } =
        props;
    const [hovered, setHovered] = useState(false);
    const [pinned, setPinned] = useState(false);
    const shown = isActive && (hovered || pinned);

    const containerRef = useRef<HTMLDivElement>(null);
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

    // Delay the hide slightly so moving the mouse from the icon onto the popup
    // (or vice versa) doesn't register as a "leave" before the popup picks up
    // its own `onMouseEnter` — this is what removes the flicker.
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

    // While pinned, close if the user clicks anywhere outside the icon or the popup.
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

    // If a different language claims the shared active slot, fully reset this instance's
    // local state so it doesn't linger "shown" (or re-open on the next stray mouse event).
    useEffect(() => {
        if (isActive) return;
        clearHideTimeout();
        setHovered(false);
        setPinned(false);
    }, [isActive]);

    // Clean up any pending hide timeout on unmount.
    useEffect(() => () => clearHideTimeout(), []);

    return (
        <div ref={containerRef} className="contents">
            <button
                type="button"
                className={
                    "relative flex flex-col items-center justify-center" +
                    "max-w-[90%] cursor-pointer focus:outline-none" +
                    "focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
                }
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                aria-expanded={shown}
                aria-label={`View details for ${name}`}>
                {/* Icon - with fixed aspect ratio */}
                <div className="min-w-11 min-h-11 size-6 sm:size-8 md:size-10 lg:size-12 flex items-center justify-center">
                    <ProgrammingLanguageIcon id={id} name={name} />
                </div>
            </button>

            {/* Backdrop for mobile - close on click */}
            {shown && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={close} />
            )}

            {/* Content - positioned below the icon, centered */}
            {/* FIXME: landscape-orientation positioning below is disabled pending a decision on
                whether the popup needs different anchoring on landscape mobile. Re-enable or
                remove after testing on a real device:
                landscape:max-sm:bottom-auto landscape:max-sm:top-1/2 landscape:max-sm:-translate-y-1/2 */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`
                    fixed start-1/2 -translate-x-1/2 bottom-0 sm:bottom-[5%]

                    w-[90vw] max-w-md
                    bg-linear-to-br from-bg-dark to-bg
                    border border-border
                    p-4 sm:p-6 rounded-lg shadow-2xl
                    transition-all duration-300 ease-in-out

                    ${
                        shown
                            ? "opacity-100 translate-y-0 md:scale-100 pointer-events-auto z-50!"
                            : "opacity-0 translate-y-full md:translate-y-3/4 md:scale-95 pointer-events-none -z-10"
                    }
                `}>
                {/* Close button - always available since a click can pin the popup open
                    on any breakpoint, not just mobile */}
                <button
                    onClick={close}
                    className={`
                        absolute top-2 end-2 w-8 h-8 flex items-center justify-center
                        text-color-muted hover:text-color transition-colors
                    `}
                    aria-label="Close">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 pe-8 md:pe-0">
                    {name}
                </h3>
                <p className="text-color-muted mb-4 text-sm">{description}</p>

                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex-1 flex-col">
                        <StarRating
                            value={difficulty}
                            color="text-warning"
                            label="Difficulty"
                            className="flex gap-1"
                        />
                    </div>

                    <div className="flex-1">
                        <StarRating
                            value={experience}
                            color="text-info"
                            label="Overall Enjoyment"
                            className="flex gap-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgrammingLanguage;
