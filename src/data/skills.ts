/**
 * A single skill/technology badge shown in the About section's "Skills" card.
 */
export type Skill = {
    /** Display name, e.g. "TypeScript". Not translated - technology names stay the same
     * across languages. */
    name: string;
    /** The technology's real brand color (hex), used for dark mode (and as the fallback for
     * light mode when {@link Skill.lightColor} isn't set). */
    color: string;
    /** A deeper/darker variant of the brand color, used instead of {@link Skill.color} in
     * light mode. Several brand colors (React's cyan, Tailwind's sky blue, Express's gray)
     * are tuned for dark backgrounds and read as low-contrast, washed-out text on the light
     * theme's near-white background - this keeps the badge legible in both themes while
     * still being recognizably "that technology's color". Omit when the base color already
     * has enough contrast on a light background. */
    lightColor?: string;
    /** Official docs/site the badge links out to. */
    href: string;
};

/**
 * The developer's core skills, color-coded by each technology's real brand color.
 * Rendered as clickable badges in the About section, each linking to the technology's
 * official site.
 *
 * @see {@link Skill} for the shape of each entry.
 */
export const skills: Skill[] = [
    { name: "React", color: "#61DAFB", lightColor: "#0B7285", href: "https://react.dev" },
    { name: "TypeScript", color: "#3178C6", href: "https://www.typescriptlang.org" },
    { name: "Node.js", color: "#5FA04E", href: "https://nodejs.org" },
    { name: "Express", color: "#A0AEC0", lightColor: "#374151", href: "https://expressjs.com" },
    // Shifted off `#47A248` to MongoDB's brighter current brand green `#00ED64` - see the
    // matching comment in `techColors.ts` (it read almost identical to Node.js's green).
    { name: "MongoDB", color: "#00ED64", href: "https://www.mongodb.com" },
    {
        // Shifted off the cyan-leaning `#38BDF8` to `blue-500` - see the matching comment in
        // `techColors.ts` (React and Tailwind CSS were reading as nearly the same color badge
        // next to each other). Kept in sync between both files intentionally.
        name: "Tailwind CSS",
        color: "#3B82F6",
        lightColor: "#1D4ED8",
        href: "https://tailwindcss.com",
    },
    { name: "Git", color: "#F05032", href: "https://git-scm.com" },
    // Shifted off `#8B5CF6` (an arbitrary pick - REST has no real brand color) to a neutral
    // warm gray, freeing that violet up for actually-branded purples (Bootstrap, Redux) -
    // see the matching comment in `techColors.ts`.
    { name: "REST APIs", color: "#78716C", href: "https://restfulapi.net" },
];
