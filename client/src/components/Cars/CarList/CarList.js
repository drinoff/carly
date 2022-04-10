import { useSelector } from "react-redux";

import Car from "./Car/Car";
import AddCarButton from "../AddCar/AddCarButton";
import "./CarList.css";
import { isAuthenticatedSelector, userSelector } from "../../../features/auth/authSlice";

const CarList = ({ cars, carClickHandler }) => {
	const user = useSelector(userSelector);
	const isAuthenticated = useSelector(isAuthenticatedSelector);

	return (
		<div className="CarList-container">
			{cars.map((car) => (
				<Car key={car.brand} car={car} carClickHandler={carClickHandler} />
			))}
			{isAuthenticated && user.role === "admin" ? <AddCarButton /> : null}
		</div>
	);
};

export default CarList;
