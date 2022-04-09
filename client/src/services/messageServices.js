import { BASE_URL } from "../constants";
import { getAccessToken } from "../utils/utils";

const getUserMessages = (userId) => {
	return fetch(`${BASE_URL}/messages/${userId}`)
		.then((res) => res.json())
		.catch((err) => console.log(err));
};

const sendMessage = (senderId, messageObj) => {
	return fetch(`${BASE_URL}/messages/${senderId}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-authorization": getAccessToken(),
		},
		body: JSON.stringify(messageObj),
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
};

const messageServices = {
	getUserMessages,
	sendMessage,
};

export default messageServices;
