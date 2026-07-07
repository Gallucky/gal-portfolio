import { useLanguage } from "@/app/providers/Language/useLanguage";
import Section from "../Section";
import { ctaSectionLang as lang } from "@lang/section/CTA/cta";
import CTAButton from "./CTAButton";
import AnimatedDownloadIcon from "./AnimatedDownloadIcon";

/**
 * Renders the closing call-to-action section of the home page: a short prompt plus two
 * actions — start a conversation, or download the CV directly. Content is translated via
 * {@link useLanguage}, matching the pattern used by {@link HeroSection} and
 * {@link LanguagesSection}.
 *
 * "Get in Touch" is solid `primary` at rest and stays solid (just a different opaque color,
 * `secondary`) on hover, rather than fading toward transparent like the CV button's outline
 * style — it's meant to read as the primary action of the two. The CV button keeps its own
 * continuously-looping {@link AnimatedDownloadIcon} instead of the shared hover-stretch, via
 * `animateIconOnHover={false}`.
 *
 * @see {@link Section} and {@link CTAButton} for more information.
 * @returns The CTASection component.
 */
const CTASection = () => {
    const { programmingLanguage } = useLanguage();
    const data = lang[programmingLanguage];

    return (
        <Section className="flex-col">
            <div className="text-center flex flex-col items-center justify-center gap-1">
                <h2 className="text-xl text-secondary font-bold font-Heebo">{data.title}</h2>
                <p className="text-base text-color font-body">{data.description}</p>
                {/* TODO: "Get in Touch" href is a placeholder — real target depends on Phase 3's
                    unresolved scroll-anchor-vs-routes decision (same as Hero's CTAs). */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                    <CTAButton
                        label={data.contactLabel}
                        href="#contact"
                        className="rounded-3xl bg-primary text-bg-dark px-4 py-2 font-bold hover:bg-secondary"
                    />
                    {/* CV file: drop it in /public as Gal-Ben-Abu-CV.pdf for this href to resolve. */}
                    <CTAButton
                        label={data.cvLabel}
                        href="/Gal-Ben-Abu-CV.pdf"
                        download
                        icon={AnimatedDownloadIcon}
                        animateIconOnHover={false}
                        className="rounded-3xl border border-primary text-primary px-4 py-2 font-bold hover:bg-primary/10"
                    />
                </div>
            </div>
        </Section>
    );
};

export default CTASection;
