import { Moon, Sun } from "lucide-react";
import { useTheme } from "@app/providers/Theme/useTheme";
import MotionSwitch from "@components/utils/MotionSwitch";

type ThemeToggleProps = {
    className?: string;
};

const ThemeToggle = (props: ThemeToggleProps) => {
    const { themeValue, setThemeValue } = useTheme();
    const { className } = props;

    return (
        <button
            type="button"
            onClick={() => setThemeValue((prev: string) => (prev === "light" ? "dark" : "light"))}
            className={`ease text-xl transition-all! duration-1000 ${className}`}>
            <MotionSwitch
                value={themeValue}
                config={{
                    initial: { opacity: 0, rotateY: 0 },
                    animate: { opacity: 1, rotateY: 360 },
                    exit: { opacity: 0, rotateY: 0 },
                    transition: { duration: 0.3 },
                }}>
                {/* If the next theme value is light, show the sun, else show the moon */}
                {(val) => (val === "dark" ? <Sun color="yellow" /> : <Moon color="black" />)}
            </MotionSwitch>
        </button>
    );
};

export default ThemeToggle;
