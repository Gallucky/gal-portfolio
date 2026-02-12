import { useState } from "react";
import ProgrammingLanguageIcon from "./ProgrammingLanguageIcon";

export type ProgrammingLanguageProps = {
    id: string;
    name: string;
    description: string;
    difficulty: number;
    experience: number;
};

const ProgrammingLanguage = (props: ProgrammingLanguageProps) => {
    const { id, name, description, difficulty, experience } = props;
    const [shown, setShown] = useState(false);

    const handleMouseEnter = () => setShown(true);
    const handleMouseLeave = () => setShown(false);

    // For mobile: toggle on click
    const handleClick = () => setShown((prev) => !prev);

    return (
        <>
            <div
                className="relative flex flex-col items-center justify-center max-w-[90%]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}>
                {/* Icon - with fixed aspect ratio */}
                <div className="size-6 sm:size-8 md:size-10 lg:size-12 flex items-center justify-center">
                    <ProgrammingLanguageIcon id={id} name={name} />
                </div>
            </div>

            {/* Backdrop for mobile - close on click */}
            {shown && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setShown(false)}
                />
            )}

            {/* Content - positioned below the icon, centered */}
            <div
                className={`
                    fixed left-1/2 -translate-x-1/2 bottom-0 sm:bottom-[5%]
                    w-[90vw] max-w-md
                    bg-linear-to-br from-gray-900 to-gray-800
                    border border-gray-700
                    p-4 sm:p-6 rounded-lg shadow-2xl
                    transition-all duration-300 ease-in-out
                    
                    ${
                        shown
                            ? "opacity-100 translate-y-0 md:scale-100 pointer-events-auto z-50!"
                            : "opacity-0 translate-y-full md:translate-y-3/4 md:scale-95 pointer-events-none -z-10"
                    }
                `}>
                {/* Close button for mobile */}
                <button
                    onClick={() => setShown(false)}
                    className={`
                        absolute top-2 right-2 w-8 h-8 flex items-center justify-center
                        text-gray-400 hover:text-white transition-colors
                        md:hidden
                    `}
                    aria-label="Close">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 pr-8 md:pr-0">
                    {name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">{description}</p>

                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex-1">
                        <p className="text-xs text-info brightness-125 mb-1">
                            <strong>Difficulty</strong>
                        </p>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`size-4 rounded-sm ${
                                        i < difficulty ? "bg-yellow-500" : "bg-gray-700"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex-1">
                        <p className="text-xs text-info brightness-125 mb-1">
                            <strong>Experience</strong>
                        </p>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`size-4 rounded-sm ${
                                        i < experience ? "bg-blue-500" : "bg-gray-700"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgrammingLanguage;
