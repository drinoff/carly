const Car = require("../models/Car");

const getAllCars = () => {
    return Car.find({})
        .populate("models")
        .lean()
        .then((cars) => {
            return cars;
        })
        .catch((err) => {
            throw err;
        });
};

const addCar = (car) => {
    return Car.create(car)
        .then((car) => {
            return car;
        })
        .catch((err) => {
            throw err;
        });
};

const carServices = {
    getAllCars,
    addCar,
};

module.exports = carServices;
