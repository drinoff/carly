export const getAccessToken = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const accessToken = user?.accessToken;
	return accessToken;
};

export const clockOptions = {
	useCustomTime: false,
	width: "149px",
	border: false,
	borderColor: "#10b981",
	baseColor: "#0b0f19",
	centerColor: "#0b0f19",
	centerBorderColor: "#10b981",
	handColors: {
		second: "#d81c7a",
		minute: "#7582eb",
		hour: "#7582eb",
	},
};
