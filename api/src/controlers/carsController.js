const router = require("express").Router();
const carServices = require("../services/carServices");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");
const { isAuthorized, isAdmin } = require("../middlewares/guards");

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
router.post(
    "/",
    isAuthorized(),
    isAdmin(),
    validate(schemas.addCarSchema),
    addCar
);

module.exports = router;
