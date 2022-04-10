import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector, isAuthenticatedSelector } from "../../../features/auth/authSlice";

import { Box } from "@mui/material";
import CarModelButton from "./CarModelButton/CarModelButton";
import AddModelButton from "../BrandDetails/CarModelButton/AddModelButton/AddModelButton";
import AdminButtons from "../../AdminButtons/AdminButtons";

import "./BrandDetails.css";
import carServices from "../../../services/carServices";

const BrandDetails = ({ onError }) => {
	const [car, setCar] = useState();
	const navigate = useNavigate();
	const location = useLocation();
	const carId = location.state.carId;
	const carModels = location.state.carModels;
	const user = useSelector(userSelector);
	const isAuthenticated = useSelector(isAuthenticatedSelector);

	useEffect(() => {
		carServices
			.getCarById(carId)
			.then((car) => {
				setCar(car);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [carId]);

	const onCarModelClickHandler = (e) => {
		const currentModel = car.models.find((model) => model.model === e.currentTarget.id);
		navigate(`/cars/${car.brand}/${currentModel.model}`, {
			state: { model: currentModel, brand: car.brand },
		});
	};

	const onBackButtonClickHandler = () => {
		window.history.back();
	};

	return (
		<Box
			className="CarDetails-MainContainer"
			sx={{
				bgcolor: "#111827",
				height: "auto",
				width: "70%",
			}}
		>
			<h1>{car?.brand}</h1>
			<img className="bounce-in-top" src={car?.logo} alt="Car-logo" />
			<p className="CarDetails-popularModels">Popular Models</p>
			<div className="BrandDetails-modelButton">
				{car?.models.map((model) => (
					<CarModelButton
						key={model.model}
						carModel={model.model}
						onCarModelClickHandler={onCarModelClickHandler}
					/>
				))}
				{isAuthenticated && user.role === "admin" ? <AddModelButton car={car} /> : null}
			</div>
			<h2>Brief History</h2>
			<p className="BrandDetails-description">{car?.brandHistory}</p>
			<button className="backBtn" onClick={onBackButtonClickHandler}>
				Back
			</button>
			<AdminButtons carId={car?._id} carBrand={car?.brand} carModels={carModels} onError={onError} />
		</Box>
	);
};

export default BrandDetails;
