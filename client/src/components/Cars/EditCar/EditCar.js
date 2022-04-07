import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import carServices from "../../../services/carServices";
//import { extractModelIds } from "../../../utils/extractIds";

const EditCar = ({ onError }) => {
	const [car, setCar] = useState({
		brand: "",
		logo: "",
		brandHistory: "",
	});
	const navigate = useNavigate();
	const location = useLocation();
	const carId = location.state.carId;
	const carModelIds = location.state.carModels;

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

	const onEditCarFormSubmitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const brand = formData.get("brand");
		const logo = formData.get("logo");
		const brandHistory = formData.get("brandHistory");

		const carData = {
			brand,
			logo,
			brandHistory,
			models: carModelIds,
		};

		carServices
			.updateCar(carId, carData)
			.then((car) => {
				console.log(car);
				navigate(`/cars/${brand}`, {
					state: { carId: car.car._id, carModels: car.car.models },
				});
			})
			.catch((err) => {
				onError(err.error);
			});
	};
	return (
		<Box
			className="addCarContainer"
			sx={{
				bgcolor: "#111827",
				height: "auto",
				width: "70%",
			}}
		>
			<h1 className="addCarHeading">Edit Car</h1>
			<form id="addCar-form" action="POST" className="addCar-form" onSubmit={onEditCarFormSubmitHandler}>
				<div className="brandContainer">
					<label htmlFor="brand">Brand</label>
					<input
						autoComplete="off"
						id="brand"
						type="text"
						name="brand"
						className="formInputStyle"
						value={car.brand}
						onChange={(e) => setCar({ ...car, brand: e.target.value })}
					/>
				</div>

				<div className="logoContainer">
					<label htmlFor="logo">Logo URL</label>
					<input
						id="logo"
						type="text"
						name="logo"
						className="formInputStyle"
						value={car.logo}
						onChange={(e) => setCar({ ...car, logo: e.target.value })}
					/>
				</div>
				<div className="brandHistoryContainer">
					<label htmlFor="rePass">Brand History</label>
					<textarea
						rows={6}
						cols={50}
						id="brandHistory"
						type="text"
						name="brandHistory"
						value={car.brandHistory}
						onChange={(e) => setCar({ ...car, brandHistory: e.target.value })}
					></textarea>
				</div>

				<input className="addCarButton" type="submit" value="Update Car" />
			</form>
		</Box>
	);
};

export default EditCar;
