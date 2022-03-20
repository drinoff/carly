const router = require("express").Router();
const carServices = require("../services/carServices");

const getAllCars = (req, res) => {
    carServices.getAllCars().then((cars) => {
        console.log(cars);
        res.json(cars, pre);
    });
};

router.get("/", getAllCars);

module.exports = router;
