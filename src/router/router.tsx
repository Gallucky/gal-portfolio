import App from "@/App";
import AnimatedLayout from "@components/layout/AnimatedLayout";
import ErrorPage from "@pages/Error/Error.page";
import HomePage from "@pages/Home/Home.page";
import SettingsPage from "@pages/Settings/Settings.page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
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
