import type { Project } from "@/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import CTAButton from "@components/section/CTA/CTAButton";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import { projectViewLang } from "@lang/ui/Projects/ProjectView/projectView";

/**
 * The project categories a {@link ProjectView} can render: the four project "kinds" defined
 * in `src/data/projects.ts` (`uiImplementation`, `markup`, `application`, `scripts`) plus
 * `featured`, used for the curated cross-category list shown on the home page
 * (`featuredProjects`).
 *
 * Exported (not just used internally) so {@link ProjectViewContent} in the lang file can key its
 * `sectionTitles` translations against the same union instead of redeclaring it.
 */
export type ProjectViewType =
    | "uiImplementation"
    | "markup"
    | "application"
    | "scripts"
    | "featured";

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
 * Cards are laid out with CSS `grid` (same `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` track
 * setup {@link ProjectsGridView} uses) rather than a manually `w-[calc(...)]`-sized `flex-wrap`
 * row - grid's own column tracks size every card equally and reflow at the same breakpoints
 * without needing per-breakpoint width math kept in sync with the row's `gap`, which is what
 * previously let cards drift out of sync (uneven widths, cards visually "squished" narrower
 * than their row siblings) whenever that math and the actual gap disagreed.
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
            {/* `flex-wrap` + `gap-x-3 gap-y-1` (not just `justify-between`) so that on very
                narrow screens, where the title and "View All Projects" together don't fit one
                row at a readable size, the CTA drops to its own line with breathing room instead
                of the two being forced to overlap/crowd each other on a single row. */}
            <div
                className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${showViewAllLink ? "justify-between" : ""}`}>
                {/* The title of the project view. Sized with `clamp()` (min 1.125rem, scaling
                    with viewport width, capped at 1.5rem) rather than a `text-xl sm:text-2xl`
                    breakpoint jump - a fluid size shrinks gradually as the screen narrows, so it
                    stays legible and proportionate down to small phones instead of holding a
                    fixed 20px that (combined with the CTA beside it) reads as too large and
                    cramped once the row gets tight. */}
                <h2 className="text-[clamp(1.125rem,4vw,1.5rem)] font-bold text-color">
                    {text.sectionTitles[type]}
                </h2>
                {/* "View All Projects" - shares CTAButton so it gets the same hover-triggered
                    arrow animation (and RTL mirroring) as every other CTA in the app, plus its
                    own hover underline since this one reads as an inline text link rather than
                    a pill button. Omitted entirely (rather than disabled/hidden) when
                    `showViewAllLink` is false, since on the `/projects` page itself "view all
                    projects" is a no-op - the user is already there. Its own text is a smaller,
                    fluid `clamp()` too (never as large as the heading) so it keeps reading as a
                    secondary link rather than competing with the title for space/attention. */}
                {showViewAllLink && (
                    <CTAButton
                        href="/projects"
                        label={text.viewAllProjects}
                        className="whitespace-nowrap text-[clamp(0.8rem,2.5vw,1rem)] text-color hover:underline"
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
              1 column by default, 2 from `sm:`, 3 from `lg:` - grid's tracks size every card in
              a row equally (and every row the same, since they share the same track sizes)
              without any manual per-card width math, so cards can't drift out of sync into
              uneven/"squished" widths the way the old `flex-wrap` + `w-[calc(...)]` combo could
              if that math and the gap below ever disagreed.

              The `"featured"` view (the home page's curated cross-category list) uses a
              different track definition instead: `repeat(auto-fit, minmax(16rem, 22rem))` with
              `justify-center`. Unlike fixed `1fr` tracks - which always stretch to fill every
              column of the row regardless of how many cards there are, leaving dead space (or a
              stretched, oversized lone card) whenever `featuredProjects` doesn't happen to be a
              multiple of the column count - `auto-fit` only ever generates as many tracks as
              there are cards to fill them, each capped at a natural card width rather than
              stretching, so `justify-center` can center that row as a unit instead of pinning it
              to the start. The other (real-category) views intentionally keep the fixed-column
              grid instead: there, an under-filled last row is normal/expected (e.g. 4 projects
              in a 3-column grid), and centering it would misleadingly suggest those "leftover"
              cards are a distinct, deliberately-curated group rather than just where the list
              happened to end.

              `mt-6` (bigger than the header row's own `gap-1`) intentionally leaves more room
              between the divider and the cards than between the title and the divider - cards
              lift on hover (`ProjectCard`'s `hover:-translate-y-1`), and a gap sized to the
              resting layout alone left hovered cards butting right up against the `hr`.
             */}
            <div
                className={`mt-6 grid gap-4 ${
                    type === "featured"
                        ? "grid-cols-[repeat(auto-fit,minmax(16rem,22rem))] justify-center"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}>
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
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectView;
