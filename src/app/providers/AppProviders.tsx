import { useEffect, type ReactNode } from "react";
import { ThemeProvider } from "./Theme/ThemeProvider";
import { LanguageProvider } from "./Language/LanguageProvider";

// Todo: Move this template for documentation and/or to the readme file.
// How to create a new provider?
// 1. Create a dedicated file for the provider (e.g., ThemeProvider.tsx)
// 2. Create a context type for defining the data's shape/structure.
// 3. Create the context.
// 4. Create a type for the context's provider's props.
// 5. Create the context provider
//    -> This makes it so there is control over what descendence components can subscribe to.
// 6. Create a custom hook for the context provider for easier use/access.
//    e.g: `useTheme`

type AppProvidersProps = {
    children?: ReactNode;
};

const AppProviders = (props: AppProvidersProps) => {
    return (
        <>
            <LanguageProvider>
                <ThemeProvider>{props.children}</ThemeProvider>
            </LanguageProvider>
        </>
    );
};

export default AppProviders;
