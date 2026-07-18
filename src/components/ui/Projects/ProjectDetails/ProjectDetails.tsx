import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import { useTheme } from "@/app/providers/Theme/useTheme";
import CTAButton from "@components/section/CTA/CTAButton";
import Section from "@components/section/Section";
import Star from "@components/ui/Star";
import ErrorPage from "@/pages/Error/Error.page";
import { allProjects } from "@/data/projects";
import { getTechColor } from "@/data/techColors";
import { projectTypeBadgeColors } from "@/data/projectTypeColors";
import { projectCardLang } from "@lang/ui/Projects/ProjectCard/projectCard";
import { projectDetailsLang as lang } from "@lang/ui/Projects/ProjectDetails/projectDetails";
import { renderWithInlineCode } from "@utils/text/renderWithInlineCode";

/**
 * Renders the full details page for a single project, reachable at `/projects/:slug` - the
 * click-through destination for every {@link ProjectCard} across the site (home page's
 * featured grid, the `/projects` listing's three view modes).
 *
 * Looks the project up from {@link allProjects} by the route's `slug` param rather than
 * receiving it as a prop, since this component is rendered directly by the router (via
 * {@link ProjectDetailsPage}) with no parent that already has the project in hand. Renders
 * {@link ErrorPage} in place for any `slug` that doesn't match a known project (typed
 * directly, stale link, project renamed) instead of crashing on a `undefined` lookup.
 *
 * Mirrors {@link ProjectCard}'s visual language (the same category ribbon colors, brand-color
 * stack badges via {@link getTechColor}, the same gradient placeholder tile when a project has
 * no screenshots yet) so a project reads as the same "thing" on the card and on its own page,
 * just expanded - plus the deeper `content` fields ({@link ProjectContent.overview},
 * `architecture`, `challenges`, `lessons`) that don't fit on a card.
 *
 * GitHub/live links are rendered with a shared {@link CTAButton}, styled as an outline pill
 * for the repo links and a solid pill for the live site - matching {@link CTASection}'s
 * primary/secondary pairing (the live site is the "main" outbound action, repos are secondary).
 *
 * Content width is deliberately two-tiered: the outer container (badges, title, stack, links,
 * screenshots) stretches to `100ch` - wide enough for the title to hold a longer project name
 * on one line and for screenshots to render at a decent size - while the prose block below
 * (overview/architecture/challenges/lessons) is capped narrower (`75ch`), since long-form text
 * that wide would produce uncomfortably long line lengths to read.
 *
 * Every decorative badge (category ribbon, featured pill, stack pills) is `select-none` - they
 * carry no information a user would ever want to copy/paste, so allowing text selection on them
 * just risked an accidental drag-select snagging a badge's label while a visitor is skimming
 * the page.
 *
 * @see {@link ProjectDetailsPage} for the page wrapper this is rendered inside of.
 * @see src/router/router.tsx for the `/projects/:slug` route this is reached through.
 * @returns The ProjectDetails component.
 */
