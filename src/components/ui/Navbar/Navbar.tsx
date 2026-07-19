import { navbarLang } from "@lang/ui/Navbar/navbar";
import { motion } from "framer-motion";
import { XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "@/app/providers/Language/useLanguage";
import LanguageToggle from "@components/ui/LanguageToggle/LanguageToggle";
import Logo from "@components/ui/Logo";
import ThemeToggle from "@components/ui/ThemeToggle";

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

    const { language } = useLanguage();
    const isRTL = language === "he";
    const text = navbarLang[language];

    // Close drawer on route change
    useEffect(() => setIsOpen(false), [location.pathname]);

    // Top-level nav — every path here has a real route in src/router/router.tsx.
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
            // `min-h-[var(--navbar-height)]` locks this to the same value pages use to offset
            // their own content below it (see globals.css) — without this, a future content
            // change here (bigger logo, wrapping text, etc.) could silently grow the navbar
            // past what pages account for, reintroducing the "content hidden under navbar" bug.
            className="fixed top-0 inset-x-0 z-50 min-h-(--navbar-height) bg-bg-dark border-b border-border transition-all duration-300 ease-in-out">
            {/* Logo / Name.
                Width/padding scale gradually (92% -> 85% -> 75%, padding only from lg) instead
                of jumping straight from `w-[90%]` to `w-[75%] + px-10` at a single `sm`
                breakpoint — that jump used to shrink the available content width right as the
                viewport grew past 640px, which is exactly the tablet range (~425-830px) where
                things started overflowing/wrapping. */}
            <div className="w-[92%] md:w-[85%] lg:w-[75%] justify-self-center flex justify-between items-center py-4 lg:px-10">
                <div className="flex items-center gap-3 sm:gap-10">
                    <Link to="/" className="flex items-center gap-2 sm:gap-3">
                        <Logo />
                        <span className="transition-all hover:duration-300 hover:ease-in-out hover:scale-95">
                            <span className="text-base sm:text-lg font-bold text-color whitespace-nowrap">
                                Gal Ben Abu
                            </span>
                        </span>
                    </Link>
                    <ul
                        aria-label="Additional controls"
                        className="h-full flex items-center justify-center gap-2 sm:gap-4">
                        <ThemeToggle className="hover:bg-color-muted/20 rounded-lg p-1 hover:cursor-pointer" />
                        <LanguageToggle className="hover:bg-color-muted/20 rounded-lg p-1 hover:cursor-pointer" />
                    </ul>
                </div>
                {/* Desktop nav links.
                    Deferred to `lg` (1024px) instead of `md` (768px) - between those two the
                    left group (logo + name + theme/language toggles) already takes up most of
                    the row, so turning on 4 more nav links at `md` left no room for either and
                    caused overlap/wrapping through the whole tablet range. `lg` is where there's
                    actually enough width for both groups to sit side by side. */}
                <ul className="hidden lg:flex gap-8" role="list">
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

                {/* Mobile toggle menu button - stays visible through the tablet range too,
                    matching the `lg` cutover above. */}
                <button
                    onClick={() => toggleHamburgerMenu()}
                    className="lg:hidden p-2 rounded text-color focus:outline-none focus:ring-2 focus:ring-primary"
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
                    animate across the visible screen instead of in from off-screen.

                    Width is a `clamp()` (240px floor, 60vw preferred, 320px ceiling) instead of
                    a flat `w-1/2`: a straight 50% meant ~160px on the smallest phones (too
                    cramped for `ps-10` padding + text-lg links) but ballooned toward ~510px
                    right before the `lg` cutover (way oversized for a 4-item vertical list).
                    The floor/ceiling keep it usable and proportionate across the whole
                    sub-`lg` range instead of just scaling linearly with the viewport.

                    `h-dvh` (not `h-screen`/`100vh`) — `100vh` measures the viewport as if
                    the browser's own address/nav bar chrome were never there, so on mobile
                    browsers where that chrome is visible, the actual visible area is shorter
                    than `100vh`. The `justify-center`'d links below were centering against
                    the full (chrome-included) height and getting squeezed into whatever was
                    left above the fold. `dvh` tracks the real, current visible viewport as
                    that chrome shows/hides, so the drawer always matches what's on screen. */}
                <motion.div
                    // `key={language}` forces a remount whenever the language (and therefore
                    // `isRTL`) changes, instead of animating the existing instance's `x` prop
                    // to its new value. That distinction matters here: without the remount,
                    // switching language while the drawer is closed changed `animate.x` from
                    // e.g. "100%" to "-100%" on the *same* mounted element, and framer-motion
                    // dutifully animated between those two values - sweeping the "hidden"
                    // drawer all the way across the visible screen in the process, since the
                    // path from +100% to -100% passes straight through 0%. Remounting instead
                    // makes it render fresh at `initial` (the new direction's off-screen
                    // position) with no transition, which is a no-op when closed (`initial`
                    // and `animate` resolve to the same value) and just a normal open-in slide
                    // if the language happens to change while it's open.
                    key={language}
                    initial={{ x: isRTL ? "-100%" : "100%" }}
                    animate={{ x: isOpen ? "0%" : isRTL ? "-100%" : "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    // `inert` while closed: the drawer is only *visually* off-screen (translated
                    // out of view), so without this its links would still sit in the Tab order
                    // and receive focus invisibly. `inert` removes the whole subtree from
                    // focus/interaction/assistive tech until the drawer is actually open.
                    inert={!isOpen}
                    className="lg:hidden absolute top-0 end-0 w-[clamp(240px,60vw,320px)] h-dvh bg-bg-dark">
                    <button
                        type="button"
                        onClick={toggleHamburgerMenu}
                        aria-label={text.closeMenu}
                        className="absolute top-4 start-2 p-1 rounded text-color-muted hover:text-color transition-colors focus-visible:outline-2 focus-visible:outline-primary">
                        <XIcon aria-hidden="true" className="size-6" />
                    </button>

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
