import { BASE_URL } from "../constants";

const user = JSON.parse(localStorage.getItem("user"));
const accessToken = user.accessToken;

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

const blogServices = {
	getAllReviews,
	addReview,
};

export default blogServices;
