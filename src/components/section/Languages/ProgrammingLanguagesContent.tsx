import type { ProgrammingLanguageProps } from "./ProgrammingLanguage";

type ProgrammingLanguageContentProps = Omit<ProgrammingLanguageProps, "id">;

const ProgrammingLanguageContent = (props: ProgrammingLanguageContentProps) => {
    const { name, description, difficulty, experience } = props;

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full transition-all duration-300 ease-in-out flex flex-col items-center w-[80dvw] bg-red-500">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Difficulty: {difficulty}</p>
            <p>Experience: {experience}</p>
        </div>
    );
};

export default ProgrammingLanguageContent;
