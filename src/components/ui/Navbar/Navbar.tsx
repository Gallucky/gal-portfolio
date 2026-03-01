import { useLanguage } from "@/app/providers/Language/useLanguage";
import { motion } from "framer-motion";
import { XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { language, setLanguage } = useLanguage();
    const isRTL = language === "he";

    // Close drawer on route change
    useEffect(() => setIsOpen(false), [location.pathname]);

    const links = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const toggleHamburgerMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className="fixed top-0 z-50 bg-bg-dark border-b border-border w-full">
            {/* Logo / Name */}
            <div className="w-[90%] sm:w-[75%] justify-self-center flex justify-between items-center py-4 sm:px-10">
                <a href="/" className="text-lg font-bold text-primary">
                    <img
                        src="/public/android-chrome-512x512.png"
                        alt="Logo"
                        className="size-8 object-center object-contain"
                    />
                </a>
                <ul aria-label="Additional controls">
                    <ThemeToggle />
                </ul>
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
                                        isActive
                                            ? "text-primary font-bold active"
                                            : "text-text-light"
                                    }
                                hover:text-primary underline-grow transition-colors`}>
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile toggle menu button */}
                <button
                    onClick={() => toggleHamburgerMenu()}
                    className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Toggle menu"
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

                {/* Mobile nav links slider */}
                <motion.div
                    initial={{ x: isRTL ? "100%" : "-100%" }}
                    animate={{ x: isOpen ? "0%" : isRTL ? "100%" : "-100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`md:hidden absolute top-0 ${isRTL ? "inset-s-0" : "inset-e-0"} w-1/2 h-screen bg-bg-dark`}>
                    <XIcon
                        onClick={() => toggleHamburgerMenu()}
                        className={`absolute top-4 ${isRTL ? "inset-s-2" : "inset-e-2"} size-6 text-gray-400 hover:text-white transition-colors`}
                        aria-label="Close menu"
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
                                        hover:text-primary underline-grow transition-colors text-lg`}>
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
