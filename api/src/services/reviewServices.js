const Review = require("../models/Review");

const getAllReviews = () => {
	return Review.find({})
		.populate("ownerId", "email")
		.lean()
		.then((reviews) => {
			console.log(reviews);
			return reviews;
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

const addReview = (review) => {
	return Review.create(review)
		.then((review) => {
			return review;
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

const reviewServices = {
	getAllReviews,
	addReview,
};

module.exports = reviewServices;
