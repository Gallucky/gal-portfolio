import type { Project } from "@data/projects";
// No script projects added yet - uncomment imports and add entries below as they're written.

/**
 * A scripts project - a standalone utility script (e.g. PowerShell automation) rather than a
 * full application or UI exercise, always unfeatured.
 *
 * @see {@link Project} for the shared shape every project (of any type) conforms to.
 */
export type ScriptsProject = Omit<Project, "featured"> & {
    featured: false; // All scripts projects are not featured
    type: "scripts"; // All scripts projects are of type "scripts"
};

/**
 * The shape individual scripts project metadata files should conform to.
 * Omits `type` and `featured` since those are constant for every scripts project - they're
 * attached automatically below instead of being repeated in each metadata file.
 */
export type ScriptsProjectMetadata = Omit<ScriptsProject, "type" | "featured">;

// Add entries (and their import above) here as scripts get written up.
const rawScriptsProjects: ScriptsProjectMetadata[] = [];

/** An array of scripts projects as project-metadata objects that are in the website. */
const scriptsProjects: ScriptsProject[] = rawScriptsProjects.map((project) => ({
    ...project,
    type: "scripts",
    featured: false,
}));

export default scriptsProjects;
