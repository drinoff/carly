const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
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
	description: {
		type: String,
		required: true,
	},
	embed: {
		type: String,
		required: true,
	},
	highs: {
		type: String,
		required: true,
	},
	lows: {
		type: String,
		required: true,
	},
	verdict: {
		type: String,
		required: true,
	},
	ownerId: {
		type: mongoose.Types.ObjectId,
		ref: "User",
	},
	regDate: {
		type: Date,
	},
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
