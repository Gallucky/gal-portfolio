import { MoveRight } from "lucide-react";

/** Loosened past `LucideIcon` so compound icons (e.g. {@link AnimatedDownloadIcon}, which
 * renders two stacked elements instead of a single Lucide `<svg>`) can be passed too. */
type IconComponent = React.ComponentType<{ className?: string }>;

type CTAButtonProps = {
    /** Visible label text. */
    label: string;
    /** Renders an <a> when given; falls back to a <button type="button"> when omitted. */
    href?: string;
    /** Only used when `href` is omitted (button mode). */
    onClick?: () => void;
    /** Forwarded to the <a> when `href` is set — e.g. `true` for a same-name save, or a
     * string to suggest a filename (used by the CV link). Ignored in button mode. */
    download?: boolean | string;
    /** Forwarded to the <a> when `href` is set — e.g. `"_blank"` to open an external link
     * (glossary popups, project links) in a new tab. Ignored in button mode. */
    target?: React.HTMLAttributeAnchorTarget;
    /** Forwarded to the <a> when `href` is set. Defaults to `"noopener noreferrer"` whenever
     * `target="_blank"` is used, so callers don't have to remember the security boilerplate
     * every time — pass an explicit value to override it. Ignored in button mode. */
    rel?: string;
    /** Icon shown after the label; defaults to `MoveRight` (the Hero/"Get in Touch" arrow). */
    icon?: IconComponent;
    /** Whether the icon gets the default hover-triggered `arrow-ping` stretch. Set to `false`
     * for icons that manage their own continuous animation (e.g. {@link AnimatedDownloadIcon}'s
     * infinite drop-and-reappear loop) — those shouldn't also inherit the hover stretch on top. */
    animateIconOnHover?: boolean;
    /** Extra classes for size/color/shape — layout and skin are left to the caller so both
     * Hero's pill CTAs and this section's own buttons can look different while sharing the
     * same button behavior. */
    className?: string;
};

/**
 * Shared CTA button used by both the Hero section's "View Projects"/"Contact Me" links and
 * this CTA section's own "Get in Touch" button.
 *
 * Centralizes the arrow-hover treatment so every CTA in the app shares one animation instead
 * of each section rolling its own hover-nudge: the `MoveRight` icon plays the `arrow-ping`
 * keyframes (defined in `CTA.section.css`, registered as a Tailwind `@utility` so `group-hover:`
 * can target it) while the button is hovered — a scale stretch toward the tip, anchored at the
 * tail, that snaps back.
 *
 * Under RTL, the icon is mirrored via a *separate wrapping span* (`arrow-rtl-mirror`) rather
 * than folding the flip into the same `scale` as the stretch. A mirror has to pivot around
 * its own center to avoid shifting position (reflecting about an edge moves the whole box
 * out of its bounding area — try it: `scale: -1 1` with `transform-origin: left center`
 * throws the icon out of bounds to the left), while the stretch specifically wants an
 * edge-anchored origin so it grows toward the tip instead of symmetrically. Those two wants
 * conflict if forced onto one transform, so they're split onto nesting elements instead:
 * the wrapper mirrors (its own default center origin, no `--arrow-flip` needed in the
 * keyframes), and the inner icon stretches exactly as it would in LTR — the wrapper's mirror
 * then flips that already-rendered stretch along with everything else, so it still visually
 * grows toward the tip once mirrored.
 *
 * @see {@link CTAButtonProps} for the accepted props.
 */
const CTAButton = (props: CTAButtonProps) => {
    const {
        label,
        href,
        onClick,
        download,
        target,
        rel,
        icon: Icon = MoveRight,
        animateIconOnHover = true,
        className = "",
    } = props;

    const sharedClassName = `group inline-flex items-center gap-2 hover:cursor-pointer ${className}`;
    // `arrow-rtl-mirror` only makes sense for the default MoveRight-style icon (it's what
    // flips it to point left under RTL); icons opting out of the shared hover treatment
    // (e.g. AnimatedDownloadIcon, a vertical arrow) don't need or want it.
    const content = (
        <>
            {label}
            {animateIconOnHover ? (
                <span className="me-1 inline-flex arrow-rtl-mirror">
                    <Icon aria-hidden="true" className="group-hover:animation-arrow-ping" />
                </span>
            ) : (
                <Icon aria-hidden="true" className="me-1" />
            )}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                download={download}
                target={target}
                rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
                className={sharedClassName}>
                {content}
            </a>
        );
    }

    return (
        <button type="button" onClick={onClick} className={sharedClassName}>
            {content}
        </button>
    );
};

export default CTAButton;
