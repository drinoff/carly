const router = require("express").Router();
const carServices = require("../services/carServices");

const getAllCars = (req, res) => {
    carServices.getAllCars().then((cars) => {
        res.json(cars);
    });
};

const addCar = (req, res) => {
    carServices
        .addCar(req.body)
        .then((car) => {
            res.json(car);
        })
        .catch((err) => {
            res.json(err);
        });
};

router.get("/", getAllCars);

module.exports = router;
