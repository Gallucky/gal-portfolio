import { useLanguage } from "@/app/providers/Language/useLanguage";
import type { CategorizedProject } from "@/data/projects";
import ProjectCard from "@components/ui/Projects/ProjectCard/ProjectCard";

type ProjectsListViewProps = {
    /** The projects to render, already filtered/sorted by {@link ProjectsPage}. */
    projects: CategorizedProject[];
};

/**
 * List view for all projects: every project rendered as a {@link ProjectCard} stacked in a
 * single, wide column - denser for scanning many projects top-to-bottom than
 * {@link ProjectsGridView}'s multi-column grid. Each card uses {@link ProjectCard}'s
 * `layout="horizontal"` (image beside the content instead of on top), which is what keeps rows
 * short and wide rather than reusing the tall, image-on-top card the grid/grouped views use -
 * `ProjectCard` keeps that row shape at every breakpoint (a small thumbnail on mobile, growing
 * wider from `sm:` up) rather than only on wider screens, so this view stays visually distinct
 * from {@link ProjectsGridView} on mobile too instead of both collapsing into the same stacked
 * card.
 *
 * Like {@link ProjectsGridView}, this view mixes every category together, so each card gets its
 * `type` (renders the category badge) and `featured` (renders the star badge).
 *
 * @param props - {@link ProjectsListViewProps}.
 * @returns ProjectsListView component.
 */
const ProjectsListView = (props: ProjectsListViewProps) => {
    const { projects } = props;
    const { language } = useLanguage();

    return (
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
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
                    layout="horizontal"
                    className="w-full"
                />
            ))}
        </div>
    );
};

export default ProjectsListView;
