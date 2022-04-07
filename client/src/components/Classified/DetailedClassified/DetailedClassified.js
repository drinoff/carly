import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../../../features/auth/authSlice";
import { Box } from "@mui/material";
import TechnicalData from "./TechnicalData/TechnicalData";
import Slider from "../Slider/Slider";
import Extras from "./Extras/Extras";
import ClassifiedAdminButtons from "./ClassifiedAdminButtons/ClassifiedAdminButtons";

import { sliderWidth } from "../../../constants";
import "./DetailedClassified.css";

const DetailedClassified = () => {
	const location = useLocation();
	const isAuthenticated = useSelector(isAuthenticatedSelector);
	const { classified } = location.state;

	return (
		<div className="DetailedClassified-container">
			<div className="image-techData-Container">
				<Box
					className="DetailedClassified-image-Container"
					sx={{
						bgcolor: "#111827",
						height: "510px",
						width: "44%",
					}}
				>
					<Slider images={classified.images} width={sliderWidth} className="DetailedClassified-slider" />
				</Box>
				<Box
					className="DetailedClassified-techData-Container"
					sx={{
						bgcolor: "#111827",
						height: "510px",
						width: "44%",
					}}
				>
					<TechnicalData classified={classified} />
				</Box>
			</div>
			<div>
				<Box
					className="DetailedClassified-description-Container"
					sx={{
						bgcolor: "#111827",
						height: "auto",
						width: "70%",
					}}
				>
					<div className="DetailedClassified-description">
						<p>{classified.description}</p>
					</div>
				</Box>
				<Box
					className="DetailedClassified-description-Container"
					sx={{
						bgcolor: "#111827",
						height: "auto",
						width: "70%",
					}}
				>
					<div className="DetailedClassified-extras">
						{classified.extras.map((extra) => (
							<Extras key={extra} extra={extra} />
						))}
					</div>
				</Box>
				{isAuthenticated && <ClassifiedAdminButtons classified={classified} />}
			</div>
		</div>
	);
};

export default DetailedClassified;
