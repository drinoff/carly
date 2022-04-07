import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart({ data }) {
	return <Doughnut data={data} width={350} height={350} options={{ maintainAspectRatio: false }} />;
}
