const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
	brand: {
		type: String,
		required: true,
		validate: [/^[a-zA-Z ]+$/, "Brand should contain only english letters and spaces"],
	},
	models: [
		{
			type: mongoose.Types.ObjectId,
			ref: "Model",
		},
	],

	brandHistory: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
		validate: [
			/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
			"Please enter a valid URL",
		],
	},
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
