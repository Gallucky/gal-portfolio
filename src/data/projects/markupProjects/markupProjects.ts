import type { Project } from "@data/projects";
import countriesFlags from "./countries_flags/metadata";
import orensMathGame from "./oren's_math_game/metadata";
import ticTacToe from "./tic_tac_toe/metadata";
import usersManagement from "./users_management/metadata";
import weatherCast from "./weather_cast/metadata";
import websiteBuilder from "./website_builder/metadata";

export type MarkupProject = Omit<Project, "featured"> & {
    featured: false; // All markup projects are not featured
};

const markupProjects: MarkupProject[] = [
    countriesFlags,
    orensMathGame,
    ticTacToe,
    usersManagement,
    weatherCast,
    websiteBuilder,
];

export default markupProjects;
