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

const addModel = (model, brandId) => {
    return Model.create(model)
        .then((model) => {
            return Car.findByIdAndUpdate(brandId, {
                $push: {
                    models: model._id,
                },
            }).then((car) => {
                return car;
            });
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
};

const carServices = {
    getAllCars,
    addCar,
    addModel,
};

module.exports = carServices;
