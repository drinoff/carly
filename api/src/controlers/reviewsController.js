const router = require("express").Router();
const reviewServices = require("../services/reviewServices");
const { isAuthorized, isReviewer } = require("../middlewares/guards");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");
const { mapErrors } = require("../utils/mapper");

const getAllReviews = (req, res) => {
	reviewServices
		.getAllReviews()
		.then((reviews) => {
			res.json(reviews);
		})
		.catch((err) => {
			const error = mapErrors(err);
			res.status(400).json({ message: error });
		});
};

const addReview = (req, res) => {
	reviewServices
		.addReview(req.body)
		.then((review) => {
			res.status(201).json({ message: "Review Added Successfully", review });
		})
		.catch((err) => {
			const error = mapErrors(err);
			res.status(400).json({ message: error });
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
			const error = mapErrors(err);
			res.status(400).json({ message: error });
		});
};

const deleteReview = (req, res) => {
	reviewServices
		.deleteReview(req.params.reviewId)
		.then(() => {
			res.status(204).json({ message: "Review deleted successfully" });
		})
		.catch((err) => {
			const error = mapErrors(err);
			res.status(400).json({ message: error });
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
			const error = mapErrors(err);
			res.status(400).json({ message: error });
		});
};

router.get("/", getAllReviews);
router.post("/", isAuthorized(), isReviewer(), validate(schemas.reviewSchema), addReview);
router.put("/:reviewId", isAuthorized(), isReviewer(), validate(schemas.reviewSchema), updateReview);
router.delete("/:reviewId", isAuthorized(), isReviewer(), deleteReview);
router.patch("/:reviewId", isAuthorized(), addComment);

module.exports = router;
