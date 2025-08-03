import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockArticle } from "./mockArticle";
import NewsCard from "./NewsCard";
import { BrowserRouter } from "react-router";

describe("NewsCard", () => {
    it("renders article headline", () => {
        render(
            <BrowserRouter>
                <NewsCard article={mockArticle} />
            </BrowserRouter>
        );
        expect(screen.getByText(mockArticle.headline.main)).toBeInTheDocument();
    });

    it("renders article abstract", () => {
        render(
            <BrowserRouter>
                <NewsCard article={mockArticle} />
            </BrowserRouter>
        );
        expect(screen.getByText(mockArticle.abstract)).toBeInTheDocument();
    });
});
