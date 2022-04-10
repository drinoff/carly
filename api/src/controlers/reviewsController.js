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
			res.status(400).json({ message: err });
		});
};

const addReview = (req, res) => {
	reviewServices
		.addReview(req.body)
		.then((review) => {
			res.status(201).json({ message: "Review Added Successfully", review });
		})
		.catch((err) => {
			res.status(400).json({ message: err });
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
			res.status(400).json({ message: err });
		});
};

const deleteReview = (req, res) => {
	reviewServices
		.deleteReview(req.params.reviewId)
		.then(() => {
			res.status(200).json({ message: "Review deleted successfully" });
		})
		.catch((err) => {
			res.status(400).json({ message: err });
		});
};

const addComment = (req, res) => {
	reviewServices
		.addComment(req.params.reviewId, req.body)

		.then((updatedReview) => {
			res.status(201).json({
				message: "Comment added successfully",
				updatedReview,
			});
		})
		.catch((err) => {
			res.status(400).json({ message: err });
		});
};

const deleteComment = (req, res) => {
	reviewServices
		.deleteComment(req.params.reviewId, req.params.commentId)
		.then((updatedReview) => {
			res.status(201).json({
				message: "Comment deleted successfully",
				updatedReview,
			});
		})
		.catch((err) => {
			res.status(400).json({ message: err });
		});
};

router.get("/", getAllReviews);
router.post("/", isAuthorized(), isReviewer(), validate(schemas.reviewSchema), addReview);
router.put("/:reviewId", isAuthorized(), isReviewer(), validate(schemas.reviewSchema), updateReview);
router.delete("/:reviewId", isAuthorized(), isReviewer(), deleteReview);
router.patch("/:reviewId", isAuthorized(), addComment);
router.delete("/:reviewId/:commentId", isAuthorized(), deleteComment);

module.exports = router;
