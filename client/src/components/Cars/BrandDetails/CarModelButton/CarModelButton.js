import "./CarModelButton.css";

const CarModel = ({ carModel, onCarModelClickHandler }) => {
    return (
        <button
            className="CarModelButton-modelButton"
            id={carModel}
            onClick={onCarModelClickHandler}
        >
            {carModel}
        </button>
    );
};

export default CarModel;
