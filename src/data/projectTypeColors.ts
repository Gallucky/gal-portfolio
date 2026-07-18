import type { CategorizedProject } from "./projects";

/**
 * The category ribbon badge's colors for each {@link CategorizedProject} `type`, expressed as
 * Tailwind utility class pairs (background + matching foreground) built on this app's existing
 * semantic color tokens (see `globals.css`'s `--color-info`/`--color-success`/`--color-secondary`)
 * rather than one-off hex values - so each category badge automatically gets the same dark/light
 * theme handling every other semantic-colored element (buttons, CTAs) already has, with zero
 * extra logic here.
 *
 * Deliberately avoids `primary` (already the site's CTA/link/hover-state color - reusing it here
 * would make the badge read as "just another button" instead of a distinct category signal) and
 * `danger` (reserved for form/error states elsewhere).
 *
 * @see {@link ProjectCard} - the only current consumer, renders this as a diagonal corner ribbon.
 */
export const projectTypeBadgeColors: Record<
    CategorizedProject["type"],
    { background: string; text: string }
> = {
    uiImplementation: { background: "bg-info", text: "text-bg-dark" },
    markup: { background: "bg-success", text: "text-bg-dark" },
    application: { background: "bg-secondary", text: "text-bg-dark" },
    scripts: { background: "bg-warning", text: "text-bg-dark" },
};
