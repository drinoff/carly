import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector, userSelector } from "../../../../../../features/auth/authSlice";
import carServices from "../../../../../../services/carServices";
import "./ModelAdminButtons.css";

const ModelAdminButtons = ({ model, brand }) => {
	const navigate = useNavigate();
	const user = useSelector(userSelector);
	const isAuthenticated = useSelector(isAuthenticatedSelector);

	const onModelEditClickHandler = () => {
		navigate(`/cars/${brand}/${model.model}/edit`, { state: { model } });
	};

	const onModelDeleteCLickHandler = () => {
		carServices
			.deleteModel(model._id)
			.then(() => {
				navigate(`/cars`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			{isAuthenticated ? (
				user.role === "admin" ? (
					<div className="adminButton">
						<button className="BrandDetails-Edit" onClick={onModelEditClickHandler}>
							Edit
						</button>
						<button className="BrandDetails-Delete" onClick={onModelDeleteCLickHandler}>
							Delete
						</button>
					</div>
				) : null
			) : null}
		</>
	);
};

export default ModelAdminButtons;
