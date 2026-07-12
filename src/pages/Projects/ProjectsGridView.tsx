import type { CategorizedProject } from "@/data/projects";
import ProjectCard from "@components/ui/Projects/ProjectCard/ProjectCard";
import { useLanguage } from "@/app/providers/Language/useLanguage";

type ProjectsGridViewProps = {
    /** The projects to render, already filtered/sorted by {@link ProjectsPage}. */
    projects: CategorizedProject[];
};

/**
 * Grid view for all projects: every project rendered as a {@link ProjectCard} in a responsive,
 * multi-column grid with no category grouping - the flat counterpart to
 * {@link ProjectsGroupedByView}'s categorized sections and {@link ProjectsListView}'s single
 * column.
 *
 * Since this view mixes every category together (unlike {@link ProjectsGroupedByView}, which
 * groups by category and would make a per-card category badge redundant), each card is given
 * its `type` so {@link ProjectCard} renders the diagonal category ribbon - the same reasoning
 * applies to the featured star badge.
 *
 * @param props - {@link ProjectsGridViewProps}.
 * @returns ProjectsGridView component.
 */
const ProjectsGridView = (props: ProjectsGridViewProps) => {
    const { projects } = props;
    const { language } = useLanguage();

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard
                    key={project.slug}
                    slug={project.slug}
                    name={project.content[language].title}
                    description={project.content[language].shortDescription}
                    stack={project.stack}
                    previewImg={project.screenshots?.[0]}
                    type={project.type}
                    featured={project.featured}
                />
            ))}
        </div>
    );
};

export default ProjectsGridView;
