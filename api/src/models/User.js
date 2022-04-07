const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: [true, "Email already exists"],
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["user", "reviewer", "admin"],
		default: "user",
	},
	classifieds: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Classified",
		},
	],
	name: {
		type: String,
	},
	birthDate: {
		type: Date,
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
