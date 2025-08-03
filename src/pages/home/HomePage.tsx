import { useEffect, useRef, useState } from "react";
import {
    Container,
    TextField,
    Grid,
    Box,
    Skeleton,
    Alert,
} from "@mui/material";
import type { Article } from "../../types/article";
import { fetchNews } from "../../utils/api";
import NewsCard from "./NewsCard";
import MainAppBar from "../../components/AppBar";
import { useDebounce } from "@uidotdev/usehooks";

export default function HomePage() {
    const firstLoad = useRef(true);
    const [query, setQuery] = useState("");
    const [news, setNews] = useState<Article[]>([]);
    const debouncedSearchTerm = useDebounce(query, 850);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setIsLoading(true);
        const getLatestNews = async () => {
            const res = await fetchNews();
            if (res.success) {
                setNews(res.results);
                setErrorMessage("");
            } else {
                setNews([]);
                setErrorMessage(res.message);
            }
            setIsLoading(false);
            firstLoad.current = false;
        };
        getLatestNews();
    }, []);

    useEffect(() => {
        if (firstLoad.current) return;
        setIsLoading(true);
        const getQueryNews = async () => {
            const res = await fetchNews(debouncedSearchTerm);
            if (res.success) {
                setNews(res.results);
                setErrorMessage("");
            } else {
                setNews([]);
                setErrorMessage(res.message);
            }
            setIsLoading(false);
        };
        getQueryNews();
    }, [debouncedSearchTerm]);

    return (
        <>
            <MainAppBar />
            <Container sx={{ mt: 4 }}>
                <TextField
                    fullWidth
                    label="Search News"
                    variant="outlined"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    sx={{ mb: 3 }}
                />
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                <Grid container spacing={2}>
                    {isLoading &&
                        Array.from(new Array(4)).map((_, index) => (
                            <Grid
                                size={{ sm: 12, md: 6 }}
                                key={index}
                                data-testid="loading-skeleton"
                            >
                                <Box key={index}>
                                    <Skeleton
                                        variant="rectangular"
                                        height={200}
                                    />
                                    <Box sx={{ pt: 0.5 }}>
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    {news.map((article) => (
                        <Grid size={{ sm: 12, md: 6 }} key={article.uri}>
                            <NewsCard article={article} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
