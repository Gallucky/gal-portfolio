import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
};

/**
 * A layout component that animates the transition between routes/pages.
 *
 * Uses the same key-swap trick as {@link MotionSwitch}: `key={location.pathname}` on the
 * `motion.div` below means that whenever the route changes, React treats it as a different
 * element being mounted (not the same element being updated in place). That unmount/mount is
 * what AnimatePresence detects, which is what lets it run `exit` then `initial→animate` around
 * the page change. `mode="wait"` makes the old page fully finish exiting before the new one
 * starts entering, so the two pages never overlap on screen mid-transition.
 *
 * @see {@link MotionSwitch} for the same key-based animation pattern applied to a single icon swap.
 * @returns The AnimatedLayout component.
 */
const AnimatedLayout = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false}>
            {/* key={location.pathname} forces a remount on every route change — see JSDoc above. */}
            <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                <Outlet />
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedLayout;
