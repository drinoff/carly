import { useLocation } from "react-router-dom";
import CarImage from "./CarImage/CarImage";
import ModelAdminButtons from "./ModelAdminButtons/ModelAdminButtons";
import { Box } from "@mui/material";

import "./ModelDetails.css";

const ModelDetails = ({ onError }) => {
	const location = useLocation();
	const model = location.state.model;
	const brand = location.state.brand;

	const onBackButtonClickHandler = () => {
		window.history.back();
	};
	return (
		<Box
			className="ModelDetails-MainContainer"
			sx={{
				bgcolor: "#111827",
				height: "auto",
				width: "70%",
			}}
		>
			<h1>
				{brand} - {model.model}
			</h1>
			<div className="ModelDetails-ImageContainer">
				{model.images.map((image) => (
					<CarImage key={image} image={image} />
				))}
			</div>
			<p className="ModelDetails-avgPrice">Average Price: {model.avgPrice}€</p>
			<p className="ModelDetails-modelDescription">{model.description}</p>
			<button className="ModelDetails-BackBtn" onClick={onBackButtonClickHandler}>
				Back
			</button>
			<ModelAdminButtons model={model} brand={brand} onError={onError} />
		</Box>
	);
};

export default ModelDetails;
