import { BASE_URL } from "../constants";
const user = localStorage.getItem("user");
const sendEmail = (data) => {
	return fetch(`${BASE_URL}/email`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => res.json(res));
};

const emailServices = {
	sendEmail,
};

export default emailServices;
