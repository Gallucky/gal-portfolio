import { useTheme } from "@/app/providers/Theme/useTheme";

type LogoProps = {
    className?: string;
};

/**
 * GBA icon-only logomark (the abstract diamond mark, with no text baked into the SVG).
 * The gradient mark is theme-independent in color, but ships as separate dark/light
 * files so callers pair it with their own adjacent text (e.g. Navbar renders the
 * "GBA" / "Gal Ben-Abu" wordmark next to it).
 *
 * @param className - Optional className, forwarded to the root <img> (e.g. "size-10").
 * @returns The Logo component rendering the theme-appropriate GBA icon.
 */
const Logo = (props: LogoProps) => {
    const { className = "size-11" } = props;
    const { themeValue } = useTheme();
    const isDark = themeValue === "dark";
    const logoSrc = isDark ? "/gba-mark-dark.svg" : "/gba-mark-light.svg";

    return <img src={logoSrc} alt="GBA logo" role="img" className={className} />;
};

export default Logo;
