import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import { useTheme } from "@/app/providers/Theme/useTheme";
import { projectCardLang } from "@lang/ui/Projects/ProjectCard/projectCard";
import { getTechColor } from "@/data/techColors";
import { projectTypeBadgeColors } from "@/data/projectTypeColors";
import type { CategorizedProject, Screenshot } from "@/data/projects";
import Star from "@components/ui/Star";

/**
 * A ribbon-banner outline: a rectangle whose left and right edges are cut into a small zigzag -
 * 3 little inward-pointing triangle notches per side ("pinking shears"/sawtooth edge) rather
 * than one single notch - used to clip the category badge instead of a plain rectangle. See
 * {@link ProjectCard}'s doc comment for why. Computed once at module scope (fixed geometry,
 * shared by every card) rather than per render.
 */
const RIBBON_CLIP_PATH =
    "polygon(0% 0%, 14% 16.67%, 0% 33.33%, 14% 50%, 0% 66.67%, 14% 83.33%, 0% 100%, 100% 100%, 86% 83.33%, 100% 66.67%, 86% 50%, 100% 33.33%, 86% 16.67%, 100% 0%)";

type ProjectCardLayout = "vertical" | "horizontal";

type ProjectCardProps = {
    /** Project's unique slug - used to build the link to its details page (`/projects/:slug`). */
    slug: string;
    /** The full name of the project. */
    name: string;
    /** A short description of the project. Falls back to a translated placeholder when omitted. */
    description?: string;
    /** The technologies used in the project - rendered as badges, capped at 3 visible + overflow. */
    stack: string[];
    /** The project's preview screenshot. Renders a gradient placeholder when omitted. */
    previewImg?: Screenshot;
    /** The project's category - when given, renders a color-coded ribbon badge pinned to the
     * card's top corner (see {@link projectTypeBadgeColors}). Omit this in views that
     * already group cards by category (e.g. {@link ProjectsGroupedByView}), where the badge
     * would just repeat the section heading above it. */
    type?: CategorizedProject["type"];
    /** Whether to render the small circular "featured" star badge pinned to the card's other
     * top corner. Independent of `type` - featured status isn't tied to any one category. */
    featured?: boolean;
    /** How the card arranges its image and content. `"vertical"` (the default) stacks the image
     * on top of the content - used by the grid/grouped views. `"horizontal"` places a
     * fixed-width image beside the content instead, producing a shorter, wider row - used by
     * {@link ProjectsListView}, where many cards get scanned top-to-bottom and a full-height
     * vertical card wastes space. */
    layout?: ProjectCardLayout;
    /** Extra classes for the outer card - layout (e.g. grid sizing) is left to the caller. */
    className?: string;
};

/**
 * A clickable summary card for a single project, used in project grids (home page's featured
 * projects, the `/projects` listing). The whole card is one link to the project's details page
 * at `/projects/:slug` - it's rendered as a single `Link` rather than nesting a separate button
 * inside a clickable container, so the card has exactly one focus stop and one accessible name
 * instead of two overlapping interactive targets.
 *
 * The stack list is capped at 3 visible badges - a 4th+ technology collapses into a single
 * "+N" overflow badge (see {@link projectCardLang}'s `moreTechnologies` for its accessible
 * label) rather than letting the badge row grow unbounded and break the card's layout. Each
 * visible badge is color-coded to its technology's real brand color via {@link getTechColor}
 * (falling back to a neutral theme-token style for anything not in that map).
 *
 * Two optional badges - the category ribbon (`type`) and the circular featured star
 * (`featured`) - are rendered as direct children of the outer `Link`, *not* inside the visual
 * card body below. The card body owns the `overflow-hidden`/`rounded-2xl` needed to clip the
 * preview image to rounded corners; if the badges lived inside that same clipped box they'd get
 * flush-cut at its edges and read as "printed on" the card. Living outside it instead, pinned
 * with small offsets near each corner, lets them overlap the card's edge and read as physically
 * sitting on top of it - closer to a sticker or pin than a printed label. The hover *lift*
 * (`-translate-y-1`) lives on `Link` itself rather than the card body, so both badges (its
 * siblings) travel with the card as one unit instead of staying put while the body slides out
 * from under them; the card body's own `group-hover`/`group-focus-visible` styling (border
 * color, shadow) still reacts to that same `Link` hover via the shared `group` class.
 *
 * @param props - {@link ProjectCardProps}.
 * @returns The ProjectCard component.
 */
