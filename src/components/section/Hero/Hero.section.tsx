import { useLanguage } from "@/app/providers/Language/useLanguage";
import Section from "../Section";
import { heroSectionLang } from "@lang/section/Hero/hero";

/**
 * Renders the Hero section of the portfolio website, which includes a title and description.
 * The content is displayed based on the current language selected by the user.
 *
 * The component uses the {@link useLanguage} hook to determine the
 * current language and fetches the corresponding title and
 * description from a predefined language object.
 *
 * Uses the {@link Section} component to render the section.
 *
 * @see {@link useLanguage} and {@link Section}  for more information.
 * @returns The HeroSection component.
 */
const HeroSection = () => {
    const { language } = useLanguage();

    // The current language data.
    const data = heroSectionLang[language];

    return (
        <Section className="flex-col mt-[10dvh] w-svw!">
            <div className="w-full max-w-[100ch] mx-auto text-center px-4">
                <h1 className="text-3xl text-primary text-outline font-bold font-title">
                    {data.title}
                </h1>
                <p className="text-lg text-color font-body whitespace-pre-line">
                    {data.description}
                </p>
            </div>
        </Section>
    );
};

export default HeroSection;
