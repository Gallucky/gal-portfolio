type StarProps = {
    id: string | number;
    color: string; // Tailwind color class e.g. 'text-warning'
    fillState: "full" | "half" | "empty";
    className?: string;
};

const Star = (props: StarProps) => {
    const { id, color, fillState, className } = props;

    if (fillState === "full") {
        return (
            <svg
                className={`absolute inset-0 w-full h-full ${color}`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        );
    }

    if (fillState === "half") {
        return (
            <svg
                className={`absolute inset-0 w-full h-full ${color}`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <defs>
                    <linearGradient id={`half-${id}`}>
                        <stop offset="50%" stopColor="currentColor" />
                        <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                <path
                    fill={`url(#half-${id})`}
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
            </svg>
        );
    }

    // Empty star (outline only)
    return (
        <svg
            className={`absolute inset-0 w-full h-full ${color}/25`}
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
            viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
};

export default Star;
