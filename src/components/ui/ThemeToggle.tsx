import { Moon, Sun } from "lucide-react";
import { useTheme } from "@app/providers/Theme/useTheme";
import { useLanguage } from "@app/providers/Language/useLanguage";
import MotionSwitch from "@components/utils/MotionSwitch";
import { themeToggleLang } from "@lang/ui/themeToggle";

type ThemeToggleProps = {
    className?: string;
};

/**
 * A standalone button like component for changing the theme of the application.
 * It uses the `useTheme` hook to get the current theme value and a function to set the theme value.
 *
 * It uses the `MotionSwitch` component to animate the transition between the sun and moon icons.
 * The button has an accessible label that changes based on the current theme value.
 *
 * @see {@link useTheme} and {@link MotionSwitch} for more information.
 * @returns The `ThemeToggle` component.
 */
const ThemeToggle = (props: ThemeToggleProps) => {
    const { themeValue, setThemeValue } = useTheme();
    const { programmingLanguage: language } = useLanguage();
    const { className } = props;
    const text = themeToggleLang[language];

    return (
        <button
            type="button"
            onClick={() => setThemeValue((prev: string) => (prev === "light" ? "dark" : "light"))}
            aria-label={themeValue === "dark" ? text.switchToLight : text.switchToDark}
            className={`ease text-xl transition-all! duration-300 ${className}`}>
            <MotionSwitch
                value={themeValue}
                config={{
                    initial: { opacity: 0, rotateY: 0 },
                    animate: { opacity: 1, rotateY: 360 },
                    exit: { opacity: 0, rotateY: 0 },
                    transition: { duration: 0.3 },
                }}>
                {/* `val` is the CURRENT theme value passed in via `value={themeValue}` above.
                    The icon shown is the destination, not the current state — it acts as the
                    call to action: dark mode shows the sun (click to go light), light mode
                    shows the moon (click to go dark). */}
                {(val) => (val === "dark" ? <Sun color="yellow" /> : <Moon color="black" />)}
            </MotionSwitch>
        </button>
    );
};

export default ThemeToggle;
