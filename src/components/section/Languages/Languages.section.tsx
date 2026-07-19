import { languagesSectionLang as lang } from "@lang/section/Languages/languages";
import { useState } from "react";
import { useLanguage } from "@app/providers/Language/useLanguage";
import Section from "@components/section/Section";
import ProgrammingLanguage from "./ProgrammingLanguage";

/**
 * Renders a section of the developer's interactive experience of the
 * provided programming languages and the rating of each language.
 *
 * Uses the {@link Section} component to render the section and
 * the {@link ProgrammingLanguage} component to render each programming language.
 *
 * `activeId` tracks which single language's popup is currently allowed to be shown.
 * All popups share the same fixed, centered position, so only one may be visible at
 * a time — without this, hovering a second language while a first one is pinned open
 * would render both on top of each other. Passing it down (plus the activate/deactivate
 * callbacks) lets each {@link ProgrammingLanguage} instance close whenever a different
 * one becomes active.
 *
 * @see {@link Section} and {@link ProgrammingLanguage} for more information.
 * @returns The LanguagesSection component.
 */
const LanguagesSection = () => {
    const { language: programmingLanguage } = useLanguage();
    const [activeId, setActiveId] = useState<string | null>(null);

    const data = lang[programmingLanguage];

    return (
        <>
            <Section className="flex flex-col">
                <h2 className="text-lg text-secondary text-center font-bold font-title">
                    {data.title}
                </h2>
                <p className="text-base text-color text-center font-body mt-2">
                    {data.description}
                </p>
                <ul className="flex items-center justify-center gap-8 max-w-[90%] flex-wrap mt-8">
                    {data.programmingLanguages.map((language) => (
                        <ProgrammingLanguage
                            key={language.name}
                            id={language.id}
                            name={language.name}
                            description={language.description}
                            difficulty={language.difficulty}
                            experience={language.experience}
                            isActive={activeId === language.id}
                            onActivate={() => setActiveId(language.id)}
                            onDeactivate={() =>
                                setActiveId((current) => (current === language.id ? null : current))
                            }
                        />
                    ))}
                </ul>
            </Section>
        </>
    );
};

export default LanguagesSection;
