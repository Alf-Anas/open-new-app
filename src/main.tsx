import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HomePage from "./pages/home/HomePage.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#32c86e",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#a0c800",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);
