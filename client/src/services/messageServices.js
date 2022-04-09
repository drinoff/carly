import { BASE_URL } from "../constants";

const getUserMessages = (userId) => {
	return fetch(`${BASE_URL}/messages/${userId}`)
		.then((res) => res.json())
		.catch((err) => console.log(err));
};
