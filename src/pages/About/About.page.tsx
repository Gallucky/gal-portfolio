import AboutSection from "@components/section/About/About.section";

/**
 * The About page of the application, reachable at `/about`.
 * Gives the developer's background and skills their own dedicated route, rather than
 * living as an in-page section on the home page.
 *
 * `pt-[var(--navbar-height)]` clears the fixed {@link Navbar} the same way HeroSection's
 * `mt-[var(--navbar-height)]` does on the home page - this page has no Hero above it to push
 * content down naturally. Uses the shared `--navbar-height` custom property (globals.css)
 * rather than a viewport-relative unit like `10dvh`: the navbar's real height is fixed in
 * pixels (content-sized, not viewport-sized), so a `dvh`-based offset fell short on short
 * viewports and let the eyebrow render underneath the navbar.
 *
 * @see {@link AboutSection} for the actual content rendered on this page.
 * @see src/router/router.tsx for how this page is composed into the route tree.
 * @returns The AboutPage page component.
 */
const AboutPage = () => {
    return (
        <div className="w-[90%] sm:w-[75%] flex flex-col items-center justify-center justify-self-center pt-[var(--navbar-height)]">
            <AboutSection />
        </div>
    );
};

export default AboutPage;
