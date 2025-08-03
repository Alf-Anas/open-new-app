import type { Article } from "../../types/article"

export const mockArticle: Article = {
    abstract: "This is a mock abstract for testing purposes.",
    byline: {
        original: "By John Doe",
    },
    document_type: "article",
    headline: {
        main: "Test Headline Main",
        kicker: "Test Kicker",
        print_headline: "Test Print Headline",
    },
    _id: "nyt://article/12345678-1234-1234-1234-123456789abc",
    keywords: [
        { name: "subject", value: "Technology", rank: 1 },
        { name: "glocations", value: "New York", rank: 2 },
    ],
    multimedia: {
        caption: "Test image caption",
        credit: "Photo by John Doe",
        default: {
            url: "https://via.placeholder.com/600x400.png?text=Default+Image",
            height: 400,
            width: 600,
        },
        thumbnail: {
            url: "https://via.placeholder.com/150.png?text=Thumbnail",
            height: 150,
            width: 150,
        },
    },
    news_desk: "Technology",
    print_page: "A1",
    print_section: "Front Page",
    pub_date: "2025-08-01T10:00:00Z",
    section_name: "Technology",
    snippet: "This is a snippet from the test article.",
    source: "The New York Times",
    subsection_name: "Gadgets",
    type_of_material: "News",
    uri: "nyt://article/12345678-1234-1234-1234-123456789abc",
    web_url: "https://www.nytimes.com/2025/08/01/technology/test-article.html",
    word_count: 1050,
}
