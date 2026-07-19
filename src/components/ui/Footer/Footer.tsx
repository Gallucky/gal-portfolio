import { footerLang } from "@lang/ui/Footer/footer";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import Logo from "@components/ui/Logo";

/** The year the site went live - the fixed start of the copyright year range below. */
const LAUNCH_YEAR = 2025;

/**
 * The site-wide footer, rendered once in {@link App} below every page's main content.
 * Mirrors {@link Navbar}'s structure and conventions - the same useLanguage-driven copy,
 * the same responsive content width, and the same underline-grow link treatment - so the
 * two landmarks read as a matched pair rather than two unrelated pieces of chrome.
 *
 * Renders three columns on desktop (brand and tagline, quick links, social) that stack
 * into a single centered column on mobile, followed by a bottom bar with the copyright
 * notice and a small credit line.
 *
 * @returns The Footer component.
 */
const Footer = () => {
    const { language } = useLanguage();
    const location = useLocation();
    const text = footerLang[language];

    const links = [
        { name: text.links.home, path: "/" },
        { name: text.links.projects, path: "/projects" },
        { name: text.links.about, path: "/about" },
        { name: text.links.contact, path: "/contact" },
    ];

    // Copyright range grows a year at a time (e.g. "2025" -> "2025-2026") without ever
    // needing a manual edit, instead of hardcoding a range that goes stale after launch year.
    const currentYear = new Date().getFullYear();
    const yearRange =
        currentYear > LAUNCH_YEAR ? `${LAUNCH_YEAR}-${currentYear}` : `${LAUNCH_YEAR}`;

    return (
        <footer
            role="contentinfo"
            aria-label={text.ariaLabel}
            // `mt-12` matches the `py-12` every page {@link Section} uses, so the gap between
            // the last section's content and the footer's top border reads the same as the
            // gap between any two stacked sections, instead of looking tighter just because
            // the footer sits outside that Section/py-12 rhythm.
            className="border-t border-border bg-bg-dark mt-12">
            <div className="w-[92%] md:w-[85%] lg:w-[75%] justify-self-center py-6">
                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-6 text-center md:text-start">
                    {/* Brand / tagline */}
                    <div className="flex flex-col items-center md:items-start gap-2 max-w-xs">
                        <a
                            href="/"
                            className="flex items-center gap-2 transition-all hover:duration-300 hover:ease-in-out hover:scale-95">
                            <Logo className="size-8" />
                            <span className="text-base font-bold text-color whitespace-nowrap">
                                Gal Ben Abu
                            </span>
                        </a>
                        <p className="text-sm text-color-muted">{text.tagline}</p>
                    </div>

                    {/* Quick links */}
                    <nav
                        aria-label={text.quickLinksTitle}
                        className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-sm font-semibold text-color uppercase tracking-wide">
                            {text.quickLinksTitle}
                        </span>
                        <ul
                            className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-1"
                            role="list">
                            {links.map((link, index) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <li key={link.name} className="flex items-center gap-4">
                                        <Link
                                            to={link.path}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`text-sm underline-grow transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:rounded-xs ${
                                                isActive
                                                    ? "text-primary font-bold active"
                                                    : "text-color-muted hover:text-primary"
                                            }`}>
                                            {link.name}
                                        </Link>
                                        {/* Visual-only separator between links - hidden from
                                            assistive tech since the list semantics (and gaps)
                                            already convey where one link ends and the next
                                            begins. */}
                                        {index < links.length - 1 && (
                                            <span aria-hidden="true" className="text-color-muted">
                                                ∙
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Social links */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-sm font-semibold text-color uppercase tracking-wide">
                            {text.connectTitle}
                        </span>
                        <div className="flex items-center gap-4 text-lg">
                            <a
                                href="https://github.com/gallucky"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={text.social.github}
                                className="text-color-muted hover:text-color transition-all hover:scale-110 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:rounded-xs">
                                <SiGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/gal-ben-abu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={text.social.linkedin}
                                className="text-color-muted hover:text-blue-600 transition-all hover:scale-110 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:rounded-xs">
                                <FaLinkedin />
                            </a>
                            <a
                                href="mailto:galbenabu.b@gmail.com"
                                aria-label={text.social.email}
                                className="text-color-muted hover:text-red-500 transition-all hover:scale-110 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:rounded-xs">
                                <BiLogoGmail />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-6 pt-4 border-t border-border-muted flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-color-muted text-center">
                    <span>
                        © {yearRange} Gal Ben Abu. {text.rightsReserved}
                    </span>
                    <span>{text.builtWith}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
