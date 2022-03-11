const Car = require("../models/Car");

const getAllCars = () => {
    return Car.find({})
        .populate({
            path: "models",
            options: { lean: true },
        })
        .lean()
        .exec()
        .then((cars) => {
            console.log(cars);
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
