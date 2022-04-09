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

const getCarById = (carId) => {
	return Car.findById(carId)
		.populate("models")
		.then((car) => {
			return car;
		})
		.catch((err) => {
			throw err;
		});
};

const updateCar = (carId, car) => {
	return Car.findByIdAndUpdate(carId, car, { new: true })
		.then((car) => {
			return car;
		})
		.catch((err) => {
			throw err;
		});
};

const deleteCar = (carId) => {
	return Car.findByIdAndDelete(carId)
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
			console.log(model);
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
			return err;
		});
};

const getModelById = (modelId) => {
	return Model.findById(modelId)
		.then((model) => {
			return model;
		})
		.catch((err) => {
			throw err;
		});
};
const updateModel = (modelId, model) => {
	return Model.findByIdAndUpdate(modelId, model, { new: true })
		.then((model) => {
			return model;
		})
		.catch((err) => {
			throw err;
		});
};

const deleteModel = (modelId) => {
	return Model.findByIdAndDelete(modelId)
		.then((model) => {
			return model;
		})
		.catch((err) => {
			throw err;
		});
};

const carServices = {
	getAllCars,
	addCar,
	deleteCar,
	getCarById,
	updateCar,
	addModel,
	getModelById,
	updateModel,
	deleteModel,
};

module.exports = carServices;
