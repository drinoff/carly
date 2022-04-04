import { Box } from "@mui/material";
import Slider from "./Slider/Slider";

import "./Classified.css";
import GoogleMapGenerator from "./GoogleMapGenerator/GoogleMapGenerator";

const Classified = ({ classified, onClassifiedCLickHandler }) => {
	const sliderWidth = 350;
	return (
		<Box
			onClick={() => onClassifiedCLickHandler(classified)}
			className="Clasified-clasifiedContainer"
			sx={{
				bgcolor: "#111827",
				height: "auto",
				width: "70%",
				margin: "52px auto 52px auto",
			}}
		>
			<div className="Classified-title-img-Container">
				<h1 className="Classified-title">{classified.title}</h1>
				<Slider images={classified.images} width={sliderWidth} />
			</div>
			<div className="Classified-primary-data">
				<h3>
					<span>Price:</span> {classified.price}
				</h3>
				<h4>
					<span>Year:</span> {classified.techData.year}
				</h4>
				<h4>
					<span>Milleage:</span> {classified.techData.milleage}
				</h4>
				<h4>
					<span>Engin:</span> {classified.techData.engine}
				</h4>
				<h4>
					<span>Transmission:</span> {classified.techData.transmission}
				</h4>
				<h4>
					<span>Fuel:</span> {classified.techData.fuel}
				</h4>
			</div>
			<div className="Classified-address">
				<GoogleMapGenerator className={"Classified-GMapGen"} location={classified.location} />
				<div className="gMapAdress">
					<span>
						{classified.location?.street} {classified.location?.number}
					</span>
					<br />
					<span>
						{classified.location?.zip}, {classified.location?.city},
					</span>
					<br />
					<span>{classified.location?.country}</span>
				</div>
			</div>
		</Box>
	);
};

export default Classified;
