import ErrorSection from "@components/section/Error/Error.section";

/**
 * The 404 "not found" page, rendered by the router's catch-all route for any URL that
 * doesn't match a known page.
 *
 * `pt-[var(--navbar-height)]` clears the fixed Navbar the same way {@link AboutPage} and
 * {@link WelcomeRecruitersPage} do - this page has no Hero above it to push content down
 * naturally, so it needs its own top offset against the shared `--navbar-height` custom
 * property (globals.css).
 *
 * @see {@link ErrorSection} for the actual content rendered on this page.
 * @see src/router/router.tsx for how this page is wired in as the `"*"` catch-all route.
 * @returns The ErrorPage page component.
 */
const ErrorPage = () => {
    return (
        <div className="w-[90%] sm:w-[75%] flex flex-col items-center justify-center justify-self-center pt-(--navbar-height)">
            <ErrorSection />
        </div>
    );
};

export default ErrorPage;
