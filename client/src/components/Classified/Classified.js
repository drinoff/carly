import { Box } from "@mui/material";
import Slider from "./Slider/Slider";

import "./Classified.css";
import GoogleMapGenerator from "./GoogleMapGenerator/GoogleMapGenerator";

const Classified = ({ classified, onClassifiedCLickHandler }) => {
    const sliderWidth = 350;
    return (
        <Box
            onClick={() => onClassifiedCLickHandler(classified)}
            className="Cars-carsContainer"
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
                <h4>Year: {classified.techData.year}</h4>
                <h4>Milleage: {classified.techData.mileage}</h4>
                <h4>Engin: {classified.techData.engine}</h4>
                <h4>Transmission: {classified.techData.transmission}</h4>
                <h4>Fuel: {classified.techData.fuel}</h4>
            </div>
            <div className="Classified-address">
                <GoogleMapGenerator
                    className={"Classified-GMapGen"}
                    location={classified.location}
                />
                <h4>
                    {classified.location.street} {classified.location.number}
                </h4>
                <h4>
                    {classified.location.zip}, {classified.location.city}
                </h4>
                <h4>{classified.location.country}</h4>
            </div>
        </Box>
    );
};

export default Classified;
