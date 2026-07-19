import ProjectView from "@/components/ui/Projects/ProjectView/ProjectView";
import { featuredProjects } from "@/data/projects";
import Section from "@components/section/Section";

const ProjectsSection = () => {
    return (
        <Section>
            {/* `w-full` (matching every other section's own content wrapper, e.g.
                {@link ProjectsPage}'s identical `max-w-[100ch]` container) so this section holds
                its full width regardless of what's inside - `Section` itself only centers its
                child (`justify-center items-center`, no `stretch`), so without an explicit width
                here `ProjectView`'s wrapper would otherwise shrink to fit its content instead:
                with cards present that content happens to read as roughly full-width already,
                but with zero featured projects (e.g. before any project is marked `featured`)
                the wrapper would shrink down to just the title/"View All Projects" row's own
                width, which reads as an oddly narrow, off-center heading. */}
            <div className="w-full max-w-[100ch] mx-auto px-4">
                <ProjectView type="featured" projects={featuredProjects} />
            </div>
        </Section>
    );
};

export default ProjectsSection;
