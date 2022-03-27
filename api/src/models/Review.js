const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desccription: {
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
