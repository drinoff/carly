import { BASE_URL } from "../constants";
import { getAccessToken } from "../utils/utils";

const register = (userData) => {
	return fetch(BASE_URL + "/user/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	}).then((response) => {
		return response.json();
	});
};

const login = (userData) => {
	return fetch(BASE_URL + "/user/login", {
		method: "POST",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	}).then((response) => {
		return response.json();
	});
};

const logout = (token) => {
	return fetch(BASE_URL + "/user/logout", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ token }),
	}).then((response) => {
		return response.json();
	});
};

const getAllUsers = () => {
	return fetch(BASE_URL + "/user", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
	}).then((response) => {
		return response.json();
	});
};

const updateUserRole = (userId, userData) => {
	return fetch(BASE_URL + "/user/" + userId, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
		body: JSON.stringify(userData),
	}).then((response) => {
		return response.json();
	});
};
const deleteUser = (userId) => {
	return fetch(BASE_URL + "/user/" + userId, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
	}).then((response) => {
		return response.json();
	});
};

const userServices = {
	register,
	login,
	logout,
	getAllUsers,
	updateUserRole,
	deleteUser,
};

export default userServices;
