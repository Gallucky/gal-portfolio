import type { Color } from "@/types/Color";

/**
 * @param text - Optional text to display alongside the spinner.
 * @param direction - Direction of the spinner and text, either "vertical" or "horizontal". Default is "horizontal".
 * @param color - Color of the spinner. Accepts Tailwind color classes. Default is "accent".
 * @param size - Size of the spinner. Accepts "sm", "md", "lg", or "xl". Default is "md".
 * @param textSize - Size of the text. Accepts "xs", "sm", "md", "lg", "xl", or "2xl". Default is "md".
 * @param className - Additional classes to apply to the outer container of the spinner.
 * @param elementClassName - Additional classes to apply to the inner element of the spinner.
 * @param textClassName - Additional classes to apply to the text element of the spinner.
 */
type SpinnerProps = {
    text?: string;
    direction?: "vertical" | "horizontal";
    color?: Color;
    size?: "sm" | "md" | "lg" | "xl";
    textSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    className?: string;
    elementClassName?: string;
    textClassName?: string;
};

/**
 * Renders a spinner component with optional text.
 * The spinner can be displayed in either a vertical or horizontal direction.
 * The spinner is customizable in terms of color, size, and text size.
 * @param props - containing optional configuration for the spinner component.
 * @see {@link SpinnerProps} for more information on the props.
 * @returns
 */
const Spinner = (props: SpinnerProps) => {
    const {
        text,
        direction = "horizontal",
        color = "accent",
        size = "md",
        textSize = "md",
        className = "",
        elementClassName = "",
        textClassName = "",
    } = props;

    // Size mappings for spinner
    const sizeClasses = {
        sm: "size-4 border-2",
        md: "size-8 border-2",
        lg: "size-12 border-3",
        xl: "size-16 border-4",
    };

    // Size mappings for text
    const textSizeClasses = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
    };

    // Color mapping for border
    const colorClasses: Record<string, string> = {
        accent: "border-accent",
        primary: "border-primary",
        secondary: "border-second",
        success: "border-success",
        warning: "border-warning",
        error: "border-destructive",
        info: "border-cyan-600",
    };

    // Parses the color prop to get the corresponding Tailwind class for the spinner's border color.
    // FIXME (footgun): the `|| \`border-${color}\`` fallback only works if `color` happens to be
    // a Tailwind class name Tailwind has already generated elsewhere in the project (JIT only
    // includes classes it can find as literal strings in source). Passing an arbitrary Color not
    // in `colorClasses` and not used verbatim elsewhere will silently render with no border color
    // — no error, just a spinner with the wrong look. Safest fix: keep every valid Color mapped
    // in `colorClasses` and drop the fallback, or explicitly safelist the pattern in Tailwind config.
    const borderColor = colorClasses[color] || `border-${color}`;
    const spinnerSize = sizeClasses[size];
    const spinnerTextSize = textSizeClasses[textSize];

    return (
        <div
            className={`flex size-fit items-center justify-center gap-2 overflow-clip ${
                direction === "horizontal" ? "flex-row" : "flex-col"
            } ${className}`}
            role="status"
            aria-live="polite"
            aria-label={text || "Loading"}>
            <div
                className={`${spinnerSize} animate-spin rounded-full border-gray-200 ${borderColor} border-r-transparent ${elementClassName}`}
                aria-hidden="true"
            />
            {text && <span className={`${spinnerTextSize} ${textClassName}`}>{text}</span>}
        </div>
    );
};

export default Spinner;
