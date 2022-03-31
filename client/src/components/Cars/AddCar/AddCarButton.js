import { useNavigate } from "react-router-dom";
import "./AddCarButton.css";

const Car = () => {
    const navigate = useNavigate();

    const addCarClickHandler = () => {
        navigate("/cars/add");
    };
    return (
        <div className="Car-car" onClick={addCarClickHandler}>
            <img className="plusIcon" src={"images/plus.svg"} alt="Car-logo" />
            <div className="Car-brand">Add Brand</div>
        </div>
    );
};

export default Car;
