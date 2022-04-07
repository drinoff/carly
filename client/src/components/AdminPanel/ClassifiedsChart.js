import React from "react";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function ClassifiedsChart({ classified }) {
	const characteristics = classified.techData;
	const data = {
		labels: ["Engine", "hp", "consumption", "price", "extrasCount", "milleage"],
		datasets: [
			{
				label: "Core Characteristics",
				data: [
					characteristics?.engine * 100 || 0,
					characteristics?.hp || 0,
					characteristics?.consumption * 100 || 0,
					classified?.price / 100 || 0,
					classified?.extras?.length * 50 || 0,
					characteristics?.milleage / 100 || 0,
				],
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
		],
	};

	return <Radar data={data} width={350} height={350} options={{ maintainAspectRatio: false }} />;
}
