import type { ThemeValues } from "@/types/ThemeValues";

/**
 * A technology's real brand color (hex), used to color-code stack/skill badges so e.g.
 * "Node.js" reads green and "TypeScript" reads blue at a glance.
 *
 * Mirrors the `color`/`lightColor` shape already used by {@link skills} in `skills.ts` -
 * see that file's `Skill.lightColor` doc comment for why a separate light-mode variant
 * exists (several brand colors are tuned for dark backgrounds and wash out on light ones).
 * Kept as a separate, broader map here (rather than reusing `skills` directly) because
 * `skills` is a curated *subset* for the About section's badge list, while this needs to
 * cover every technology that shows up in any project's `stack` - including markup-only
 * projects (HTML/CSS/SASS) that don't belong on the About section's skills list at all.
 */
export type TechColor = {
    color: string;
    lightColor?: string;
};

/**
 * Known technologies mapped to their brand color, keyed by the technology's name lowercased.
 * Look up with {@link getTechColor} rather than indexing this directly - it normalizes the
 * key (trim + lowercase) and falls back to `undefined` for anything not listed here, so
 * callers can style unknown technologies with a neutral default instead of guessing a color.
 *
 * Values are kept in sync with `skills.ts` for the technologies both files share (React,
 * TypeScript, Node.js, Express, MongoDB, Tailwind CSS, Git, REST APIs) so a technology reads
 * as the same color everywhere it appears across the site.
 */
const techColors: Record<string, TechColor> = {
    react: { color: "#61DAFB", lightColor: "#0B7285" },
    typescript: { color: "#3178C6" },
    javascript: { color: "#F7DF1E", lightColor: "#8A6D00" },
    "node.js": { color: "#5FA04E" },
    node: { color: "#5FA04E" },
    express: { color: "#A0AEC0", lightColor: "#374151" },
    "express.js": { color: "#A0AEC0", lightColor: "#374151" },
    // MongoDB's older `#47A248` sat almost on top of Node.js's `#5FA04E` - both read as "the
    // same green" next to each other. Switched to MongoDB's current brand green (`#00ED64`,
    // the bright spring-green used in their post-2020 rebrand) instead of their older/darker
    // corporate green (`#00684A`), which is legitimately MongoDB's color too but too dark to
    // read clearly against this app's dark card background.
    mongodb: { color: "#00ED64" },
    // Tailwind's own docs/marketing use a cyan-to-blue gradient, but a flat `#38BDF8` sat too
    // close to React's `#61DAFB` above for the two to read as distinct badges next to each
    // other - shifted to the gradient's blue end (`blue-500`) instead, which is still
    // recognizably "Tailwind" but no longer nearly indistinguishable from React's cyan.
    "tailwind css": { color: "#3B82F6", lightColor: "#1D4ED8" },
    tailwind: { color: "#3B82F6", lightColor: "#1D4ED8" },
    git: { color: "#F05032" },
    // Deliberately desaturated/grayer than the other blues below (TypeScript, Tailwind,
    // Docker) rather than another vivid blue - with this many blue-branded technologies, a
    // "muted slate" reads as its own distinct personality even where hue alone can't carry it.
    powershell: { color: "#4B6EAF" },
    // REST API isn't an actual branded technology (no logo/style guide to draw from), so its
    // earlier violet was an arbitrary pick that happened to crowd the real purples below
    // (Bootstrap, Redux, Vite, PHP). Given a neutral warm gray instead - reads as "generic
    // protocol," frees up the purple family, and (being warm) stays distinct from Express's
    // cooler blue-gray even though both are grays.
    "rest api": { color: "#78716C" },
    "rest apis": { color: "#78716C" },
    html: { color: "#E34F26" },
    css: { color: "#1572B6" },
    sass: { color: "#CC6699" },
    scss: { color: "#CC6699" },
    // Bootstrap 5's actual current brand purple (bootstrap.com uses this exact value) -
    // brighter and more saturated than the older `#7952B3`, which sat too close to Redux's
    // `#764ABC` to tell apart at a glance.
    bootstrap: { color: "#6F42C1" },
    "next.js": { color: "#FFFFFF", lightColor: "#111827" },
    vite: { color: "#646CFF" },
    redux: { color: "#764ABC" },
    graphql: { color: "#E10098" },
    // Python's brand is actually two colors (blue snake + yellow snake); `#4B8BBE` is the
    // brighter of Python's two official blues - swapped in for the darker `#3776AB`, which
    // read too close to TypeScript/Docker and was low-contrast on a dark card background.
    python: { color: "#4B8BBE" },
    docker: { color: "#2496ED" },
    // PostgreSQL's actual official navy (from their brand guide), replacing a generic
    // "royal blue" that wasn't really Postgres's color and sat too close to Tailwind/TypeScript.
    postgresql: { color: "#336791" },
    // MySQL's actual official teal (their brand guide's primary color) - hue-shifted away from
    // the crowded blue family entirely rather than picking "yet another blue" for it.
    mysql: { color: "#00758F" },
    firebase: { color: "#FFCA28", lightColor: "#B45309" },
    aws: { color: "#FF9900" },
    vue: { color: "#42B883" },
    angular: { color: "#DD0031" },
    // PHP's lighter, more legible official accent (vs. the darker `#777BB4`) - also reads
    // more distinctly grayish-blue next to Vite's more saturated indigo/periwinkle.
    php: { color: "#8892BF" },
};

/**
 * Looks up a technology's brand color for the given theme, normalizing the name (trim +
 * lowercase) before matching against {@link techColors}. Returns `undefined` for anything
 * not in the map, so callers can fall back to a neutral, theme-token-based style instead of
 * inventing a color for an unrecognized technology.
 *
 * @param techName - The technology's display name, e.g. `"Node.js"` (case-insensitive).
 * @param theme - The active theme - picks `lightColor` over `color` when set and the theme is `"light"`.
 * @returns The hex color to use, or `undefined` if the technology isn't recognized.
 */
export const getTechColor = (techName: string, theme: ThemeValues): string | undefined => {
    const entry = techColors[techName.trim().toLowerCase()];
    if (!entry) return undefined;

    return theme === "light" && entry.lightColor ? entry.lightColor : entry.color;
};
