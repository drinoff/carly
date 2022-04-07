import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import AdminReviewCard from "./AdminReviewCard";

import reviewServices from "../../../services/reviewServices";

const AdminRevviewsPanel = ({ reviews, review, adminPanelClickHandler, onItemDeleteHandler }) => {
	const navigate = useNavigate();

	const onEditButtonClickHandler = (e) => {
		const review = reviews.find((review) => review._id === e.target.previousSibling.id);
		navigate(`/blog/${e.target.previousSibling.id}/edit`, { state: { review } });
	};
	const onDeleteButtonClickHandler = (e) => {
		reviewServices
			.deleteReview(e.target.parentElement.firstChild.id)
			.then(() => {
				onItemDeleteHandler(e.target.parentElement.firstChild.id);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="infoContainers">
			<>
				<div key={review._id} className="myStuff">
					<Box className="adminMainContainer" sx={{ bgcolor: "#111827", minHeight: "50vh", width: "45%" }}>
						{reviews.map((review) => (
							<div className="adminPanelReviewsItemAction" key={review._id}>
								<p id={review._id} className="adminClassifiedMap" onClick={adminPanelClickHandler}>
									{review.title}
								</p>
								<img
									className="editAdminReview"
									src="/images/edit.svg"
									alt="editSvg"
									onClick={onEditButtonClickHandler}
								/>
								<img
									className="deleteAdminReview"
									src="/images/delete.svg"
									alt="DeleteSvg"
									onClick={onDeleteButtonClickHandler}
								/>
							</div>
						))}
					</Box>

					<Box className="adminMainContainer" sx={{ bgcolor: "#111827", height: "50vh", width: "45%" }}>
						{review ? <AdminReviewCard review={review} /> : null}
					</Box>
				</div>
			</>
		</div>
	);
};

export default AdminRevviewsPanel;
