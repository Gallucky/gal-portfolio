import { projectsPageLang as lang } from "@lang/pages/Projects/projects";
import { LayoutGrid, List, Rows3, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import { allProjects } from "@/data/projects";
import Section from "@components/section/Section";
import ProjectsGridView from "./ProjectsGridView";
import ProjectsGroupedByView from "./ProjectsGroupedByView";
import ProjectsListView from "./ProjectsListView";

type ProjectsPageViewType = "grouped-by" | "grid" | "list";
type ProjectsPageSortType = "featuredFirst" | "nameAsc" | "nameDesc";

/** The view toggle's buttons, in display order - each paired with the icon that represents it. */
const VIEW_TYPES: { value: ProjectsPageViewType; Icon: typeof Rows3 }[] = [
    { value: "grouped-by", Icon: Rows3 },
    { value: "grid", Icon: LayoutGrid },
    { value: "list", Icon: List },
];

/**
 * The Projects page of the application, reachable at `/projects`. The dedicated, full listing
 * counterpart to the home page's curated "Featured Projects" section - every project in
 * {@link allProjects}, searchable, sortable, and browsable in one of three layouts:
 * - `"grouped-by"` (default) - {@link ProjectsGroupedByView}, sectioned by category.
 * - `"grid"` - {@link ProjectsGridView}, a flat multi-column grid.
 * - `"list"` - {@link ProjectsListView}, a flat single column.
 *
 * Filtering and sorting happen once here (via `visibleProjects`) rather than inside each view
 * component, so switching views mid-search/sort doesn't lose or recompute that state - the
 * three view components stay "dumb" renderers of whatever `projects` array they're handed.
 *
 * `pt-[var(--navbar-height)]` clears the fixed Navbar the same way {@link AboutPage} does -
 * this page has no Hero above it to push content down naturally.
 *
 * @see src/router/router.tsx for how this page is composed into the route tree.
 * @returns The ProjectsPage page component.
 */
const ProjectsPage = () => {
    const { language } = useLanguage();
    const text = lang[language];

    const [view, setView] = useState<ProjectsPageViewType>("grouped-by");
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState<ProjectsPageSortType>("featuredFirst");

    const visibleProjects = useMemo(() => {
        const query = search.trim().toLowerCase();

        const filtered = query
            ? allProjects.filter((project) => {
                  const content = project.content[language];
                  const haystack = [content.title, content.shortDescription, ...project.stack]
                      .join(" ")
                      .toLowerCase();
                  return haystack.includes(query);
              })
            : allProjects;

        // Sort a copy - `filtered` is the shared `allProjects` array reference itself whenever
        // there's no active search, and sorting in place would resort that module-level
        // singleton for every future page visit/render.
        return [...filtered].sort((a, b) => {
            switch (sortBy) {
                case "nameAsc":
                    return a.content[language].title.localeCompare(b.content[language].title);
                case "nameDesc":
                    return b.content[language].title.localeCompare(a.content[language].title);
                case "featuredFirst":
                default:
                    if (a.featured !== b.featured) return a.featured ? -1 : 1;
                    return a.content[language].title.localeCompare(b.content[language].title);
            }
        });
    }, [search, sortBy, language]);

    return (
        <div className="w-[90%] sm:w-[75%] flex flex-col items-center justify-center justify-self-center pt-[var(--navbar-height)]">
            <Section className="flex-col" id="projects">
                <div className="w-full max-w-[100ch] mx-auto px-4 flex flex-col items-center">
                    <div className="text-center">
                        <h2 className="text-xs text-color-muted font-bold font-assistant mb-2 tracking-widest">
                            {text.subtitle.toUpperCase()}
                        </h2>
                        <h1 className="text-3xl text-primary font-bold text-outline font-Heebo tracking-tight mb-4">
                            {text.title}
                        </h1>
                        <p className="max-w-[70ch] text-base text-color tracking-wide font-body leading-relaxed">
                            {text.description}
                        </p>
                    </div>

                    {/* Controls: search, view toggle, sort */}
                    <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        {/* Search */}
                        <div className="relative w-full sm:max-w-xs">
                            <Search
                                aria-hidden="true"
                                className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-color-muted"
                            />
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder={text.search.placeholder}
                                aria-label={text.search.label}
                                className="w-full rounded-lg border border-border bg-bg py-2 ps-9 pe-9 text-color placeholder:text-color-muted transition-colors focus:outline-none focus:border-primary"
                            />
                            {search && (
                                <button
                                    type="button"
                                    onClick={() => setSearch("")}
                                    aria-label={text.search.clearLabel}
                                    className="absolute end-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-color-muted transition-colors hover:text-color">
                                    <X aria-hidden="true" className="size-4" />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            {/* View toggle */}
                            <div
                                role="group"
                                aria-label={text.viewToggle.groupLabel}
                                className="flex items-center gap-1 rounded-lg border border-border p-1">
                                {VIEW_TYPES.map(({ value, Icon }) => {
                                    const viewLabel =
                                        text.viewToggle[
                                            value === "grouped-by" ? "groupedBy" : value
                                        ];

                                    return (
                                        <button
                                            key={value}
                                            type="button"
                                            onClick={() => setView(value)}
                                            aria-pressed={view === value}
                                            aria-label={viewLabel}
                                            title={viewLabel}
                                            className={`rounded-md p-1.5 transition-colors ${
                                                view === value
                                                    ? "bg-primary text-bg-dark"
                                                    : "text-color-muted hover:text-color"
                                            }`}>
                                            <Icon aria-hidden="true" className="size-4" />
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Sort */}
                            <select
                                value={sortBy}
                                onChange={(event) =>
                                    setSortBy(event.target.value as ProjectsPageSortType)
                                }
                                aria-label={text.sort.label}
                                className="rounded-lg border border-border bg-bg px-3 py-2 text-sm text-color transition-colors focus:outline-none focus:border-primary">
                                <option value="featuredFirst">
                                    {text.sort.options.featuredFirst}
                                </option>
                                <option value="nameAsc">{text.sort.options.nameAsc}</option>
                                <option value="nameDesc">{text.sort.options.nameDesc}</option>
                            </select>
                        </div>
                    </div>

                    {/* The projects themselves, organized by view type - or the empty state when
                        the active search matches nothing. */}
                    <div className="mt-8 w-full">
                        {visibleProjects.length === 0 ? (
                            <div className="flex flex-col items-center gap-2 py-16 text-center">
                                <h3 className="text-lg font-bold text-color">
                                    {text.noResults.title}
                                </h3>
                                <p className="text-sm text-color-muted">
                                    {text.noResults.message}
                                </p>
                            </div>
                        ) : (
                            <>
                                {view === "grouped-by" && (
                                    <ProjectsGroupedByView projects={visibleProjects} />
                                )}

                                {view === "grid" && <ProjectsGridView projects={visibleProjects} />}

                                {view === "list" && <ProjectsListView projects={visibleProjects} />}
                            </>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default ProjectsPage;
