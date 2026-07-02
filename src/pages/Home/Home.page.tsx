import ThemeToggle from "@/components/ui/ThemeToggle";
import AboutSection from "@components/section/About/About.section";
import ContactSection from "@components/section/Contact/Contact.section";
import HeroSection from "@components/section/Hero/Hero.section";
import LanguagesSection from "@components/section/Languages/Languages.section";
import ProjectsSection from "@components/section/Projects/Projects.section";
import Section from "@components/section/Section";

/**
 * The home page of the application.
 * It is the first page that is rendered when the user visits the root route of the application.
 * It contains the main sections of the page: hero, languages, about, projects, and contact.
 * This page should invite the user to explore the rest of the application and learn more about the developer.
 * It is a single-page layout, so the user can browse each section without navigating to a new route.
 * @requires {@link Section} component to create the different sections of the page.
 * @see src/router/router.tsx for how this page is composed into the route tree.
 * @returns The HomePage page component.
 */
const HomePage = () => {
    return (
        <>
            <div className="w-[90%] sm:w-[75%] flex flex-col items-center justify-center justify-self-center">
                <HeroSection />
                <LanguagesSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </div>
        </>
    );
};

export default HomePage;
