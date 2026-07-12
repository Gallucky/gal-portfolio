import type { Project } from "@data/projects";
import planItTaskManager from "./planit_task_manager/metadata";
import quickCartStorefront from "./quickcart_storefront/metadata";

/**
 * An helper type that represents an application project, which is a kind of project that can be featured.
 *
 * Application projects are typically more complex and showcase a wider range of skills,
 * including programming languages, frameworks, and tools.
 *
 * @see {@link Project} for more information on the structure of a project.
 */
export type ApplicationProject = Project & {
    /** All application projects are of type "application" */
    type: "application";
};

/**
 * The shape individual application project metadata files should conform to.
 * Omits `type` since it's constant for every application project - it's attached
 * automatically below instead of being repeated in each metadata file.
 * (`featured` is kept here since, unlike markup/UI-implementation projects, application
 * projects can be featured or not on a per-project basis.)
 */
export type ApplicationProjectMetadata = Omit<ApplicationProject, "type">;

const rawApplicationProjects: ApplicationProjectMetadata[] = [
    // Import individual project metadata objects here
    planItTaskManager,
    quickCartStorefront,
];

/** An array of application projects as project-metadata objects that are in the website. */
const applicationProjects: ApplicationProject[] = rawApplicationProjects.map((project) => ({
    ...project,
    type: "application",
}));

export default applicationProjects;
