import type { Project, ProjectContent } from "@data/projects";
import type { SupportedLanguages } from "@/types/Languages";
import leadingYouForward from "./leading_you_forward/metadata";
import hereAndNow from "./here_and_now/metadata";
import goodCoffeeForGoodDay from "./good_coffee_for_good_day/metadata";
import letUsLeadYouForward from "./let_us_lead_you_forward/metadata";
import discoverTheWorld from "./discover_the_world/metadata";
import thinkOutsideTheBox from "./think_outside_the_box/metadata";
import freeAdvisement from "./free_advisement/metadata";

// FIXME: missing JSDoc block per project-rules.md Code Writing/Style rule 6 (sibling type
// `UIImplementationProjectMetadata` below has one — this type should too).
export type UIImplementationProject = Omit<Project, "featured"> & {
    featured: false; // All UI implementations are not featured
    type: "uiImplementation"; // All UI implementations are of type "uiImplementation"
    content: {
        [key in SupportedLanguages]: Omit<ProjectContent, "lessons"> & {
            lessons: string[]; // UI implementations do not have lessons learned
        };
    };
};

/**
 * The shape individual UI implementation project metadata files should conform to.
 * Omits `type` and `featured` since those are constant for every UI implementation project -
 * they're attached automatically below instead of being repeated in each metadata file.
 */
export type UIImplementationProjectMetadata = Omit<UIImplementationProject, "type" | "featured">;

const rawUiImplementationProjects: UIImplementationProjectMetadata[] = [
    // Import individual project metadata objects here
    leadingYouForward,
    hereAndNow,
    goodCoffeeForGoodDay,
    letUsLeadYouForward,
    discoverTheWorld,
    thinkOutsideTheBox,
    freeAdvisement,
];

/** An array of UI implementation projects as project-metadata objects that are in the website. */
const uiImplementationProjects: UIImplementationProject[] = rawUiImplementationProjects.map((project) => ({
    ...project,
    type: "uiImplementation",
    featured: false,
}));

export default uiImplementationProjects;
