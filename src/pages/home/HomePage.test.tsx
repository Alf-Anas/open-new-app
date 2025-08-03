import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import HomePage from "./HomePage";
import * as api from "../../utils/api";
import { BrowserRouter } from "react-router";
import type { Article } from "../../types/article";
import "@testing-library/jest-dom";
import { mockArticle } from "./mockArticle";
import { vi } from "vitest";

const mockArticles: Article[] = [mockArticle];

// Mock fetchNews
vi.spyOn(api, "fetchNews").mockImplementation(async (query?: string) => {
    if (query === "error") {
        return { success: false, message: "API Error", results: [] };
    }
    return { success: true, results: mockArticles, message: "OK" };
});

const renderPage = () =>
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    );

describe("HomePage", () => {
    it("renders search input", async () => {
        renderPage();
        expect(screen.getByLabelText(/search news/i)).toBeInTheDocument();
    });

    it("displays news cards on load", async () => {
        renderPage();
        expect(
            await screen.findByText(mockArticle.headline.main)
        ).toBeInTheDocument();
        expect(screen.getByText(mockArticle.abstract)).toBeInTheDocument();
    });

    it("shows error alert on API failure", async () => {
        const fetchNewsMock = vi.spyOn(api, "fetchNews");
        fetchNewsMock.mockResolvedValueOnce({
            success: false,
            message: "API Error",
            results: [],
        });

        renderPage();

        await waitFor(() => {
            expect(screen.getByText("API Error")).toBeInTheDocument();
        });
    });

    it("updates results when user types in search", async () => {
        renderPage();
        const input = screen.getByLabelText(/search news/i);
        fireEvent.change(input, { target: { value: "climate" } });

        await waitFor(() => {
            expect(api.fetchNews).toHaveBeenCalledWith("climate");
        });
    });
});
