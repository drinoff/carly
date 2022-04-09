const router = require("express").Router();
const carServices = require("../services/carServices");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");
const { isAuthorized, isAdmin } = require("../middlewares/guards");

const getAllCars = (req, res) => {
	carServices.getAllCars().then((cars) => {
		res.status(200).json(cars);
	});
};

const addCar = (req, res) => {
	carServices
		.addCar(req.body)
		.then((car) => {
			res.status(200).json({ message: "Successfully added", car });
		})
		.catch((err) => {
			res.status(400).json({ message: err });
		});
};

const getCarById = (req, res) => {
	carServices.getCarById(req.params.id).then((car) => {
		res.status(200).json(car);
	});
};

const updateCar = (req, res) => {
	const carId = req.params.id;
	carServices
		.updateCar(carId, req.body)
		.then((car) => {
			res.status(200).json({ message: "Successfully updated", car });
		})
		.catch((err) => {
			res.status(400).json({ message: err });
		});
};

const deleteCar = (req, res) => {
	carServices
		.deleteCar(req.params.id)
		.then(() => {
			res.status(200).json({ message: "Successfully deleted" });
		})
		.catch((err) => {
			res.status(400).json({ message: err });
		});
};

router.get("/", getAllCars);
router.post("/", isAuthorized(), isAdmin(), validate(schemas.addCarSchema), addCar);
router.delete("/:id", isAuthorized(), isAdmin(), deleteCar);
router.get("/:id", getCarById);
router.put("/:id", isAuthorized(), isAdmin(), validate(schemas.addCarSchema), updateCar);

module.exports = router;
