import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import MainAppBar from "./AppBar";

describe("MainAppBar", () => {
    it("renders the title correctly", () => {
        render(
            <BrowserRouter>
                <MainAppBar />
            </BrowserRouter>
        );
        expect(screen.getByText(/open news app/i)).toBeInTheDocument();
    });

    it("renders the newspaper icon button", () => {
        render(
            <BrowserRouter>
                <MainAppBar />
            </BrowserRouter>
        );
        const iconButton = screen.getByRole("button", { name: /menu/i });
        expect(iconButton).toBeInTheDocument();
    });
});
