import { useSelector } from "react-redux";
import { userSelector, isAuthenticatedSelector } from "../../features/auth/authSlice";
import ReviewAdminButtons from "./ReviewAdminButtons/ReviewAdminButtons";
import Comments from "./Comments/Comments";

import "./ReviewArticle.css";

const BlogArticle = ({ review, onError }) => {
	const user = useSelector(userSelector);
	const isAuthenticated = useSelector(isAuthenticatedSelector);
	return (
		<div className="Blog-blogArticle">
			<h1>{review.title}</h1>
			<iframe
				width="560"
				height="315"
				src={review.embed}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<div className="BlogArticle-highLow">
				<div>
					<h3 className="BlogArticle-highs">Highs</h3>
					<p className="BlogArticle-description">{review.highs}</p>
				</div>
				<div>
					<h3 className="BlogArticle-lows">Lows</h3>
					<p className="BlogArticle-description">{review.lows}</p>
				</div>
				<div>
					<h3 className="BlogArticle-verdict">Verdict</h3>
					<p className="BlogArticle-description">{review.verdict}</p>
				</div>
			</div>
			<p className="ReviewArticle-description">{review.description}</p>
			<div className="RevieArticle-owner">
				<p>{review.ownerId.email}</p>
				<p>{review.regDate?.replace("T", " ").replace(".", "").slice(0, 19)}</p>
			</div>

			<Comments review={review} />
			{isAuthenticated ? (
				user.id === review.ownerId._id ? (
					<ReviewAdminButtons review={review} onError={onError} />
				) : user.role === "admin" ? (
					<ReviewAdminButtons review={review} onError={onError} />
				) : null
			) : null}

			<hr />
		</div>
	);
};

export default BlogArticle;
