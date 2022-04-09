const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
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

const Messages = mongoose.model("Messages", messagesSchema);

module.exports = Messages;
