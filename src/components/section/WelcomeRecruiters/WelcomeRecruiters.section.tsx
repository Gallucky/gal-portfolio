import { welcomeRecruitersSectionLang as lang } from "@lang/section/WelcomeRecruiters/welcomeRecruiters";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import CTAButton from "@components/section/CTA/CTAButton";
import Section from "@components/section/Section";

/**
 * Renders the WelcomeRecruiters section: a short, personal video pitch aimed at recruiters
 * and hiring managers who land here from a job application or email, followed by a single
 * CTA through to the full portfolio.
 *
 * Deliberately kept to one screen's worth of content (eyebrow, title, one short paragraph,
 * video, one button) — this page's whole point is to be a fast, personal first impression
 * before the click-through, not another thing to scroll through.
 *
 * The video is recorded once per language and switched via `data.videoSrc` (see
 * {@link WelcomeRecruitersContent}) — English at `/videos/welcome-recruiters-en.mp4`, Hebrew
 * at `/videos/welcome-recruiters-he.mp4` (served from `public/`, same pattern as the CV PDF
 * referenced by {@link CTAButton} in {@link CTASection}). Until those files are dropped in,
 * the `<video>` element renders with no playable source.
 *
 * @see {@link Section} for the section wrapper, {@link CTAButton} for the portfolio link.
 * @returns The WelcomeRecruitersSection component.
 */
const WelcomeRecruitersSection = () => {
    const { language } = useLanguage();
    const data = lang[language];

    return (
        <Section className="flex-col" id="welcome-recruiters">
            <div className="w-full max-w-[80ch] mx-auto px-4 flex flex-col items-center text-center">
                <h2 className="text-xs text-color-muted font-bold font-assistant mb-2 tracking-widest">
                    {data.subtitle.toUpperCase()}
                </h2>
                <h1 className="text-3xl text-primary font-bold text-outline font-Heebo tracking-tight mb-4">
                    {data.title}
                </h1>
                <p className="text-base text-color tracking-wide font-body leading-relaxed mb-8 max-w-[60ch]">
                    {data.greeting}
                </p>

                {/* Video pitch — keyed on language so switching languages actually swaps the
                    <video>'s loaded source instead of silently keeping the old one cached. */}
                <div className="w-full rounded-lg border border-border bg-linear-to-br from-bg-dark to-bg p-3 shadow-2xl">
                    <video
                        key={language}
                        controls
                        preload="metadata"
                        aria-label={data.videoCaption}
                        className="w-full rounded-md">
                        <source src={data.videoSrc} type="video/mp4" />
                    </video>
                </div>

                <div className="mt-8">
                    <CTAButton
                        label={data.portfolioLabel}
                        href="/"
                        className="rounded-3xl bg-primary text-bg-dark px-6 py-3 font-bold hover:bg-secondary"
                    />
                </div>
            </div>
        </Section>
    );
};

export default WelcomeRecruitersSection;
