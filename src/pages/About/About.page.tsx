import AboutSection from "@components/section/About/About.section";

/**
 * The About page of the application, reachable at `/about`.
 * Gives the developer's background and skills their own dedicated route, rather than
 * living as an in-page section on the home page.
 *
 * `pt-[10dvh]` clears the fixed {@link Navbar} the same way HeroSection's `mt-[10dvh]`
 * does on the home page - this page has no Hero above it to push content down naturally.
 *
 * @see {@link AboutSection} for the actual content rendered on this page.
 * @see src/router/router.tsx for how this page is composed into the route tree.
 * @returns The AboutPage page component.
 */
const AboutPage = () => {
    return (
        <div className="w-[90%] sm:w-[75%] flex flex-col items-center justify-center justify-self-center pt-[10dvh]">
            <AboutSection />
        </div>
    );
};

export default AboutPage;
