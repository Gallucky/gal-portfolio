import { useLanguage } from "@/app/providers/Language/useLanguage";
import Section from "../Section";
import { heroSectionLang } from "@lang/section/Hero/hero";
import CTAButton from "@components/section/CTA/CTAButton";

const ctaBase =
    "rounded-lg px-6 py-3 text-sm font-bold transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-primary";
const ctaSolid = `${ctaBase} bg-primary text-bg-dark hover:bg-secondary`;
const ctaOutline = `${ctaBase} border border-primary text-primary hover:bg-primary/10`;

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
    const { programmingLanguage: language } = useLanguage();

    // The current language data.
    const data = heroSectionLang[language];

    return (
        <Section className="flex-col mt-[10dvh] w-svw!">
            <div className="w-full max-w-[100ch] mx-auto text-center px-4 mt-12">
                <h2 className="text-xs text-color-muted font-bold font-assistant mb-5 tracking-widest">
                    {data.subtitle.toUpperCase()}
                </h2>
                <h1 className="text-3xl text-primary font-bold text-outline font-Heebo tracking-tight mb-4">
                    {data.title}
                </h1>
                <p className="text-base text-color tracking-wide font-body whitespace-pre-line mb-8">
                    {data.description}
                </p>
                {/* TODO: hrefs are placeholders pointing at future in-page section ids — real
                    targets depend on Phase 3's unresolved scroll-anchor-vs-routes decision. */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <CTAButton href="#projects" label={data.ctaProjects} className={ctaSolid} />
                    <CTAButton href="#contact" label={data.ctaContact} className={ctaOutline} />
                </div>
            </div>
        </Section>
    );
};

export default HeroSection;
