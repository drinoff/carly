import { BASE_URL } from "../constants";
import { getAccessToken } from "../utils/utils";

const getAllCars = async () => {
	return fetch(`${BASE_URL}/cars`).then((res) =>
		res.json().catch((err) => {
			return err.message;
		})
	);
};

const addCar = async (car) => {
	return fetch(`${BASE_URL}/cars`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
		body: JSON.stringify(car),
	}).then((res) => res.json());
};

const getCarById = (carId) => {
	return fetch(`${BASE_URL}/cars/${carId}`).then((res) =>
		res.json().catch((err) => {
			return err.message;
		})
	);
};

const updateCar = (carId, carData) => {
	return fetch(`${BASE_URL}/cars/${carId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
		body: JSON.stringify(carData),
	})
		.then((res) => res.json())
		.catch((err) => err.message);
};

const deleteCar = (carId) => {
	return fetch(`${BASE_URL}/cars/${carId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
	})
		.then((res) => res.json())
		.catch((err) => {
			return err.message;
		});
};

const addModel = (model) => {
	return fetch(`${BASE_URL}/models`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
		body: JSON.stringify(model),
	})
		.then((res) => res.json())
		.catch((err) => {
			return err.message;
		});
};

const getModelById = (modelId) => {
	return fetch(`${BASE_URL}/models/${modelId}`).then((res) =>
		res.json().catch((err) => {
			return err.message;
		})
	);
};

const updateModel = (modelId, modelData) => {
	return fetch(`${BASE_URL}/models/${modelId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
		body: JSON.stringify(modelData),
	})
		.then((res) => res.json())
		.catch((err) => {
			return err.message;
		});
};

const deleteModel = (modelId) => {
	return fetch(`${BASE_URL}/models/${modelId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
	})
		.then((res) => res.json())
		.catch((err) => {
			return err.message;
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

export default carServices;
