import { BASE_URL } from "../constants";

const user = JSON.parse(localStorage.getItem("user"));
const accessToken = user?.accessToken;

const getAllReviews = async () => {
	return fetch(`${BASE_URL}/reviews`)
		.then((res) => res.json())
		.catch((err) => {
			return err.message;
		});
};

const addReview = (review) => {
	return fetch(`${BASE_URL}/reviews`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": accessToken,
		},
		body: JSON.stringify(review),
	})
		.then((res) => res.json())
		.catch((err) => err.message);
};

const updateReview = (reviewId, review) => {
	return fetch(`${BASE_URL}/reviews/${reviewId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": accessToken,
		},
		body: JSON.stringify(review),
	})
		.then((res) => res.json())
		.catch((err) => err.message);
};

const deleteReview = (reviewId) => {
	return fetch(`${BASE_URL}/reviews/${reviewId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": accessToken,
		},
	})
		.then((res) => res.json())
		.catch((err) => err.message);
};

const addComment = (reviewId, review) => {
	return fetch(`${BASE_URL}/reviews/${reviewId}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": accessToken,
		},
		body: JSON.stringify(review),
	})
		.then((res) => res.json())
		.catch((err) => err.message);
};

const blogServices = {
	getAllReviews,
	addReview,
	updateReview,
	deleteReview,
	addComment,
};

export default blogServices;
