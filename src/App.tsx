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
            <main className="bg-bg h-screen">
                <ThemeToggle />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default App;
