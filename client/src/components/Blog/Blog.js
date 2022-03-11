import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import BlogArticle from "./BlogArticle/BlogArticle";

import blogServices from "../../services/blogServices";
import "./Blog.css";

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        blogServices
            .getBlogArticles()
            .then((data) => setArticles(data))
            .catch((err) => setError(err.message));
    }, []);

    return (
        <Box
            className="Blog-blogContainer"
            sx={{
                bgcolor: "#111827",
                height: "auto",
                width: "70%",
            }}
        >
            {articles.map((article) => (
                <BlogArticle key={article.title} article={article} />
            ))}
        </Box>
    );
};

export default Blog;
