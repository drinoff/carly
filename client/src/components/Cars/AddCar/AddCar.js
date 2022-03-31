import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import carServices from "../../../services/carServices";
import "./AddCar.css";

const AddCar = () => {
    const navigate = useNavigate();

    const onAddCarFormSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const brand = formData.get("brand");
        const logo = formData.get("logo");
        const brandHistory = formData.get("brandHistory");

        const car = {
            brand,
            logo,
            brandHistory,
        };

        carServices
            .addCar(car)
            .then((res) => {
                navigate("/cars");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Box
            className="addCarContainer"
            sx={{
                bgcolor: "#111827",
                height: "auto",
                width: "70%",
            }}
        >
            <h1 className="addCarHeading">Add Car</h1>
            <form
                id="addCar-form"
                action="POST"
                className="addCar-form"
                onSubmit={onAddCarFormSubmitHandler}
            >
                <div className="brandContainer">
                    <label htmlFor="brand">Brand</label>
                    <input
                        autoComplete="off"
                        id="brand"
                        type="text"
                        name="brand"
                        className="formInputStyle"
                    />
                </div>

                <div className="logoContainer">
                    <label htmlFor="logo">Logo URL</label>
                    <input
                        id="logo"
                        type="text"
                        name="logo"
                        className="formInputStyle"
                    />
                </div>
                <div className="brandHistoryContainer">
                    <label htmlFor="rePass">Brand History</label>
                    <textarea
                        rows={6}
                        cols={50}
                        id="brandHistory"
                        type="text"
                        name="brandHistory"
                    ></textarea>
                </div>

                <input className="addCarButton" type="submit" value="Add Car" />
            </form>
        </Box>
    );
};

export default AddCar;
