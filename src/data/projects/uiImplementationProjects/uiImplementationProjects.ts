import type { Project, ProjectContent } from "@data/projects";
import type { SupportedLanguages } from "@/types/Languages";
import leadingYouForward from "./leading_you_forward/metadata";
import hereAndNow from "./here_and_now/metadata";
import goodCoffeeForGoodDay from "./good_coffee_for_good_day/metadata";
import letUsLeadYouForward from "./let_us_lead_you_forward/metadata";
import discoverTheWorld from "./discover_the_world/metadata";
import thinkOutsideTheBox from "./think_outside_the_box/metadata";
import freeAdvisement from "./free_advisement/metadata";

export type UIImplementationProject = Omit<Project, "featured"> & {
    featured: false; // All UI implementations are not featured
    content: {
        [key in SupportedLanguages]: Omit<ProjectContent, "lessons"> & {
            lessons: string[]; // UI implementations do not have lessons learned
        };
    };
};

const uiImplementationProjects: UIImplementationProject[] = [
    // Import individual project metadata objects here
    leadingYouForward,
    hereAndNow,
    goodCoffeeForGoodDay,
    letUsLeadYouForward,
    discoverTheWorld,
    thinkOutsideTheBox,
    freeAdvisement,
];

export default uiImplementationProjects;
