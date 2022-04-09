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

export const handleFiltration = (filter, classifieds) => {
	return classifieds.filter((classified) => {
		return (
			classified.title.toLowerCase().includes(filter.toLowerCase()) ||
			classified.brand.toLowerCase().includes(filter.toLowerCase()) ||
			classified.model.toLowerCase().includes(filter.toLowerCase()) ||
			classified.category.toLowerCase().includes(filter.toLowerCase()) ||
			classified.description.toLowerCase().includes(filter.toLowerCase()) ||
			classified.location.city.toLowerCase().includes(filter.toLowerCase()) ||
			classified.techData.fuel.toLowerCase().includes(filter.toLowerCase()) ||
			classified.techData.transmission.toLowerCase().includes(filter.toLowerCase()) ||
			classified.techData.interior.toLowerCase().includes(filter.toLowerCase()) ||
			classified.techData.color.toLowerCase().includes(filter.toLowerCase())
		);
	});
};

export const handleSort = (sort, classifieds) => {
	switch (sort) {
		case "Price Ascending":
			return classifieds.slice().sort((a, b) => a.price - b.price);
		case "Price Descending":
			return classifieds.slice().sort((a, b) => b.price - a.price);
		case "HP Ascending":
			return classifieds.slice().sort((a, b) => a.techData.hp - b.techData.hp);
		case "HP Descending":
			return classifieds.slice().sort((a, b) => b.techData.hp - a.techData.hp);
		case "Milleage Ascending":
			return classifieds.slice().sort((a, b) => a.techData.milleage - b.techData.milleage);
		case "Milleage Descending":
			return classifieds.slice().sort((a, b) => b.techData.milleage - a.techData.milleage);
		default:
			return classifieds;
	}
};
