import { useNavigate } from "react-router-dom";
import classifiedServices from "../../../../services/classifiedServices";

import "./ClassifiedAdminButtons.css";

const CLassifiedAdminButtons = ({ classified }) => {
	const navigate = useNavigate();

	const onClassifiedDeleteClickHandler = () => {
		classifiedServices
			.deleteClassified(classified._id)
			.then(() => {
				navigate("/classifieds");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const onClassifiedEditClickHandler = () => {
		navigate(`/classifieds/${classified._id}/edit`, { state: { classified } });
	};
	return (
		<div className="ClassifiedAdminButtons">
			<button className="ClassifiedAdminButtons-edit" onClick={onClassifiedEditClickHandler}>
				Edit
			</button>
			<button className="ClassifiedAdminButtons-delete" onClick={onClassifiedDeleteClickHandler}>
				Delete
			</button>
		</div>
	);
};

export default CLassifiedAdminButtons;
