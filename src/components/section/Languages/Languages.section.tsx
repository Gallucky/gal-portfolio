import { useLanguage } from "@app/providers/Language/useLanguage";
import Section from "../Section";
import { title } from "framer-motion/client";
import type { Lang, SupportedLanguages } from "@/types/Languages";

const LanguagesSection = () => {
    const { language } = useLanguage();

    const lang: Lang = {
        en: {
            title: "Programming Languages: Difficulty & Experience",
            languages: [
                {
                    name: "HTML - Hypertext Markup Language",
                    description:
                        "HTML is a tag based language that is used to structure a website.",
                    difficulty: 1,
                    experience: 5,
                },
                {
                    name: "CSS",
                    description: "",
                    difficulty: 2.5,
                    experience: 3.5,
                },
                {
                    name: "JavaScript",
                    description: "",
                    difficulty: 3.5,
                    experience: 4.5,
                },
                {
                    name: "Java",
                    description: "",
                    difficulty: 4,
                    experience: 4,
                },
                {
                    name: "Python",
                    description: "",
                    difficulty: 2.5,
                    experience: 4,
                },
                {
                    name: "PowerShell",
                    description: "",
                    difficulty: 3.5,
                    experience: 4,
                },
                {
                    name: "CSharp (C# / CS)",
                    description: "",
                    difficulty: 3,
                    experience: 4,
                },
                {
                    name: "C Plus Plus (C++)",
                    description: "",
                    difficulty: 3.5,
                    experience: 3.5,
                },
                {
                    name: "C",
                    description: "",
                    difficulty: 4.5,
                    experience: 3,
                },
                {
                    name: "Batch (CMD)",
                    description: "",
                    difficulty: 4.5,
                    experience: 3.5,
                },
                {
                    name: "Assembly (ASM)",
                    description: "",
                    difficulty: 5,
                    experience: 1,
                },
            ],
        },
        he: {
            title: "שפות תכנות עם דירוג קושי וניסיון אישי",
            languages: [
                {
                    name: "",
                    description:
                        "שפה זו בנויה מתגים, אפשר לחשוב עליהם כמו על בלוקים, אלמנטים ו-/או חלקים\A.אשר איתם משתמשים ליצור אתר ברשת.",
                    difficulty: 1,
                    experience: 5,
                },
            ],
        },
    };

    const data = lang[language];

    return (
        <>
            <Section>
                <ul></ul>
            </Section>
        </>
    );
};

export default LanguagesSection;
