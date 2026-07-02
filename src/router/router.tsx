import App from "@/App";
import AnimatedLayout from "@components/layout/AnimatedLayout";
import ErrorPage from "@pages/Error/Error.page";
import HomePage from "@pages/Home/Home.page";
import SettingsPage from "@pages/Settings/Settings.page";
import { createBrowserRouter } from "react-router-dom";

/**
 * This is the router configuration for the application.
 * It is the structure spine of the application and defines
 * the routes and their corresponding components / pages.
 * @returns The router instance.
 */
const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                // This applies transition/animation between pages when navigating between them.
                element: <AnimatedLayout />,
                children: [
                    { path: "/", element: <HomePage /> },
                    { path: "/settings", element: <SettingsPage /> },
                    { path: "*", element: <ErrorPage /> },
                ],
            },
        ],
    },
]);

export default router;
