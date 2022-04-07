import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector, userSelector } from "../../features/auth/authSlice";
import carServices from "../../services/carServices";
import "./AdminButtons.css";

const AdminButtons = ({ carId, carBrand, carModels, onError }) => {
	const navigate = useNavigate();
	const user = useSelector(userSelector);
	const isAuthenticated = useSelector(isAuthenticatedSelector);

	const onCarEditClickHandler = () => {
		navigate(`/cars/${carBrand}/edit`, { state: { carId, carModels } });
	};

	const onCarDeleteCLickHandler = () => {
		carServices
			.deleteCar(carId)
			.then((res) => {
				if (res.error) {
					onError(res.error);
				} else {
					onError(res.message);

					navigate("/cars");
				}
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
						<button className="BrandDetails-Edit" onClick={onCarEditClickHandler}>
							Edit
						</button>
						<button className="BrandDetails-Delete" onClick={onCarDeleteCLickHandler}>
							Delete
						</button>
					</div>
				) : null
			) : null}
		</>
	);
};

export default AdminButtons;
