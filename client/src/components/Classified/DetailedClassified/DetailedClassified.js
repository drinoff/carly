import { useLocation } from "react-router-dom";

import { Box } from "@mui/material";
import TechnicalData from "./TechnicalData/TechnicalData";
import Slider from "../Slider/Slider";
import "./DetailedClassified.css";

const sliderWidth = 650;

const DetailedClassified = () => {
    const location = useLocation();
    const { classified } = location.state;
    console.log(classified);
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
                    <Slider
                        images={classified.images}
                        width={sliderWidth}
                        className="DetailedClassified-slider"
                    />
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
            </div>
        </div>
    );
};

export default DetailedClassified;
