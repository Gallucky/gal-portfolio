/**
 * This is a custom plugin for Tailwind CSS that adds support for text outline utilities.
 * It allows you to apply text outline colors and widths using the `text-outline-{color}` and `text-outline-{width}` classes.
 * The plugin uses the `matchUtilities` function to generate the necessary CSS variables for text outline color and width.
 *
 * This is used in conjunction with the `text-outline` utility class, which applies the outline effect to text elements.
 * The plugin makes use of the theme's color and border width values to provide a consistent design system.
 */

export default function ({ matchUtilities, theme }) {
    // text-outline-{color}
    matchUtilities(
        {
            "text-outline": (value) => ({
                "--outline-color": value,
            }),
        },
        {
            values: theme("colors"),
            type: "color",
        },
    );

    // text-outline-{width}
    matchUtilities(
        {
            "text-outline": (value) => ({
                "--outline-width": value,
            }),
        },
        {
            values: theme("borderWidth"),
        },
    );
}
