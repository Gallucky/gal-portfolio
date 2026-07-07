import { useLanguage } from "@/app/providers/Language/useLanguage";
import { motion } from "framer-motion";
import { XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { navbarLang } from "@lang/ui/Navbar/navbar";

/**
 * This is the Navbar component that is used to navigate between pages in the application.
 * It is a responsive component that adapts to different screen sizes and provides
 * a hamburger menu for mobile devices. The Navbar also includes a theme toggle button.
 * @returns The Navbar component.
 */
const Navbar = () => {
    // The state which is required for the hamburger menu to open and close on mobile devices.
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const { programmingLanguage: language } = useLanguage();
    const isRTL = language === "he";
    const text = navbarLang[language];

    // Close drawer on route change
    useEffect(() => setIsOpen(false), [location.pathname]);

    // FIXME: "/projects", "/about", "/contact" don't exist in router.tsx yet — clicking these
    // currently hits the catch-all route to ErrorPage, which renders nothing (blank screen).
    // See Build Plan v2, Phase 3 for the routing decision that resolves this.
    const links = [
        { name: text.links.home, path: "/" },
        { name: text.links.projects, path: "/projects" },
        { name: text.links.about, path: "/about" },
        { name: text.links.contact, path: "/contact" },
    ];

    const toggleHamburgerMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            // `inset-x-0` (not `w-full`) pins both physical edges to the viewport directly —
            // slightly more robust than `width: 100%` for a `fixed` element in general, since
            // it doesn't depend on how its containing block's width is computed.
            className="fixed top-0 inset-x-0 z-50 bg-bg-dark border-b border-border transition-all duration-300 ease-in-out">
            {/* Logo / Name */}
            <div className="w-[90%] sm:w-[75%] justify-self-center flex justify-between items-center py-4 sm:px-10">
                <div className="flex items-center gap-10">
                    <a href="/" className="flex items-center gap-3">
                        <Logo />
                        <span className="transition-all hover:duration-300 hover:ease-in-out hover:scale-95">
                            <span className="text-lg font-bold text-color">Gal Ben-Abu</span>
                        </span>
                    </a>
                    <ul
                        aria-label="Additional controls"
                        className="h-full flex items-center justify-center gap-4">
                        <ThemeToggle className="hover:bg-color-muted/20 rounded-lg p-1 hover:cursor-pointer" />
                        <LanguageToggle className="hover:bg-color-muted/20 rounded-lg p-1 hover:cursor-pointer" />
                    </ul>
                </div>
                {/* Desktop nav links */}
                <ul className="hidden md:flex gap-8" role="list">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`${
                                        isActive ? "text-primary font-bold active" : "text-color"
                                    }
                                hover:text-primary underline-grow transition-colors select-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:rounded-xs`}>
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile toggle menu button */}
                <button
                    onClick={() => toggleHamburgerMenu()}
                    className="md:hidden p-2 rounded text-color focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={text.toggleMenu}
                    aria-expanded={isOpen}>
                    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Mobile nav links slider.
                    Anchored at the logical inline-end (`end-0`) — physically the right edge in
                    LTR and the left edge in RTL — which is also where this button lands, since
                    it's the last flex item and flex "row" mirrors its main axis with `dir`. Using
                    the logical class (rather than branching between `start-0`/`end-0` on
                    `isRTL`) means the drawer and its trigger always line up in both languages.
                    `x` is a raw transform percentage, though, and transforms don't mirror with
                    `dir` the way logical layout properties do, so the hidden offset still needs
                    an explicit sign per direction: pushed further right (+100%) to clear the
                    right-anchored LTR drawer, further left (-100%) to clear the left-anchored
                    RTL one. Getting this sign backwards is what previously made the Hebrew drawer
                    animate across the visible screen instead of in from off-screen. */}
                <motion.div
                    initial={{ x: isRTL ? "-100%" : "100%" }}
                    animate={{ x: isOpen ? "0%" : isRTL ? "-100%" : "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden absolute top-0 end-0 w-1/2 h-screen bg-bg-dark">
                    <XIcon
                        onClick={() => toggleHamburgerMenu()}
                        className="absolute top-4 start-2 size-6 text-color-muted hover:text-color transition-colors"
                        aria-label={text.closeMenu}
                    />

                    <ul
                        className="flex flex-col items-start justify-center gap-8 ps-10 h-full"
                        role="list">
                        {links.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        aria-current={
                                            location.pathname === link.path ? "page" : undefined
                                        }
                                        className={`
                                        ${isActive ? "text-primary font-bold active" : "text-color"}
                                        hover:text-primary underline-grow transition-colors text-lg select-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:rounded-xs`}>
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
