const router = require("express").Router();
const reviewServices = require("../services/reviewServices");
const { isAuthorized, isReviewer } = require("../middlewares/guards");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");

const getAllReviews = (req, res) => {
	reviewServices
		.getAllReviews()
		.then((reviews) => {
			res.json(reviews);
		})
		.catch((err) => {
			res.json(err);
		});
};

const addReview = (req, res) => {
	reviewServices
		.addReview(req.body)
		.then((review) => {
			res.json(review);
		})
		.catch((err) => {
			res.json(err);
		});
};

const updateReview = (req, res) => {
	reviewServices
		.updateReview(req.params.reviewId, req.body)
		.then((updatedReview) => {
			res.json({
				message: "Review updated successfully",
				updatedReview,
			});
		})
		.catch((err) => {
			res.json({
				message: "Error updating review",
				error: err,
			});
		});
};

const deleteReview = (req, res) => {
	reviewServices
		.deleteReview(req.params.reviewId)
		.then((review) => {
			res.json(review);
		})
		.catch((err) => {
			res.json(err);
		});
};

const addComment = (req, res) => {
	reviewServices
		.addComment(req.params.reviewId, req.body)

		.then((updatedReview) => {
			res.json({
				message: "Comment added successfully",
				updatedReview,
			});
		})
		.catch((err) => {
			res.json({
				message: "Error adding comment",
				error: err,
			});
		});
};

router.get("/", getAllReviews);
router.post("/", isAuthorized(), isReviewer(), validate(schemas.reviewSchema), addReview);
router.put("/:reviewId", isAuthorized(), isReviewer(), validate(schemas.reviewSchema), updateReview);
router.delete("/:reviewId", isAuthorized(), isReviewer(), deleteReview);
router.patch("/:reviewId", isAuthorized(), addComment);

module.exports = router;
