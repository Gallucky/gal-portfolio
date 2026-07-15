import App from "@/App";
import AnimatedLayout from "@components/layout/AnimatedLayout";
import AboutPage from "@pages/About/About.page";
import ContactPage from "@pages/Contact/Contact.page";
import ErrorPage from "@pages/Error/Error.page";
import HomePage from "@pages/Home/Home.page";
import ProjectDetailsPage from "@pages/ProjectDetails/ProjectDetails.page";
import ProjectsPage from "@pages/Projects/Projects.page";
import WelcomeRecruitersPage from "@pages/WelcomeRecruiters/WelcomeRecruiters.page";
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
                    { path: "/about", element: <AboutPage /> },
                    { path: "/projects", element: <ProjectsPage /> },
                    { path: "/projects/:slug", element: <ProjectDetailsPage /> },
                    { path: "/contact", element: <ContactPage /> },
                    { path: "/welcome-recruiters", element: <WelcomeRecruitersPage /> },
                    { path: "*", element: <ErrorPage /> },
                ],
            },
        ],
    },
]);

export default router;
