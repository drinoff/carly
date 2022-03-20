const Car = require("../models/Car");
const Model = require("../models/Model");

const getAllCars = () => {
    return Car.find({})
        .populate("models")
        .lean()
        .then((cars) => {
            return cars;
        })
        .catch((err) => {
            console.log(err);

            throw err;
        });
};

const carServices = {
    getAllCars,
};

module.exports = carServices;