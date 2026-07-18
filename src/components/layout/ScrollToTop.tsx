import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets the window's scroll position to the top on every route change.
 *
 * React Router doesn't reset scroll on navigation by default - the browser just keeps
 * whatever scroll offset the previous page was at, so e.g. clicking a {@link ProjectCard}
 * link from partway down `/projects` lands on `/projects/:slug` still scrolled to that same
 * offset instead of the top of the new page. Rendered once in {@link App} (outside
 * {@link AnimatedLayout}'s remounting `motion.div`, so this component itself never
 * remounts) and reacts to `pathname` changes via `useEffect` instead.
 *
 * Renders nothing - this is a behavior-only component.
 *
 * @see {@link App} for where this is mounted.
 * @returns `null`.
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
