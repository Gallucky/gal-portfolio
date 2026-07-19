import { errorSectionLang as lang } from "@lang/section/Error/error";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import CTAButton from "@components/section/CTA/CTAButton";
import Section from "@components/section/Section";

const ctaSolid =
    "rounded-lg px-6 py-3 text-sm font-bold transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-primary bg-primary text-bg-dark hover:bg-secondary";

/**
 * Renders the 404 "not found" section: an animated `404` heading with a static ambient glow
 * centered behind it, a short explanation, and a button back to the home page. Content is
 * translated via {@link useLanguage}, matching the pattern used by every other section
 * ({@link HeroSection}, {@link AboutSection}, etc).
 *
 * The glow (`.error-glow`, defined in `Error.section.css`) is a fixed radial-gradient anchored
 * to dead center - it used to track the cursor, but that made its circular edge visibly slide
 * in and out of view as the mouse moved, which read as distracting rather than ambient. A
 * static, centered glow reads as a deliberate backdrop instead.
 *
 * The container gets `isolate` (`isolation: isolate`), which forces it to establish its own
 * stacking context. Without it, `position: relative` alone does NOT create a stacking context
 * (only an explicit `z-index` or a property like `transform`/`opacity` does), so the glow's
 * `-z-10` would resolve against whichever ANCESTOR stacking context it happened to land in
 * instead - in this app that's the page-transition `motion.div` from {@link AnimatedLayout},
 * which briefly sits at `opacity < 1` while the route-change fade-in plays. `isolate` pins the
 * glow's stacking context to *this* container regardless of what any ancestor is doing.
 *
 * Each digit of "404" is its own `<span>` with a staggered `animation-delay` so they bounce
 * out of phase with each other (`animate-error-digit-float`, a Tailwind `@utility` registered
 * in `Error.section.css`) - the digits stay real text nodes (not `aria-hidden` decoration), so
 * the heading's accessible name is still exactly "404".
 *
 * @see {@link Section} and {@link CTAButton} for more information.
 * @returns The ErrorSection component.
 */
const ErrorSection = () => {
    const { language } = useLanguage();
    const data = lang[language];

    return (
        <Section className="flex-col" id="error">
            <div className="relative isolate w-full max-w-[100ch] mx-auto text-center px-4 py-16 min-h-[60svh] flex flex-col items-center justify-center overflow-hidden">
                <div className="error-glow pointer-events-none absolute inset-0 -z-10" />

                <h1 className="flex items-center justify-center gap-2 mb-4 text-7xl sm:text-8xl font-bold text-outline text-primary font-Heebo">
                    {"404".split("").map((digit, index) => (
                        <span
                            key={index}
                            className="inline-block animate-error-digit-float"
                            style={{ animationDelay: `${index * 0.15}s` }}>
                            {digit}
                        </span>
                    ))}
                </h1>

                <h2 className="text-xl sm:text-2xl text-secondary font-bold font-Heebo mb-3">
                    {data.title}
                </h2>
                <p className="text-base text-color-muted font-body max-w-[60ch] mb-8">
                    {data.description}
                </p>

                <CTAButton href="/" label={data.buttonLabel} className={ctaSolid} />
            </div>
        </Section>
    );
};

export default ErrorSection;
