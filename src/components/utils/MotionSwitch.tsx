// MotionSwitch.tsx
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * The type definition for the props accepted by the MotionSwitch component.
 * @type MotionSwitchProps
 * @param {string | number | boolean} value - The value that determines which child to render.
 * @param {(value: string | number | boolean) => ReactNode} children - A function that returns the child to render based on the value.
 * @param {Object} config - An optional configuration object for the animation.
 */
type MotionSwitchProps = {
    value: string | number | boolean;
    children: (value: string | number | boolean) => ReactNode;
    config?: {
        initial?: Record<string, any>;
        animate?: Record<string, any>;
        exit?: Record<string, any>;
        transition?: Record<string, any>;
        wait?: boolean;
        initialAnimations?: boolean;
    };
};

/**
 * A generic "animated swap" wrapper: whenever `value` changes, it exit-animates
 * the old rendered child out and enter-animates the new one in.
 *
 * How it works: `children` is a render-prop function, not a plain node — it's called
 * with `value` so MotionSwitch never needs to know what it's rendering (an icon, a flag,
 * text, anything). The actual swap detection relies on `key={String(value)}` below: React
 * treats an element whose key changed as a different element entirely, so it unmounts the
 * old one and mounts a new one instead of just updating props in place. AnimatePresence
 * listens for that unmount/mount and plays `exit`/`initial→animate` around it — without the
 * key, the element would just be updated silently and no animation would fire.
 *
 * @param MotionSwitchProps - The props for the MotionSwitch component.
 * @param MotionSwitchProps.value - The value that determines which child to render. Also used as the `key`, which is what triggers the animation.
 * @param MotionSwitchProps.children - A function that returns the child to render based on the value.
 * @param MotionSwitchProps.config - An optional configuration object for the animation.
 * @returns
 */
const MotionSwitch = (props: MotionSwitchProps) => {
    const { value, children, config = {} } = props;

    const {
        initial = { opacity: 0, scale: 0 },
        animate = { opacity: 1, scale: 1 },
        exit = { opacity: 0, scale: 0 },
        transition = { duration: 0.4 },
        wait = true,
        initialAnimations = false,
    } = config;

    return (
        // `mode="wait"` (default): the exiting element fully finishes its exit animation
        // before the entering element starts (sequential, no overlap).
        // `mode="sync"`: both animate at the same time (old fading out while new fades in).
        // `initial={initialAnimations}` is AnimatePresence's own prop — unrelated to the
        // `initial` animation values below — and only controls whether the FIRST child
        // (on component mount) plays its enter animation or just appears instantly.
        <AnimatePresence mode={wait ? "wait" : "sync"} initial={initialAnimations}>
            {/* `key={String(value)}` is the trick: changing the key makes React unmount
                the old div and mount a new one instead of updating it in place, which is
                what lets AnimatePresence detect a swap and animate `exit` then `initial→animate`. */}
            <motion.div
                key={String(value)}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={transition}>
                {children(value)}
            </motion.div>
        </AnimatePresence>
    );
};

export default MotionSwitch;
