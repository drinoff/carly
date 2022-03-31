import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import carServices from "../../../../services/carServices";

import "./AddModel.css";

const AddModel = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const car = location.state.car;

    const carBrandId = car._id;

    const onAddModelFormSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const model = formData.get("modelName");
        const avgPrice = formData.get("avgPrice");
        const description = formData.get("modelDesc");
        const picOne = formData.get("modelPic-a");
        const picTwo = formData.get("modelPic-b");
        const picThree = formData.get("modelPic-c");
        const picFour = formData.get("modelPic-d");

        const modelData = {
            model,
            avgPrice: Number(avgPrice),
            description,
            images: [picOne, picTwo, picThree, picFour],
            brandId: carBrandId,
        };
        car.models.push(modelData);
        carServices
            .addModel(modelData)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        navigate(`/cars/${car.brand}`, { state: { car } });
    };
    return (
        <Box
            className="addModelContainer"
            sx={{
                bgcolor: "#111827",
                height: "auto",
                width: "70%",
            }}
        >
            <h1 className="addModelHeading">Add Car</h1>
            <form
                id="addModel-form"
                action="POST"
                className="addModel-form"
                onSubmit={onAddModelFormSubmitHandler}
            >
                <div className="modelNameContainer">
                    <label htmlFor="modelName">Model Name</label>
                    <input
                        autoComplete="off"
                        id="modelName"
                        type="text"
                        name="modelName"
                        className="formInputStyle"
                    />
                </div>

                <div className="avgPriceContainer">
                    <label htmlFor="avgPrice">Average Price</label>
                    <input
                        id="avgPrice"
                        type="text"
                        name="avgPrice"
                        className="formInputStyle"
                    />
                </div>
                <div className="modelDescContainer">
                    <label htmlFor="modelDesc">Model Description</label>
                    <textarea
                        rows={6}
                        cols={50}
                        id="modelDesc"
                        type="text"
                        name="modelDesc"
                    ></textarea>
                </div>
                <div className="pictureContainer">
                    <label htmlFor="modelPic">Image URL</label>
                    <input
                        id="modelPic-a"
                        type="text"
                        name="modelPic-a"
                        className="formInputStyle"
                    />
                </div>
                <div className="pictureContainer">
                    <label htmlFor="modelPic">Image URL</label>
                    <input
                        id="modelPic-b"
                        type="text"
                        name="modelPic-b"
                        className="formInputStyle"
                    />
                </div>
                <div className="pictureContainer">
                    <label htmlFor="modelPic">Image URL</label>
                    <input
                        id="modelPic-c"
                        type="text"
                        name="modelPic-c"
                        className="formInputStyle"
                    />
                </div>
                <div className="pictureContainer">
                    <label htmlFor="modelPic">Image URL</label>
                    <input
                        id="modelPic-d"
                        type="text"
                        name="modelPic-d"
                        className="formInputStyle"
                    />
                </div>

                <input
                    className="addModelButton"
                    type="submit"
                    value="Add Model"
                />
            </form>
        </Box>
    );
};
export default AddModel;
