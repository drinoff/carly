import Car from "./Car/Car";
import "./CarList.css";

const CarList = ({ cars, carClickHandler }) => {
    return (
        <div className="CarList-container">
            {cars.map((car) => (
                <Car
                    key={car.brand}
                    car={car}
                    carClickHandler={carClickHandler}
                />
            ))}
        </div>
    );
};

export default CarList;
