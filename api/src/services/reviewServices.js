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

const reviewServices = {
    getAllReviews,
};

module.exports = reviewServices;
