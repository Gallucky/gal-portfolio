import ThemeToggle from "@/components/ui/ThemeToggle";
import AboutSection from "@components/section/About/About.section";
import ContactSection from "@components/section/Contact/Contact.section";
import HeroSection from "@components/section/Hero/Hero.section";
import LanguagesSection from "@components/section/Languages/Languages.section";
import ProjectsSection from "@components/section/Projects/Projects.section";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <LanguagesSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
};

export default HomePage;
