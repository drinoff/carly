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

const getCarById = (req, res) => {
	carServices.getCarById(req.params.id).then((car) => {
		res.json(car);
	});
};

const updateCar = (req, res) => {
	const carId = req.params.id;
	console.log(req.body);
	carServices.updateCar(carId, req.body).then((car) => {
		res.json(car);
	});
};

const deleteCar = (req, res) => {
	carServices
		.deleteCar(req.params.id)
		.then((car) => {
			res.json(car);
		})
		.catch((err) => {
			res.json(err);
		});
};

router.get("/", getAllCars);
router.post("/", isAuthorized(), isAdmin(), validate(schemas.addCarSchema), addCar);
router.delete("/:id", isAuthorized(), isAdmin(), deleteCar);
router.get("/:id", getCarById);
router.put("/:id", isAuthorized(), isAdmin(), validate(schemas.addCarSchema), updateCar);

module.exports = router;
