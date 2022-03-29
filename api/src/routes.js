const router = require("express").Router();
const carsController = require("./controlers/carsController");
const userController = require("./controlers/userController");
const reviewsController = require("./controlers/reviewsController");
const classifiedsController = require("./controlers/classifiedsController");

router.use("/cars", carsController);
router.use("/user", userController);
router.use("/reviews", reviewsController);
router.use("/classifieds", classifiedsController);

module.exports = router;
