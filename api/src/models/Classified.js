const mongoose = require("mongoose");

const classifiedSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
	},

	images: [
		{
			type: String,
		},
	],
	ownerId: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: true,
	},
	category: {
		type: String,
	},
	techData: {
		year: {
			type: String,
		},

		hp: {
			type: String,
		},

		milleage: {
			type: String,
		},
		transmission: {
			type: String,
		},
		engine: {
			type: String,
		},
		doors: {
			type: String,
		},
		drive: {
			type: String,
		},
		fuel: {
			type: String,
		},
		color: {
			type: String,
		},
		interior: {
			type: String,
		},
		consumption: {
			type: String,
		},
		euroClass: {
			type: String,
		},
	},
	extras: [
		{
			type: String,
		},
	],
	location: {
		street: {
			type: String,
		},
		number: {
			type: String,
		},
		zip: {
			type: String,
		},
		city: {
			type: String,
		},
		country: {
			type: String,
		},
	},
	createdDate: {
		type: Date,
		default: Date.now,
	},
	contact: {
		type: String,
	},
});

const Classified = mongoose.model("Classified", classifiedSchema);

module.exports = Classified;
