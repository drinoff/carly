import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import classifiedServices from "../../../services/classifiedServices";
import ClassifiedsChart from "../ClassifiedsChart";

const AdminClassifiedsPanel = ({
	adminPanelClassifiedHoverHandler,
	adminPanelClassifiedClickHandler,
	onClassifiedDeleteHandler,
	classified,
	classifieds,
}) => {
	const navigate = useNavigate();
	const onEditButtonClickHandler = (e) => {
		const classified = classifieds.find((classified) => classified._id === e.target.previousSibling.id);
		navigate(`/classifieds/${classified._id}/edit`, {
			state: { classified },
		});
	};

	const onDeleteButtonClickHandler = (e) => {
		classifiedServices
			.deleteClassified(e.target.parentElement.firstChild.id)
			.then(onClassifiedDeleteHandler(e.target.parentElement.firstChild.id))
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="infoContainers">
			<>
				<div className="myStuff">
					<Box className="adminMainContainer" sx={{ bgcolor: "#111827", minHeight: "50vh", width: "45%" }}>
						<p className="Classifieds">My Classifieds</p>
						{classifieds.map((classified) => (
							<div className="adminPanelReviewsItemAction" key={classified._id}>
								<p
									id={classified._id}
									className="adminClassifiedMap"
									onClick={adminPanelClassifiedClickHandler}
									onMouseOver={adminPanelClassifiedHoverHandler}
								>
									{classified.title}
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
						{classified ? <ClassifiedsChart classified={classified} /> : null}
					</Box>
				</div>
			</>
		</div>
	);
};

export default AdminClassifiedsPanel;
