const router = require("express").Router();
const reviewServices = require("../services/reviewServices");
const { isAuthorized, isReviewer } = require("../middlewares/guards");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");

const getAllReviews = (req, res) => {
	reviewServices
		.getAllReviews()
		.then((reviews) => {
			res.send(reviews);
		})
		.catch((err) => {
			res.send(err);
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

router.get("/", getAllReviews);
router.post("/", isAuthorized(), isReviewer(), validate(schemas.reviewSchema), addReview);

module.exports = router;
