import { Outlet } from "react-router-dom";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/Navbar/Navbar";
import ThemeToggle from "./components/ui/ThemeToggle";

/**
 * This is the first route, the root route of the application.
 * From here every component that is rendered directly here will be rendered across all pages, like the Navbar and Footer.
 * The Outlet component is where the child routes will be rendered.
 * In this case the child routes are the pages that are defined in the router.tsx file.
 * @see src/router/router.tsx for how this component is composed into the route tree.
 * @returns The App component render block.
 */
const App = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            {/* main contains the class min-h-dvh so it will be at least the full height of the current viewport. */}
            <main className="bg-bg transition-all duration-300 ease-in-out min-h-dvh">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default App;
