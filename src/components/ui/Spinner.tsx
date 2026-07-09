/**
 * The spinner only ever needs to match the app's semantic palette (it's a loading
 * indicator, not an arbitrary-colored element), so its color prop is intentionally
 * narrower than the general-purpose {@link Color} type. Every member here MUST have
 * a matching entry in `colorClasses` below — see the FIXME that used to live here
 * for why a permissive type + string-templated fallback silently breaks Tailwind's JIT.
 */
type SpinnerColor = "accent" | "primary" | "secondary" | "success" | "warning" | "error" | "info";

/**
 * @param text - Optional text to display alongside the spinner.
 * @param direction - Direction of the spinner and text, either "vertical" or "horizontal". Default is "horizontal".
 * @param color - Color of the spinner. One of the app's semantic colors. Default is "accent".
 * @param size - Size of the spinner. Accepts "sm", "md", "lg", or "xl". Default is "md".
 * @param textSize - Size of the text. Accepts "xs", "sm", "md", "lg", "xl", or "2xl". Default is "md".
 * @param className - Additional classes to apply to the outer container of the spinner.
 * @param elementClassName - Additional classes to apply to the inner element of the spinner.
 * @param textClassName - Additional classes to apply to the text element of the spinner.
 */
type SpinnerProps = {
    text?: string;
    direction?: "vertical" | "horizontal";
    color?: SpinnerColor;
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

    // Color mapping for border. Every member of `SpinnerColor` must be listed here —
    // TypeScript enforces exhaustiveness via `satisfies`, so a color missing its class
    // is now a compile-time error instead of a silently-broken border at runtime.
    const colorClasses = {
        accent: "border-accent",
        primary: "border-primary",
        secondary: "border-second",
        success: "border-success",
        warning: "border-warning",
        error: "border-destructive",
        info: "border-cyan-600",
    } satisfies Record<SpinnerColor, string>;

    const borderColor = colorClasses[color];
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
