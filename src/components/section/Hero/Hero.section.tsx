import { useLanguage } from "@/app/providers/Language/useLanguage";
import Section from "../Section";

const HeroSection = () => {
    const { language } = useLanguage();

    // All supported languages.
    const lang = {
        en: {
            title: "Portfolio",
            description:
                "Welcome to my portfolio website. Here, you can explore a variety of works and " +
                "services I offer in web development and programming. The site showcases selected " +
                "projects that demonstrate my skills, alongside professional content and updates " +
                "on the technologies I specialize in.",
        },
        he: {
            title: "תיק עבודות",
            description:
                "ברוכים הבאים לאתר הפורטפוליו שלי. " +
                "כאן תוכלו להתרשם ממגוון העבודות והשירותים שאני מציע בתחום פיתוח אתרים ותכנות. " +
                "האתר מציג פרויקטים נבחרים שממחישים את היכולות שלי, " +
                "לצד תכנים מקצועיים ועדכונים על הטכנולוגיות בהן אני מתמחה.",
        },
    };

    // The current language data.
    const data = lang[language];

    return (
        <>
            <Section className="flex-col mt-[10dvh]">
                <div className="w-[90dvw] lg:w-1/2 text-center">
                    <h1 className="text-3xl text-primary text-outline font-bold font-title">
                        {data.title}
                    </h1>
                    <p className="text-lg text-color font-body whitespace-pre-line">
                        {data.description}
                    </p>
                </div>
            </Section>
        </>
    );
};

export default HeroSection;
