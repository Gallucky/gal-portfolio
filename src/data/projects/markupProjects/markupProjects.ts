import type { Project } from "@data/projects";
import countriesFlags from "./countries_flags/metadata";
import orensMathGame from "./oren's_math_game/metadata";
import ticTacToe from "./tic_tac_toe/metadata";
import usersManagement from "./users_management/metadata";
import weatherCast from "./weather_cast/metadata";
import websiteBuilder from "./website_builder/metadata";

/**
 * An helper type that represents a markup project, which is a kind of project that is not featured.
 *
 * Markup projects are typically simpler and focus on showcasing specific skills or concepts,
 * rather than being highlighted as featured projects.
 *
 * Those skills mentioned are mainly related to HTML, CSS, and JavaScript,
 * and the projects are often used to demonstrate proficiency in web development and design.
 *
 * @see {@link Project} for more information on the structure of a project.
 */
export type MarkupProject = Omit<Project, "featured"> & {
    featured: false; // All markup projects are not featured
    type: "markup"; // All markup projects are of type "markup"
};

/**
 * The shape individual markup project metadata files should conform to.
 * Omits `type` and `featured` since those are constant for every markup project -
 * they're attached automatically below instead of being repeated in each metadata file.
 */
export type MarkupProjectMetadata = Omit<MarkupProject, "type" | "featured">;

const rawMarkupProjects: MarkupProjectMetadata[] = [
    countriesFlags,
    orensMathGame,
    ticTacToe,
    usersManagement,
    weatherCast,
    websiteBuilder,
];

/** An array of markup projects as project-metadata objects that are in the website. */
const markupProjects: MarkupProject[] = rawMarkupProjects.map((project) => ({
    ...project,
    type: "markup",
    featured: false,
}));

export default markupProjects;
