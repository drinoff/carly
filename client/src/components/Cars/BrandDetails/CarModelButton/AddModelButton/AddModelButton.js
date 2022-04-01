import { useNavigate } from "react-router-dom";

import "./AddModelButton.css";

const AddModelButton = ({ car }) => {
    const carBrand = car?.brand;

    const navigate = useNavigate();

    const onAddModelClickHandler = () => {
        navigate(`/cars/${carBrand}/addModel`, { state: { car } });
    };
    return (
        <button
            className="AddModelButton-modelButton"
            onClick={onAddModelClickHandler}
        >
            Add Model
        </button>
    );
};

export default AddModelButton;
