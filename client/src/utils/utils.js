export const getAccessToken = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const accessToken = user?.accessToken;
	return accessToken;
};
