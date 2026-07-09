import WelcomeRecruitersSection from "@components/section/WelcomeRecruiters/WelcomeRecruiters.section";

/**
 * The recruiter landing page, reachable at `/welcome-recruiters`.
 *
 * A standalone entry point meant to be linked directly in job applications/emails instead
 * of (or alongside) the plain portfolio link — a short personal video pitch, then a single
 * click through to the full site. Kept as a top-level route rather than nested under
 * `/about` so the link stays short and shareable on its own.
 *
 * `pt-[var(--navbar-height)]` clears the fixed Navbar the same way {@link AboutPage} does -
 * this page has no Hero above it to push content down naturally.
 *
 * @see {@link WelcomeRecruitersSection} for the actual content rendered on this page.
 * @see src/router/router.tsx for how this page is composed into the route tree.
 * @returns The WelcomeRecruitersPage page component.
 */
const WelcomeRecruitersPage = () => {
    return (
        <div className="w-[90%] sm:w-[75%] flex flex-col items-center justify-center justify-self-center pt-[var(--navbar-height)]">
            <WelcomeRecruitersSection />
        </div>
    );
};

export default WelcomeRecruitersPage;
