import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, selectAllCars } from "./carSlice";
import CarList from "../../components/Cars/CarList/CarList";
import { Box } from "@mui/material";

import "./Cars.css";

const Cars = () => {
    const navigate = useNavigate();
    const cars = useSelector(selectAllCars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

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
