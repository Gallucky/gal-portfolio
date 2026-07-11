import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import { useTheme } from "@/app/providers/Theme/useTheme";
import { projectCardLang } from "@lang/ui/Projects/ProjectCard/projectCard";
import { getTechColor } from "@/data/techColors";
import type { Screenshot } from "@/data/projects";

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
 * @param props - {@link ProjectCardProps}.
 * @returns The ProjectCard component.
 */
const ProjectCard = (props: ProjectCardProps) => {
    const { slug, name, stack, description, previewImg, className = "" } = props;

    const { language } = useLanguage();
    const { themeValue } = useTheme();
    const isRTL = language === "he";
    const text = projectCardLang[language];

    const visibleStack = stack.slice(0, 3);
    const hiddenStackCount = stack.length - visibleStack.length;

    return (
        <Link
            to={`/projects/${slug}`}
            className={`group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-bg-dark shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${className}`}>
            {/* The preview image of the project - a fixed 16:9 frame so cards of different
                screenshot sizes still line up in a grid. Falls back to a themed gradient tile
                (rather than a flat placeholder box) when no screenshot exists yet, so cards
                still look intentional before real screenshots are added. */}
            <div className="relative aspect-video w-full overflow-hidden bg-linear-to-br from-primary/70 via-secondary/50 to-bg-dark">
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

            {/* `pt-2.5` (vs the `pb-5`/`px-5` given to the rest of this block) keeps the gap
                right under the image tight, since the image itself already reads as visual
                separation from the title - a full uniform padding here left too much dead
                space between the image and the title above the description. */}
            <div className="flex flex-1 flex-col px-5 pt-2.5 pb-5 sm:px-6 sm:pt-3 sm:pb-6">
                {/* The full name of the project. `mb-1` (not the larger gap used lower down)
                    keeps it visually paired with the description right below it. */}
                <h3 className="mb-1 text-[1.2rem] font-bold text-color">{name}</h3>

                {/* A short description of the project - clamped to 2 lines so cards of
                    varying description length still line up in a grid. */}
                <p className="mb-3 line-clamp-2 flex-1 text-sm text-color-muted">
                    {description || text.noDescription}
                </p>

                {/* A horizontal list of the stack used in the project, each badge tinted with
                    that technology's real brand color - capped at 3 visible items; a 4th+
                    technology collapses into a single neutral "+N" overflow badge instead of
                    overflowing the row. */}
                <ul aria-label="Technology stack" className="mb-3 flex flex-wrap gap-2">
                    {visibleStack.map((item) => {
                        const hex = getTechColor(item, themeValue);
                        console.log(`hex: ${hex}\nitem: ${item} | themeValue: ${themeValue}`);

                        return (
                            <li
                                key={item}
                                style={
                                    hex ? { color: hex, backgroundColor: `${hex}26` } : undefined
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

                {/* Trailing call to action - purely visual, the whole card is already the link. */}
                <div className="hover:underline">
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
        </Link>
    );
};

export default ProjectCard;
