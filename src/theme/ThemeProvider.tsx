import { createContext, useMemo, useState } from 'react';
import { getTheme } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeContextProvider = ({ children }: any) => {
    const [mode, setMode] = useState<"light" | "dark">(
        localStorage.getItem("theme") as "light" | "dark" || "light"
    );

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev: any) => {
                    const newMode = prev === "light" ? "dark" : "light";
                    localStorage.setItem("theme", newMode);
                    return newMode;
                });
            },
        }),
        [],
    );

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};