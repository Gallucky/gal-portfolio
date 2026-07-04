/**
 * The color names of Tailwind CSS.
 */
export type TW_BaseColorName =
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose";

/**
 * The shades of Tailwind CSS colors.
 * These are the standard shades used in Tailwind CSS for each color.
 * They range from 50 (lightest) to 900 (darkest).
 */
export type TW_BaseShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * The full name of a Tailwind CSS color.
 * It is a combination of a color name and a shade.
 */
export type TW_Color = `${TW_BaseColorName}-${TW_BaseShade}`;

/**
 * The opacity of a color.
 */
export type TW_Opacity = `${number}`;

/**
 * The full name of a Tailwind CSS color with opacity.
 * It is a combination of a color name, a shade, and an opacity.
 */
export type TW_ColorWithOpacity = `${TW_Color}/${TW_Opacity}`;

/**
 * The semantic names of Tailwind CSS colors.
 * These are used for specific purposes in the design system, such as foreground, background, border, etc.
 * This colors are customized in this project.
 */
export type TW_SemanticColor =
    | "foreground"
    | "background"
    | "border"
    | "accent"
    | "accent-foreground"
    | "muted"
    | "muted-foreground"
    | "primary"
    | "primary-foreground"
    | "secondary"
    | "secondary-foreground"
    | "destructive"
    | "destructive-foreground";

/**
 * An arbitrary color option in Tailwind CSS.
 * This allows for custom colors that are not predefined in Tailwind CSS.
 * The color can be any valid CSS color value, such as hex, rgb, rgba, hsl, hsla, etc.
 * It is specified in square brackets to indicate that it is an arbitrary value.
 */
export type TW_ArbitraryColor = `[${string}]`;

/**
 * The simple color names of Tailwind CSS.
 * These are the basic colors used in Tailwind CSS, such as black, white, and transparent.
 */
export type TW_SimpleColor = "black" | "white" | "transparent";

/**
 * The simple color names of Tailwind CSS with opacity.
 * Similar to `TW_SimpleColor`, but with opacity.
 *
 * @see {@link TW_SimpleColor} for the base simple colors.
 * @see {@link TW_Opacity} for the opacity values.
 */
export type TW_SimpleColorWithOpacity = `${TW_SimpleColor}/${number}`;

/**
 * The Color type encompasses all the different ways to specify colors in Tailwind CSS.
 * It includes simple colors, colors with opacity, semantic colors, and arbitrary colors.
 * This type is used throughout the project to ensure consistent color usage and type safety.
 *
 * @see {@link TW_SimpleColor} for the base simple colors.
 * @see {@link TW_SimpleColorWithOpacity} for the simple colors with opacity.
 * @see {@link TW_Color} for the full color names.
 * @see {@link TW_ColorWithOpacity} for the full color names with opacity.
 * @see {@link TW_SemanticColor} for the semantic colors.
 * @see {@link TW_ArbitraryColor} for the arbitrary colors.
 */
export type Color =
    | TW_SimpleColor
    | TW_SimpleColorWithOpacity
    | TW_Color
    | TW_ColorWithOpacity
    | TW_SemanticColor
    | TW_ArbitraryColor;
