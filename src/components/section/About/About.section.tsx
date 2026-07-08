import { useState } from "react";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import { useTheme } from "@/app/providers/Theme/useTheme";
import Section from "../Section";
import { aboutSectionLang as lang } from "@lang/section/About/about";
import { glossarySectionLang } from "@lang/section/About/glossary";
import { skills } from "@data/skills";
import { renderWithGlossary } from "@utils/text/renderWithGlossary";

/**
 * Renders the About section of the portfolio: a centered eyebrow/title, a short intro
 * paragraph, a "Skills" card listing his core technologies as clickable, brand-color-coded
 * badges, and the rest of the bio. Content is translated per {@link useLanguage}.
 *
 * Layout is a single stacked column (title -> intro -> skills -> rest of the bio) rather
 * than a side-by-side grid: the skills sit right after the short intro so the badges read
 * as "here's what I know" bridging into "here's what I've built with it" in the paragraphs
 * that follow, instead of competing for attention next to the full bio.
 *
 * Follows the same content/translation pattern as {@link HeroSection} and
 * {@link LanguagesSection} - content comes from a per-language lookup, while the skill
 * list itself ({@link skills}) is untranslated data (technology names don't change across
 * languages).
 *
 * Each badge picks {@link Skill.lightColor} over {@link Skill.color} in light mode (via
 * {@link useTheme}) - some brand colors (React's cyan, Tailwind's sky blue, Express's gray)
 * are tuned for dark backgrounds and turn low-contrast on the light theme's near-white
 * background otherwise.
 *
 * Bio paragraphs are run through {@link renderWithGlossary}, which turns plain-text
 * mentions of "Star-Tech", "Magshimim", and "HackerU" into clickable {@link GlossaryTerm}
 * popups explaining each program/course, with a link to its official page. `activeGlossaryId`
 * is the same "only one popup active at a time" shared slot {@link LanguagesSection} uses for
 * its `ProgrammingLanguage` children - every glossary popup shares one fixed screen position,
 * so without this a click-pinned popup and a freshly hovered one would render stacked on top
 * of each other.
 *
 * The skills card reuses the app's existing "elevated panel" look (gradient background,
 * border, shadow) already established by the Languages popup and Navbar drawer, so it
 * reads as part of the same design system rather than a one-off.
 *
 * @see {@link Section} for more information on the section wrapper.
 * @returns The AboutSection component.
 */
const AboutSection = () => {
    const { programmingLanguage: language } = useLanguage();
    const { themeValue } = useTheme();
    const data = lang[language];
    const glossaryEntries = Object.values(glossarySectionLang[language].entries);
    const [activeGlossaryId, setActiveGlossaryId] = useState<string | null>(null);

    // First paragraph reads as the short intro placed right above the skills card; the
    // remaining paragraphs continue the bio underneath.
    const [intro, ...rest] = data.paragraphs;

    return (
        <Section className="flex-col" id="about">
            <div className="w-full max-w-[100ch] mx-auto px-4 flex flex-col items-center">
                <div className="text-center">
                    <h2 className="text-xs text-color-muted font-bold font-assistant mb-2 tracking-widest">
                        {data.subtitle.toUpperCase()}
                    </h2>
                    <h1 className="text-3xl text-primary font-bold text-outline font-Heebo tracking-tight mb-4">
                        {data.title}
                    </h1>
                </div>

                <div className="w-full max-w-[80ch] flex flex-col gap-8 mt-4">
                    {/* Short intro */}
                    <p className="text-base text-color tracking-wide font-body leading-relaxed text-start">
                        {intro}
                    </p>

                    {/* Skills card */}
                    <div
                        className={`
                            w-full rounded-lg border border-border
                            bg-linear-to-br from-bg-dark to-bg
                            p-6 shadow-2xl
                        `}>
                        <h3 className="text-lg font-bold text-color mb-4 font-title text-center">
                            {data.skillsTitle}
                        </h3>
                        <ul className="flex flex-wrap justify-center gap-2" role="list">
                            {skills.map((skill) => {
                                const color =
                                    themeValue === "light" && skill.lightColor
                                        ? skill.lightColor
                                        : skill.color;
                                return (
                                    <li key={skill.name}>
                                        <a
                                            href={skill.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color,
                                                borderColor: `${color}55`,
                                                backgroundColor: `${color}1a`,
                                            }}
                                            className={`
                                                inline-flex items-center gap-1.5
                                                rounded-full border px-3 py-1.5
                                                text-sm font-bold font-assistant
                                                transition-transform duration-200 ease-in-out
                                                hover:scale-105 hover:cursor-pointer
                                                focus-visible:outline-2 focus-visible:outline-primary
                                                focus-visible:outline-offset-2
                                            `}>
                                            <span
                                                aria-hidden="true"
                                                style={{ backgroundColor: color }}
                                                className="size-1.5 rounded-full"
                                            />
                                            {skill.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Rest of the bio */}
                    <div className="flex flex-col gap-4">
                        {rest.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-base text-color tracking-wide font-body leading-relaxed text-start">
                                {renderWithGlossary(paragraph, glossaryEntries, index, {
                                    activeId: activeGlossaryId,
                                    onActivate: setActiveGlossaryId,
                                    onDeactivate: (id) =>
                                        setActiveGlossaryId((current) =>
                                            current === id ? null : current
                                        ),
                                })}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AboutSection;
