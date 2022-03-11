import "./Car.css";

const Car = ({ car, carClickHandler }) => {
    return (
        <div className="Car-car" id={car.id} onClick={carClickHandler}>
            <img src={car.logo} alt="Car-logo" />
            <div className="Car-brand">{car.brand}</div>
        </div>
    );
};

export default Car;
