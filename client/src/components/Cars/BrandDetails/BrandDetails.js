import { useLocation, useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import CarModelButton from "./CarModelButton/CarModelButton";

import "./BrandDetails.css";

const BrandDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const car = location.state.car;

    const onCarModelClickHandler = (e) => {
        const currentModel = car.models.find(
            (model) => model.model === e.currentTarget.id
        );
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
            <h1>{car.brand}</h1>
            <img className="bounce-in-top" src={car.logo} alt="Car-logo" />
            <p className="CarDetails-popularModels">Popular Models</p>
            <div className="BrandDetails-modelButton">
                {car.models.map((model) => (
                    <CarModelButton
                        key={model.model}
                        carModel={model.model}
                        onCarModelClickHandler={onCarModelClickHandler}
                    />
                ))}
            </div>
            <h2>Brief History</h2>
            <p className="BrandDetails-description">{car.brandHistory}</p>
            <button className="backBtn" onClick={onBackButtonClickHandler}>
                Back
            </button>
        </Box>
    );
};

export default BrandDetails;
