import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import carServices from "../../../services/carServices";
import { Chart } from "../../UserPanel/Chart";

const AdminCarsPanel = ({ cars, adminPanelCarClickHandler, onCarDeleteHandler }) => {
	const [models, setModels] = useState([]);
	const [car, setCar] = useState(null);
	const navigate = useNavigate();

	const adminPanelCarHoverHandler = (e) => {
		setModels(cars.find((car) => car._id === e.target.id).models);
		setCar(cars.find((car) => car._id === e.target.id));
	};

	const onModelClickHandler = (e) => {
		const currentModel = models.find((model) => model._id === e.target.id);

		navigate(`/cars/${car.brand}/${currentModel.model}`, {
			state: { model: currentModel, brand: car.brand },
		});
	};

	const onEditButtonClickHandler = (e) => {
		const car = cars.find((car) => car._id === e.target.previousSibling.id);

		navigate(`/cars/${car.brand}/edit`, { state: { carId: car._id, carModels: car.models } });
	};

	const onDeleteButtonClickHandler = (e) => {
		const car = cars.find((car) => car._id === e.target.parentElement.firstChild.id);

		carServices
			.deleteCar(car._id)
			.then(onCarDeleteHandler(car._id))
			.catch((err) => {
				console.log(err);
			});
	};

	const onModelEditButtonClickHandler = (e) => {
		const model = models.find((model) => model._id === e.target.previousSibling.id);

		navigate(`/cars/${car.brand}/${model.model}/edit`, {
			state: { model: model, brand: car.brand },
		});
	};

	const onModelDeleteButtonClickHandler = (e) => {
		const model = models.find((model) => model._id === e.target.parentElement.firstChild.id);

		carServices
			.deleteModel(model._id)
			.then(() => {
				const filteredModels = models.filter((model) => model._id !== model._id);
				setModels(filteredModels);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const chartData = {
		labels: cars.map((car) => car.brand),
		datasets: [
			{
				label: "Roles Chart",
				data: cars.map((car) => car.models.length),
				backgroundColor: cars.map(
					(car) => "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
				),
				borderColor: cars.map((car) => "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)),
				borderWidth: 0,
			},
		],
	};

	return (
		<div className="infoContainers">
			<>
				<div className="myStuff">
					<Box className="adminMainContainer" sx={{ bgcolor: "#111827", minHeight: "50vh", width: "45%" }}>
						<p className="Classifieds">Cars</p>
						{cars.map((car) => (
							<div key={car._id} className="adminPanelReviewsItemAction">
								<p
									key={car._id}
									id={car._id}
									className="adminClassifiedMap carModifications"
									onClick={adminPanelCarClickHandler}
									onMouseOver={adminPanelCarHoverHandler}
								>
									{car.brand}
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
					<Box
						className="adminMainContainer positionSticky"
						sx={{ bgcolor: "#111827", minHeight: "50vh", width: "45%" }}
					>
						<p className="Classifieds">Models</p>
						{models
							? models.map((model) => (
									<div key={model._id} className="adminPanelReviewsItemAction">
										<p
											id={model._id}
											className="adminClassifiedMap carModifications"
											onClick={onModelClickHandler}
										>
											{model.model}
										</p>
										<img
											className="editAdminReview"
											src="/images/edit.svg"
											alt="editSvg"
											onClick={onModelEditButtonClickHandler}
										/>
										<img
											className="deleteAdminReview"
											src="/images/delete.svg"
											alt="DeleteSvg"
											onClick={onModelDeleteButtonClickHandler}
										/>
									</div>
							  ))
							: null}
					</Box>
				</div>
				<Box
					className="adminMainContainer positionSticky"
					sx={{ bgcolor: "#111827", minHeight: "50vh", width: "45%" }}
				>
					<>
						<h3>Models per Car Brand</h3>
						<Chart data={chartData} />
					</>
				</Box>
			</>
		</div>
	);
};
export default AdminCarsPanel;
