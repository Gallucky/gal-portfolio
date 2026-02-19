import { useState } from "react";

import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import jsIcon from "@/assets/icons/javascript.png";
import javaIcon from "@/assets/icons/java.png";
import pythonIcon from "@/assets/icons/python.png";
import psIcon from "@/assets/icons/powershell.png";
import csharpIcon from "@/assets/icons/csharp.png";
import cppIcon from "@/assets/icons/c++.png";
import cIcon from "@/assets/icons/c.png";
import batchIcon from "@/assets/icons/batch.png";
import asmIcon from "@/assets/icons/assembly.png";

type ProgrammingLanguageIconProps = {
    id: string;
    name: string;
};

const iconMap: Record<string, string> = {
    html: htmlIcon,
    css: cssIcon,
    javascript: jsIcon,
    java: javaIcon,
    python: pythonIcon,
    powershell: psIcon,
    csharp: csharpIcon,
    "c++": cppIcon,
    c: cIcon,
    batch: batchIcon,
    assembly: asmIcon,
};

const ProgrammingLanguageIcon = (props: ProgrammingLanguageIconProps) => {
    const { id, name } = props;

    return (
        <img
            src={iconMap[id.toLowerCase()] ?? ""}
            alt={`${name}'s icon (programming language)`}
            className={`size-full object-contain object-center select-none transition-all duration-300 ease-in-out hover:scale-110`}
            loading="lazy"
        />
    );
};

export default ProgrammingLanguageIcon;
