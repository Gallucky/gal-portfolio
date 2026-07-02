type StarProps = {
    id: string | number;
    color: string; // Tailwind color class e.g. 'text-warning'
    fillState: "full" | "half" | "empty";
    className?: string;
};

/**
 * Render a start component with different modes:
 * full - shows a full star.
 * half - shows half of a star (the left side is filled, the right side is empty).
 * empty - shows an empty star (outline only).
 *
 * @returns The Star component.
 */
const Star = (props: StarProps) => {
    const { id, color, fillState, className } = props;

    // Show a full star when the fill state is set to "full".
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

    // Show a half-full star when the fill state is set to "half".
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
