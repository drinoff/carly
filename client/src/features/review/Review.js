import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchReviews, selectAllReviews } from "./reviewSlice";
import { userSelector, isAuthenticatedSelector } from "../auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";
import ReviewArticle from "../../components/ReviewArticle/ReviewArticle";

import "./Review.css";

const Blog = ({ onError }) => {
	const dispatch = useDispatch();
	const reviews = useSelector(selectAllReviews);
	const user = useSelector(userSelector);
	const isAuthenticated = useSelector(isAuthenticatedSelector);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchReviews());
	}, [dispatch]);

	const onAddArticleClickHandler = () => {
		navigate(`/blog/add`);
	};

	return (
		<Box
			className="Blog-blogContainer"
			sx={{
				bgcolor: "#111827",
				height: "auto",
				width: "70%",
			}}
		>
			{[...reviews]
				.sort((a, b) => new Date(b.regDate) - new Date(a.regDate))
				.map((review) => (
					<ReviewArticle key={review.title} review={review} onError={onError} />
				))}
			{isAuthenticated ? (
				user.role === "admin" || user.role === "reviewer" ? (
					<button className="addArticleButton" onClick={onAddArticleClickHandler}>
						Add Article
					</button>
				) : null
			) : null}
		</Box>
	);
};

export default Blog;
