import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Article } from "../../types/article";
import { formatDateTime } from "../../utils/helper";
import { Link } from "react-router";

interface Props {
    article: Article;
}

export default function NewsCard({ article }: Props) {
    const imageUrl =
        article.multimedia?.thumbnail?.url ||
        article.multimedia?.default?.url ||
        "/img/no-image-placeholder.svg";

    return (
        <Card
            component={Link}
            to={article.web_url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none", mb: 1 }}
        >
            <CardMedia
                component="img"
                height="200"
                image={imageUrl}
                alt={article.headline.main}
            />
            <CardContent sx={{ bgcolor: "white", border: "1px solid #e0e0e0" }}>
                <Typography variant="h6">{article.headline.main}</Typography>
                <Typography variant="caption">
                    {article.byline.original} |{" "}
                    {formatDateTime(article.pub_date)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.abstract}
                </Typography>
            </CardContent>
        </Card>
    );
}