const ProjectDetails = () => {
    const { slug } = useParams();
    const { language } = useLanguage();
    const { themeValue } = useTheme();
    const isRTL = language === "he";

    const text = lang[language];
    const cardText = projectCardLang[language];

    const project = allProjects.find((p) => p.slug === slug);

    // No project matches this slug (stale/typo'd link, renamed/removed project) - fall back
    // to the same 404 shown for any other unknown route rather than crashing on `undefined`.
    if (!project) {
        return <ErrorPage />;
    }

    const content = project.content[language];

    return (
        <Section className="flex-col" id="project-details">
            <div className="w-full max-w-[100ch] mx-auto px-4 flex flex-col items-center">
                {/* Back to the full listing. Arrow mirrors under RTL the same way every other
                    directional icon in the app does (e.g. {@link ProjectCard}'s "View Project"
                    arrow), so it still visually points "back" instead of pointing further into
                    the reading direction. */}
                <div className="w-full">
                    <Link
                        to="/projects"
                        className="group inline-flex items-center gap-2 text-sm font-bold text-color-muted transition-colors hover:text-primary">
                        <span
                            className="inline-flex transition-transform duration-200 group-hover:-translate-x-1"
                            style={isRTL ? { transform: "scaleX(-1)" } : undefined}>
                            <ArrowLeft aria-hidden="true" className="size-4" />
                        </span>
                        {text.backToProjects}
                    </Link>
                </div>

                {/* Header: category/featured badges, title, short description - the same
                    eyebrow-less "big title" treatment {@link AboutSection}/{@link ProjectsPage}
                    use, badges standing in for the small muted eyebrow those pages have. */}
                <div className="mt-6 flex flex-col items-center text-center">
                    <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
                        <span
                            className={`select-none rounded-full px-3 py-1 text-xs font-extrabold tracking-wide uppercase ${projectTypeBadgeColors[project.type].background} ${projectTypeBadgeColors[project.type].text}`}>
                            {cardText.typeBadge[project.type]}
                        </span>
                        {project.featured && (
                            <span className="inline-flex select-none items-center gap-1.5 rounded-full bg-warning px-3 py-1 text-xs font-extrabold text-bg-dark">
                                <span className="relative inline-block size-3">
                                    <Star
                                        id={`featured-details-${project.slug}`}
                                        color="text-bg-dark"
                                        fillState="full"
                                    />
                                </span>
                                {cardText.featuredBadge}
                            </span>
                        )}
                    </div>
                    <h1 className="text-outline mb-4 font-Heebo text-2xl font-bold tracking-tight text-primary">
                        {content.title}
                    </h1>
                    <p className="max-w-[70ch] mx-auto text-base leading-relaxed font-body tracking-wide text-color">
                        {content.shortDescription}
                    </p>
                </div>

                {/* Stack badges - same brand-colored pill treatment as {@link ProjectCard}, but
                    unclamped here since the details page has room to show every technology
                    instead of capping at 3 + overflow. */}
                <ul aria-label="Technology stack" className="mt-6 flex flex-wrap justify-center gap-2">
                    {project.stack.map((tech) => {
                        const hex = getTechColor(tech, themeValue);
                        return (
                            <li
                                key={tech}
                                style={hex ? { color: hex, backgroundColor: `${hex}26` } : undefined}
                                className={`select-none rounded-full px-3 py-1 text-xs font-medium ${
                                    hex ? "" : "bg-color-muted/15 text-color-muted"
                                }`}>
                                {tech}
                            </li>
                        );
                    })}
                </ul>

                {/* Outbound links - omitted entirely (not disabled/greyed) when a project
                    doesn't have a given link, since e.g. markup exercises often have no
                    live URL and UI implementations often have no backend repo. */}
                {((project.githubLinks && project.githubLinks.length > 0) || project.liveUrl) && (
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                        {project.githubLinks?.map((githubLink) => (
                            <CTAButton
                                key={githubLink.url}
                                label={githubLink.label}
                                href={githubLink.url}
                                target="_blank"
                                icon={SiGithub}
                                animateIconOnHover={false}
                                className="rounded-3xl border border-primary px-4 py-2 font-bold text-primary hover:bg-primary/10"
                            />
                        ))}
                        {project.liveUrl && (
                            <CTAButton
                                label={text.links.liveUrl}
                                href={project.liveUrl}
                                target="_blank"
                                icon={ExternalLink}
                                animateIconOnHover={false}
                                className="rounded-3xl bg-primary px-4 py-2 font-bold text-bg-dark hover:bg-secondary"
                            />
                        )}
                    </div>
                )}

                {/* Screenshot gallery - a single full-width shot for one screenshot, a 2-column
                    grid for more than one. Falls back to the same gradient placeholder tile
                    {@link ProjectCard} shows for a missing preview image, so a project without
                    screenshots yet still looks intentional rather than broken. */}
                <div className="mt-10 w-full">
                    {project.screenshots && project.screenshots.length > 0 ? (
                        <div
                            className={`grid gap-4 ${project.screenshots.length > 1 ? "sm:grid-cols-2" : ""}`}>
                            {project.screenshots.map((screenshot) => (
                                <img
                                    key={screenshot.url}
                                    src={screenshot.url}
                                    alt={screenshot.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full rounded-lg border border-border object-cover shadow-lg"
                                />
                            ))}
                        </div>
                    ) : (
                        <div
                            role="img"
                            aria-label={text.noScreenshots}
                            className="aspect-video w-full rounded-lg border border-border bg-linear-to-br from-primary/70 via-secondary/50 to-bg-dark"
                        />
                    )}
                </div>

                {/* Overview / architecture / challenges / lessons - the deeper narrative fields
                    that don't fit on a {@link ProjectCard}. Each section gets its own `hr`
                    directly under its heading (matching {@link ProjectView}'s title/divider
                    pattern) rather than one divider between sections, so every section reads as
                    its own clearly separated block instead of the eye needing to infer where
                    one heading's content ends and the next begins. Challenges/lessons are only
                    rendered when non-empty since {@link UIImplementationProjectMetadata}
                    projects don't carry `lessons` content. Capped at `75ch` (narrower than the
                    `100ch` outer container) for comfortable reading line lengths. */}
                <div className="mt-10 flex w-full max-w-[75ch] flex-col gap-8 text-start">
                    <div>
                        <h2 className="mb-2 font-titles text-lg font-bold text-color">
                            {text.sectionTitles.overview}
                        </h2>
                        <hr className="mb-4 border-border" />
                        <p className="text-base leading-relaxed font-body tracking-wide text-color">
                            {renderWithInlineCode(content.overview)}
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 font-titles text-lg font-bold text-color">
                            {text.sectionTitles.architecture}
                        </h2>
                        <hr className="mb-4 border-border" />
                        <p className="text-base leading-relaxed font-body tracking-wide text-color">
                            {renderWithInlineCode(content.architecture)}
                        </p>
                    </div>

                    {content.challenges.length > 0 && (
                        <div>
                            <h2 className="mb-2 font-titles text-lg font-bold text-color">
                                {text.sectionTitles.challenges}
                            </h2>
                            <hr className="mb-4 border-border" />
                            <ul className="flex flex-col gap-2 ps-5 list-disc">
                                {content.challenges.map((challenge) => (
                                    <li
                                        key={challenge}
                                        className="text-base leading-relaxed font-body text-color">
                                        {renderWithInlineCode(challenge)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {content.lessons.length > 0 && (
                        <div>
                            <h2 className="mb-2 font-titles text-lg font-bold text-color">
                                {text.sectionTitles.lessons}
                            </h2>
                            <hr className="mb-4 border-border" />
                            <ul className="flex flex-col gap-2 ps-5 list-disc">
                                {content.lessons.map((lesson) => (
                                    <li
                                        key={lesson}
                                        className="text-base leading-relaxed font-body text-color">
                                        {renderWithInlineCode(lesson)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default ProjectDetails;
