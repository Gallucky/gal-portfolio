import ProjectDetails from "@components/ui/Projects/ProjectDetails/ProjectDetails";

/**
 * The project details page, reachable at `/projects/:slug` - the click-through destination
 * for every {@link ProjectCard} across the site. Gives each project its own dedicated,
 * linkable/shareable route rather than an in-page modal or expandable card.
 *
 * `pt-[var(--navbar-height)]` clears the fixed {@link Navbar} the same way {@link AboutPage}
 * and {@link ProjectsPage} do - this page has no Hero above it to push content down naturally.
 *
 * @see {@link ProjectDetails} for the actual content rendered on this page (including the
 * slug lookup and the 404 fallback for an unknown project).
 * @see src/router/router.tsx for how this page is composed into the route tree.
 * @returns The ProjectDetailsPage page component.
 */
const ProjectDetailsPage = () => {
    return (
        <div className="w-[90%] sm:w-[75%] flex flex-col items-center justify-center justify-self-center pt-[var(--navbar-height)]">
            <ProjectDetails />
        </div>
    );
};

export default ProjectDetailsPage;
