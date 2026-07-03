import { useLanguage } from "@app/providers/Language/useLanguage";
import Section from "../Section";
import { languagesSectionLang as lang } from "@lang/section/Languages/languages";
import ProgrammingLanguage from "./ProgrammingLanguage";

/**
 * Renders a section of the developer's interactive experience of the
 * provided programming languages and the rating of each language.
 *
 * Uses the {@link Section} component to render the section and
 * the {@link ProgrammingLanguage} component to render each programming language.
 *
 * @see {@link Section} and {@link ProgrammingLanguage} for more information.
 * @returns The LanguagesSection component.
 */
const LanguagesSection = () => {
    const { language } = useLanguage();

    const data = lang[language];

    return (
        <>
            <Section className="flex flex-col">
                <h2 className="text-xl text-secondary text-center text-outline font-bold font-title">
                    {data.title}
                </h2>
                <ul className="flex items-center justify-center gap-8 max-w-[90%] flex-wrap mt-8">
                    {data.languages.map((language) => (
                        <ProgrammingLanguage
                            key={language.name}
                            id={language.id}
                            name={language.name}
                            description={language.description}
                            difficulty={language.difficulty}
                            experience={language.experience}
                        />
                    ))}
                </ul>
            </Section>
        </>
    );
};

export default LanguagesSection;
