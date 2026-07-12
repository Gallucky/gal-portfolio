import type { Project } from "@/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import CTAButton from "@components/section/CTA/CTAButton";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import { projectViewLang } from "@lang/ui/Projects/ProjectView/projectView";

/**
 * The project categories a {@link ProjectView} can render: the three project "kinds" defined
 * in `src/data/projects.ts` (`uiImplementation`, `markup`, `application`) plus `featured`, used
 * for the curated cross-category list shown on the home page (`featuredProjects`).
 *
 * Exported (not just used internally) so {@link ProjectViewContent} in the lang file can key its
 * `sectionTitles` translations against the same union instead of redeclaring it.
 */
export type ProjectViewType = "uiImplementation" | "markup" | "application" | "featured";

type ProjectViewProps = {
    /** Which project category this view renders - drives the translated section heading. */
    type: ProjectViewType;
    /** The projects to render as cards, already filtered/selected by the caller. */
    projects: Project[];
    /** Whether to render the trailing "View All Projects" CTA next to the heading. Defaults to
     * `true` (the home page's use case). Set to `false` when this view is rendered inside the
     * dedicated `/projects` listing itself - see {@link ProjectsGroupedByView} - where a link
     * back to "all projects" doesn't make sense given the user is already looking at all of them. */
    showViewAllLink?: boolean;
};

/**
 * Renders a titled grid of {@link ProjectCard}s for one project category (or the curated
 * `featured` list) - e.g. the home page's "Featured Projects" section, or a future
 * "UI Implementations" listing.
 *
 * The heading text comes from {@link projectViewLang} rather than being derived from `type` at
 * render time (e.g. via `capitalizeWord`) - `type` values are English-only identifiers
 * (`"uiImplementation"`), so formatting them wouldn't produce correct Hebrew text and would
 * violate this project's i18n rule against hardcoding language-specific strings in components.
 *
 * Cards are laid out with `flex-wrap` (not `grid`) so that an incomplete last row - e.g. one or
 * two cards for a category that ideally shows three per row - centers itself instead of
 * hugging the start/end edge the way an empty grid cell would.
 *
 * Each card gets `featured={project.featured}` (the star badge) but not `type` (the category
 * ribbon) - every use of `ProjectView` today renders a single, already-labeled category (see
 * {@link ProjectsGroupedByView}), so the ribbon would just repeat the section heading above it.
 *
 * @param props - {@link ProjectViewProps}.
 * @returns The ProjectView component.
 */
const ProjectView = (props: ProjectViewProps) => {
    const { projects, type, showViewAllLink = true } = props;

    const { language } = useLanguage();
    const text = projectViewLang[language];

    return (
        <div className="flex flex-col gap-1">
            <div className={`flex items-center ${showViewAllLink ? "justify-between" : ""}`}>
                {/* The title of the project view */}
                <h2 className="text-xl sm:text-2xl font-bold text-color">
                    {text.sectionTitles[type]}
                </h2>
                {/* "View All Projects" - shares CTAButton so it gets the same hover-triggered
                    arrow animation (and RTL mirroring) as every other CTA in the app, plus its
                    own hover underline since this one reads as an inline text link rather than
                    a pill button. Omitted entirely (rather than disabled/hidden) when
                    `showViewAllLink` is false, since on the `/projects` page itself "view all
                    projects" is a no-op - the user is already there. */}
                {showViewAllLink && (
                    <CTAButton
                        href="/projects"
                        label={text.viewAllProjects}
                        className="text-color hover:underline"
                    />
                )}
            </div>
            {/* Separates the title/"View All Projects" row from the card grid below. Explicitly
                colored with the `border-border` token - Tailwind's preflight reset zeroes every
                element's border width by default, and while it re-adds a 1px top border for
                `hr` specifically, that border falls back to `currentColor`, which reads as
                near-invisible against this app's dark background unless given a real color. */}
            <hr className="border-border" />
            {/*
              Should ideally show 3 cards per row, can show 2 or 1 on smaller viewports.
              flex-wrap (instead of grid) so that if there aren't enough project cards to fill
              the last row, the leftover cards center themselves rather than sitting flush
              against the start edge with empty grid cells trailing after them.

              `mt-6` (bigger than the header row's own `gap-1`) intentionally leaves more room
              between the divider and the cards than between the title and the divider - cards
              lift on hover (`ProjectCard`'s `hover:-translate-y-1`), and a gap sized to the
              resting layout alone left hovered cards butting right up against the `hr`.
             */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
                {projects.map((project) => {
                    return (
                        <ProjectCard
                            name={project.content[language].title}
                            key={project.slug}
                            slug={project.slug}
                            stack={project.stack}
                            description={project.content[language].shortDescription}
                            previewImg={project.screenshots?.[0]}
                            featured={project.featured}
                            className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)]"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectView;