const ProjectCard = (props: ProjectCardProps) => {
    const {
        slug,
        name,
        stack,
        description,
        previewImg,
        type,
        featured,
        layout = "vertical",
        className = "",
    } = props;

    const { language } = useLanguage();
    const { themeValue } = useTheme();
    const isRTL = language === "he";
    const text = projectCardLang[language];
    const isHorizontal = layout === "horizontal";

    const visibleStack = stack.slice(0, 3);
    const hiddenStackCount = stack.length - visibleStack.length;

    return (
        <Link
            to={`/projects/${slug}`}
            className={`group relative block h-full rounded-2xl transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${className}`}>
            {/* Category badge - a ribbon banner with a small zigzag notched edge (via
                `clip-path`), color-coded per category, tilted, and pinned to the card's
                top-start corner, overlapping it slightly. `drop-shadow` (not `shadow`) is used
                since regular box-shadow is based on the element's rectangular box and would get
                cut off by `clip-path`, while `drop-shadow` follows the actual clipped silhouette. */}
            {type && (
                <div
                    aria-hidden="true"
                    style={{ clipPath: RIBBON_CLIP_PATH }}
                    className={`absolute -start-1 top-1 z-10 flex h-5 w-20 items-center justify-center drop-shadow-lg sm:-start-2 sm:top-2 sm:h-6 sm:w-28 ${
                        // `rotate` pivots around `transform-origin`, which defaults to the
                        // shape's own center - rotating a wide, short rectangle around its center
                        // swings its actual top-start corner away from the container's (0,0)
                        // corner, undermining the `start-0 top-0` above (the badge stops looking
                        // flush against the very start of the card). Pinning the origin to that
                        // same corner instead keeps it fixed in place as the pivot, so only the
                        // rest of the ribbon swings around it. Mirrored per language (both the
                        // origin corner and the tilt direction) the same way the arrow icon below
                        // mirrors via `isRTL`.
                        isRTL
                            ? "origin-top-right rotate-[18deg]"
                            : "origin-top-left -rotate-[18deg]"
                    } ${projectTypeBadgeColors[type].background}`}>
                    {/* Glossy highlight - clip-path clips an element's entire painted subtree
                        (not just the element it's set on), so this gradient overlay inherits the
                        parent's ribbon silhouette for free instead of needing its own clip-path. */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-transparent" />
                    <span
                        className={`relative text-[0.55rem] font-extrabold tracking-wide uppercase sm:text-[0.65rem] ${projectTypeBadgeColors[type].text}`}>
                        {text.typeBadge[type]}
                    </span>
                </div>
            )}

            {/* Featured badge - a small circular star, pinned to the card's opposite (top-end)
                corner so it never collides with the category badge. Icon-only, so it carries its
                own `role="img"`/`aria-label` rather than relying on adjacent visible text.
                `group/featured` scopes the tooltip below to just this badge's own hover, rather
                than the whole card's shared `group` (which already drives the card's hover-lift). */}
            {featured && (
                <div
                    role="img"
                    aria-label={text.featuredBadge}
                    className="group/featured absolute end-2 -top-2 z-10 flex size-8 items-center justify-center rounded-full bg-warning ring-2 ring-bg drop-shadow-lg">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 via-white/10 to-transparent" />
                    <div className="relative size-4">
                        <Star id={`featured-${slug}`} color="text-bg-dark" fillState="full" />
                    </div>

                    {/* Custom tooltip, styled with the app's existing "elevated panel" look
                        (gradient dark background, border, rounded, shadow) - the same treatment
                        {@link GlossaryTerm}'s popup uses - rather than the browser's plain native
                        `title` tooltip, which looks out of place next to the rest of the UI.
                        `left-1/2`/`-translate-x-1/2` are deliberately physical (not the logical
                        `start-1/2`): centering should stay the same regardless of language, and
                        `start-1/2` would flip to `right: 50%` in RTL, which combined with the
                        always-physical `-translate-x-1/2` would push the tooltip off-center. */}
                    <span
                        role="tooltip"
                        className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg border border-border bg-linear-to-br from-bg-dark to-bg px-2.5 py-1 text-xs font-medium whitespace-nowrap text-color opacity-0 shadow-lg transition-opacity duration-200 group-hover/featured:opacity-100">
                        {text.featuredBadge}
                    </span>
                </div>
            )}

            {/* The card's actual visual body. Border/shadow/rounded+clipped-corner chrome lives
                here rather than on `Link`, so the badges above (siblings of this div, not
                descendants) can overlap its edges without getting clipped by its own
                `overflow-hidden`. The hover *lift* itself, though, is on `Link` (see above) -
                not here - so the badges (also direct children of `Link`) translate together
                with this body instead of staying pinned in place while the body moves out from
                under them.

                `h-full` (matched by `Link`'s own `h-full` above) is what keeps every card the
                same size in a row: `Link` is a flex/grid item, so its parent (`ProjectsGridView`,
                `ProjectView`'s `flex-wrap` row, ...) already stretches it to match the tallest
                sibling by default - but a plain block element doesn't automatically fill a
                stretched ancestor's height, so without `h-full` here this div would still shrink
                back down to only what its own content needs, leaving shorter cards for projects
                with a one-line description or a smaller stack. */}
            <div
                className={`h-full w-full overflow-hidden rounded-2xl border border-border/40 bg-bg-dark shadow-md transition-[border-color,box-shadow] duration-300 group-hover:border-primary/50 group-hover:shadow-xl ${
                    isHorizontal
                        ? // Below `sm:`, this becomes a 2-column/2-row grid - [image][title] on
                          // row 1, details spanning both columns on row 2 - rather than the
                          // side-by-side row `sm:flex sm:flex-row` switches to from `sm:` up. See
                          // the image/title/details comments below for how each piece slots in.
                          "grid grid-cols-[5rem_1fr] gap-x-3 gap-y-1 sm:flex sm:flex-row sm:gap-0"
                        : "flex flex-1 flex-col"
                }`}>
                {/* The preview image of the project. In vertical layout it's a fixed 16:9 frame
                    spanning the card's width so cards of different screenshot sizes still line
                    up in a grid. In horizontal layout, below `sm:`, it's a small square
                    thumbnail sized entirely by the grid's first column (`aspect-square` turns
                    that column's fixed 5rem *width* into a matching 5rem height, so it fills
                    exactly the top-left cell of the 2x2 grid described above) - from `sm:` up it
                    switches back to a wider, taller column stretched to the row's height by the
                    parent's default flex `align-items: stretch`. Falls back to a themed gradient
                    tile (rather than a flat placeholder box) when no screenshot exists yet, so
                    cards still look intentional before real screenshots are added. */}
                <div
                    className={`relative shrink-0 overflow-hidden bg-linear-to-br from-primary/70 via-secondary/50 to-bg-dark ${
                        isHorizontal
                            ? "aspect-square w-full sm:aspect-auto sm:h-auto sm:w-56"
                            : "aspect-video w-full"
                    }`}>
                    {previewImg?.url && (
                        <img
                            src={previewImg.url}
                            alt={previewImg.alt}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    )}
                </div>

                {/* The title + details wrapper. In vertical layout this is a normal box (like
                    before). In horizontal layout, below `sm:`, it's `contents` - a display value
                    that removes *this* element's own box but keeps rendering its children, so
                    the `<h3>` and the details `<div>` below become direct items of the grid
                    above instead of being nested inside a box of their own: the `<h3>` lands in
                    the next open cell (row 1, column 2, beside the image) and the details `<div>`
                    (given `col-span-2`) spans both columns on row 2 underneath. From `sm:` up,
                    this goes back to being a real flex column beside the image - the classic
                    "image on the left, everything else stacked on the right" shape. */}
                <div
                    className={
                        isHorizontal
                            ? "contents sm:flex sm:flex-1 sm:flex-col sm:justify-center sm:px-6 sm:py-4"
                            : "flex flex-1 flex-col px-5 pt-2.5 pb-5 sm:px-6 sm:pt-3 sm:pb-6"
                    }>
                    {/* The full name of the project. Carries its own top/bottom spacing in
                        horizontal-mobile (where it's a standalone grid cell next to the image,
                        not nested inside the padded wrapper above), reset back to nothing from
                        `sm:` up where that wrapper's own padding takes over again. */}
                    <h3
                        className={`line-clamp-2 font-bold text-color ${
                            isHorizontal
                                ? "pt-2 pb-1 text-base sm:mb-1 sm:min-h-[2.9rem] sm:p-0 sm:text-[1.2rem]"
                                : "mb-1 min-h-[2.9rem] text-[1.2rem]"
                        }`}>
                        {name}
                    </h3>

                    {/* Details - description, stack, and CTA - grouped into one element so it
                        can be given `col-span-2` as a single unit in horizontal-mobile's grid
                        (spanning row 2 under both the image and the title). In vertical layout
                        it stays a flex column (`flex flex-1 flex-col`) rather than a plain box,
                        since the description's own `flex-1` below needs an immediate flex
                        parent to grow against - without that, "grow the description to push the
                        stack/CTA down to a consistent spot" stops working now that they're
                        nested one level deeper than before. */}
                    <div
                        className={
                            isHorizontal
                                ? "col-span-2 px-3 pb-2 sm:col-span-1 sm:p-0"
                                : "flex flex-1 flex-col"
                        }>
                        {/* A short description of the project, clamped to 2 lines so cards of
                            varying description length still line up - in vertical layout it also
                            grows (`flex-1`) to push the stack/CTA below down to a consistent
                            spot when the surrounding row *is* stretched to a common height (e.g.
                            {@link ProjectsGridView}'s CSS grid). But `flex-1` alone only
                            equalizes cards whose card-level cross-stretch actually kicks in - in
                            {@link ProjectView}'s `flex-wrap` layout that stretch doesn't reliably
                            apply, so a 1-line description card would otherwise end up visibly
                            shorter than a 2-line sibling in the same row. `min-h-[2.5rem]`
                            (2 lines at this text size) makes that minimum explicit instead of
                            depending on the parent stretching correctly, so card height stays
                            consistent either way. Horizontal layout centers its content vertically
                            instead, so neither the growth nor the floor is needed there. */}
                        <p
                            className={`mb-3 text-sm text-color-muted line-clamp-2 ${
                                isHorizontal ? "" : "min-h-[2.5rem] flex-1"
                            }`}>
                            {description || text.noDescription}
                        </p>

                        {/* A horizontal list of the stack used in the project, each badge tinted
                            with that technology's real brand color - capped at 3 visible items;
                            a 4th+ technology collapses into a single neutral "+N" overflow badge
                            instead of overflowing the row. Hidden below `sm:` in horizontal
                            layout - even with the details row spanning the full card width, a
                            badge row plus the CTA below still reads as more than a compact list
                            row wants, so both drop out until the row grows at `sm:` and up. */}
                        <ul
                            aria-label="Technology stack"
                            className={`mb-3 flex min-h-[3.75rem] flex-wrap content-start gap-2 ${isHorizontal ? "hidden sm:flex" : ""}`}>
                            {visibleStack.map((item) => {
                                const hex = getTechColor(item, themeValue);

                                return (
                                    <li
                                        key={item}
                                        style={
                                            hex
                                                ? { color: hex, backgroundColor: `${hex}26` }
                                                : undefined
                                        }
                                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                                            hex ? "" : "bg-color-muted/15 text-color-muted"
                                        }`}>
                                        {item}
                                    </li>
                                );
                            })}

                            {hiddenStackCount > 0 && (
                                <li
                                    aria-label={text.moreTechnologies.replace(
                                        "{count}",
                                        String(hiddenStackCount),
                                    )}
                                    className="rounded-full bg-color-muted/15 px-3 py-1 text-xs font-medium text-color-muted">
                                    +{hiddenStackCount}
                                </li>
                            )}
                        </ul>

                        {/* Trailing call to action - purely visual, the whole card is already
                            the link. Hidden below `sm:` in horizontal layout, alongside the
                            stack list above (see its comment for why). */}
                        <div className={`hover:underline ${isHorizontal ? "hidden sm:block" : ""}`}>
                            <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                                {text.viewProject}
                                <span
                                    className="inline-flex transition-transform duration-200 group-hover:translate-x-1"
                                    style={isRTL ? { transform: "scaleX(-1)" } : undefined}>
                                    <MoveRight aria-hidden="true" className="size-4" />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
