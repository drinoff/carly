const router = require("express").Router();
const carServices = require("../services/carServices");

const getAllCars = (req, res) => {
    carServices.getAllCars().then((cars) => {
        res.json(cars);
    });
};

router.get("/", getAllCars);

module.exports = router;
