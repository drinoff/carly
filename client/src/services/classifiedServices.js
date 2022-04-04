import { BASE_URL } from "../constants";
import { getAccessToken } from "../utils/utils";

const getAllClassifieds = () => {
	return fetch(`${BASE_URL}/classifieds`)
		.then((res) => res.json())
		.catch((err) => {
			return err.message;
		});
};

const addClassified = (classified) => {
	return fetch(`${BASE_URL}/classifieds`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
		body: JSON.stringify(classified),
	})
		.then((res) => res.json())
		.catch((err) => err.message);
};

const updateClassified = (classified) => {
	console.log(classified);
	return fetch(`${BASE_URL}/classifieds/${classified._id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
		body: JSON.stringify(classified),
	})
		.then((res) => res.json())
		.catch((err) => err.message);
};

const deleteClassified = (id) => {
	return fetch(`${BASE_URL}/classifieds/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
	})
		.then((res) => res.json())
		.catch((err) => err.message);
};

const classifiedServices = {
	getAllClassifieds,
	addClassified,
	deleteClassified,
	updateClassified,
};

export default classifiedServices;
