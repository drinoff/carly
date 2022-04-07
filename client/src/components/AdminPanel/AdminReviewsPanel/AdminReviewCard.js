import "./AdminReviewCard.css";

const AdminReviewCard = ({ review }) => {
	return (
		<div className="AdminPanelReviewContainer">
			<h1>{review.title}</h1>
			<iframe
				width="340"
				height="200"
				src={review.embed}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default AdminReviewCard;
