const router = require("express").Router();
const reviewServices = require("../services/reviewServices");

router.get("/", (req, res) => {
    reviewServices
        .getAllReviews()
        .then((reviews) => {
            res.send(reviews);
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
