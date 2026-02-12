import { useState } from "react";

type ProgrammingLanguageIconProps = {
    id: string;
    name: string;
};

const ProgrammingLanguageIcon = (props: ProgrammingLanguageIconProps) => {
    const { id, name } = props;

    return (
        <img
            src={`/src/assets/icons/${id.toLowerCase()}.png`}
            alt={`${name}'s icon (programming language)`}
            className={`size-full object-contain object-center transition-all duration-300 ease-in-out hover:scale-110`}
        />
    );
};

export default ProgrammingLanguageIcon;
