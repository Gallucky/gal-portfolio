import { ArrowDown } from "lucide-react";

type AnimatedDownloadIconProps = {
    className?: string;
};

/**
 * A compound "download" glyph: on hover, the arrow (stem + head, not a bare chevron —
 * `ArrowDown` rather than `ChevronDown`) drops and fades out, then resets to the top while
 * still invisible and fades back in, looping for as long as the hover lasts. The tray bar
 * underneath never animates, so only the arrow appears to move.
 *
 * `group-hover:` (not an unconditional class) is what gates the loop to hover-only — the
 * `.group` ancestor is CTAButton's <a>/<button> wrapper. The reset-while-invisible trick
 * (see `download-drop`'s 50%/51% keyframes in `CTA.section.css`) is what avoids a visible
 * "teleport" snap back to the top — the jump happens during the one keyframe pair where
 * opacity is already 0. When hover ends mid-loop, the animation is simply removed and the
 * arrow reverts to its rest state (0%/100% and the un-animated state are the same pose, so
 * there's no visible jump there either).
 *
 * Meant to be passed as `<CTAButton icon={AnimatedDownloadIcon} animateIconOnHover={false} />`
 * — `animateIconOnHover={false}` just stops CTAButton from *also* applying its own
 * `arrow-ping` hover class on top of this icon's self-contained hover animation.
 */
const AnimatedDownloadIcon = (props: AnimatedDownloadIconProps) => {
    const { className = "" } = props;

    return (
        <span
            aria-hidden="true"
            className={`relative inline-flex flex-col items-center justify-center ${className}`}>
            <ArrowDown
                strokeWidth={2.5}
                className="size-[1em] scale-y-125 group-hover:animate-download-drop"
            />
            {/* Stationary tray bar — stays put while the arrow above it animates. `em`-based
                sizing (matching the arrow above) keeps both proportional if the button's font
                size ever changes. Small positive margin so there's still a visible gap without
                the arrow's head ever touching it, even mid-drop. */}
            <span className="mt-0.5 h-[0.1em] w-[0.8em] rounded-full bg-current" />
        </span>
    );
};

export default AnimatedDownloadIcon;
