const Review = require("../models/Review");

const getAllReviews = () => {
	return Review.find({})
		.populate("ownerId", "email")
		.lean()
		.then((reviews) => {
			return reviews;
		})
		.catch((err) => {
			throw err;
		});
};

const addReview = (review) => {
	return Review.create(review)
		.then((review) => {
			return review;
		})
		.catch((err) => {
			throw err;
		});
};

const updateReview = (reviewId, review) => {
	return Review.findByIdAndUpdate(reviewId, review, { new: true })
		.then((updatedReview) => {
			return updatedReview;
		})
		.catch((err) => {
			throw err;
		});
};

const deleteReview = (reviewId) => {
	return Review.findByIdAndDelete(reviewId)
		.then((review) => {
			return review;
		})
		.catch((err) => {
			throw err;
		});
};

const addComment = async (reviewId, comment) => {
	return (currentReview = await Review.findById(reviewId).then((review) => {
		review.comments.push(comment);
		return review.save();
	}));
};

const deleteComment = async (reviewId, commentId) => {
	return (currentReview = await Review.findById(reviewId).then((review) => {
		review.comments.id(commentId).remove();
		return review.save();
	}));
};

const reviewServices = {
	getAllReviews,
	addReview,
	updateReview,
	deleteReview,
	addComment,
	deleteComment,
};

module.exports = reviewServices;
