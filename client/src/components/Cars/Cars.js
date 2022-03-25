import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CarList from "./CarList/CarList";
import { Box } from "@mui/material";

import "./Cars.css";

import carServices from "../../services/carServices";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        carServices.getAllCars().then((cars) => {
            setCars(cars);
        });
    }, []);

    const carClickHandler = (_id) => {
        const currentCar = cars.find((car) => car._id === _id);

        navigate(`/cars/${currentCar.brand}`, {
            state: { car: currentCar },
        });
    };
    return (
        <div className="Cars-boxWrapper">
            <Box
                className="Cars-carsContainer"
                sx={{
                    bgcolor: "#111827",
                    height: "auto",
                    width: "70%",
                }}
            >
                <h1 className="Cars-heading">Top Brand Directory</h1>
                <CarList cars={cars} carClickHandler={carClickHandler} />
            </Box>
        </div>
    );
};

export default Cars;
