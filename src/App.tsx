import { Outlet } from "react-router-dom";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/Navbar/Navbar";
import ThemeToggle from "./components/ui/ThemeToggle";

const App = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            {/* main contains the class min-h-dvh so it will be at least the full height of the current viewport. */}
            <main className="bg-bg min-h-dvh">
                <ThemeToggle />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default App;
