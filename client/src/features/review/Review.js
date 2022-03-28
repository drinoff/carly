import { useEffect } from "react";
import { fetchReviews, selectAllReviews } from "./reviewSlice";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";
import ReviewArticle from "../../components/RevieArticle/ReviewArticle";

import "./Review.css";

const Blog = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(selectAllReviews);

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);
    return (
        <Box
            className="Blog-blogContainer"
            sx={{
                bgcolor: "#111827",
                height: "auto",
                width: "70%",
            }}
        >
            {reviews.map((review) => (
                <ReviewArticle key={review.title} review={review} />
            ))}
        </Box>
    );
};

export default Blog;
