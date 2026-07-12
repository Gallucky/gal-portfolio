import type { CategorizedProject } from "@/data/projects";
import ProjectView, { type ProjectViewType } from "@components/ui/Projects/ProjectView/ProjectView";

type ProjectsGroupedByViewProps = {
    /** The projects to render, already filtered/sorted by {@link ProjectsPage}. Grouped here by
     * each project's `type` discriminant (see {@link CategorizedProject}). */
    projects: CategorizedProject[];
};

/** The real project categories a project can belong to - {@link ProjectViewType} minus
 * `"featured"`, which is a home-page-only curated cross-category list, not a category a project
 * actually belongs to. Ordered by rough project complexity (most to least), rather than
 * alphabetically or by declaration order in `src/data/projects.ts`. */
const CATEGORY_ORDER: Exclude<ProjectViewType, "featured">[] = [
    "application",
    "uiImplementation",
    "markup",
];

/**
 * The component that is used to display the projects grouped by their category:
 * `uiImplementation`, `markup`, and `application`. Each non-empty category renders as its own
 * {@link ProjectView} section (title + card grid) - the same component the home page's
 * "Featured Projects" section uses - but with `showViewAllLink` turned off, since a "View All
 * Projects" link back to `/projects` doesn't make sense while already on that page.
 *
 * A category with zero matching projects (e.g. every `application` project filtered out by an
 * active search) is skipped entirely rather than rendered with an empty grid, so the page never
 * shows a heading with nothing under it.
 *
 * @param props - {@link ProjectsGroupedByViewProps}.
 * @returns ProjectsGroupedByView component.
 */
const ProjectsGroupedByView = (props: ProjectsGroupedByViewProps) => {
    const { projects } = props;

    return (
        <div className="flex flex-col gap-10">
            {CATEGORY_ORDER.map((category) => {
                const categoryProjects = projects.filter((project) => project.type === category);

                if (categoryProjects.length === 0) return null;

                return (
                    <ProjectView
                        key={category}
                        type={category}
                        projects={categoryProjects}
                        showViewAllLink={false}
                    />
                );
            })}
        </div>
    );
};

export default ProjectsGroupedByView;
