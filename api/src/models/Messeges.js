const mongoose = require("mongoose");

const messegesSchema = new mongoose.Schema({
	sender: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	receiver: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Messeges = mongoose.model("Messeges", messegesSchema);

module.exports = Messeges;
