import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AppProviders from "./app/providers/AppProviders.tsx";
import router from "./router/router.tsx";

/**
 * The main entry point of the application.
 * In other words this is the starting point for the entire application.
 * It renders the root div element.
 * This is where the React application starts and the router is initialized.
 */
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppProviders>
            <RouterProvider router={router} />
        </AppProviders>
    </StrictMode>,
);
