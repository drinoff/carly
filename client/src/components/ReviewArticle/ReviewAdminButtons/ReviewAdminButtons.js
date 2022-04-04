import { useNavigate } from "react-router-dom";
import reviewServices from "../../../services/reviewServices";
import "./ReviewAdminButtons.css";

const ReviewAdminButtons = ({ review }) => {
	const navigate = useNavigate();

	const onReviewEditClickHandler = () => {
		navigate(`/blog/${review._id}/edit`, { state: { review } });
	};
	const onReviewDeleteClickHandler = () => {
		reviewServices
			.deleteReview(review._id)
			.then(() => {
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="ReviewAdminButtons">
			<button className="ReviewAdminButtons-edit" onClick={onReviewEditClickHandler}>
				Edit
			</button>
			<button className="ReviewAdminButtons-delete" onClick={onReviewDeleteClickHandler}>
				Delete
			</button>
		</div>
	);
};

export default ReviewAdminButtons;
