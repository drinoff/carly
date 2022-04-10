import { Box } from "@mui/material";
import { Chart } from "../../UserPanel/Chart";

const AdminDBPanel = ({ users, reviews, classifieds, cars }) => {
	const models = cars.map((car) => car.models.length).reduce((a, b) => a + b);

	const chartData = {
		labels: ["Users", "Reviews", "Classifieds", "Cars", "Models"],
		datasets: [
			{
				label: "DB Storage Allocation",
				data: [users.length, reviews.length, classifieds.length, cars.length, models],
				backgroundColor: ["#D14343", "#FFB020", "#2F3EB1", "#75FAC8", "#7582EB"],
				borderColor: ["#D14343", "#FFB020", "#2F3EB1", "#75FAC8", "#7582EB"],
				borderWidth: 1,
			},
		],
	};

	return (
		<Box className="userTimeContainer" sx={{ bgcolor: "#111827 ", minHeight: "60vh", width: "95%" }}>
			<Chart data={chartData} />
		</Box>
	);
};

export default AdminDBPanel;
