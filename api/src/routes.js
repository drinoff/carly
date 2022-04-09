const router = require("express").Router();
const carsController = require("./controlers/carsController");
const userController = require("./controlers/userController");
const reviewsController = require("./controlers/reviewsController");
const classifiedsController = require("./controlers/classifiedsController");
const modelController = require("./controlers/modelController");
const emailController = require("./controlers/emailController");
const messagesController = require("./controlers/messagesController");

router.use("/cars", carsController);
router.use("/models", modelController);
router.use("/user", userController);
router.use("/reviews", reviewsController);
router.use("/classifieds", classifiedsController);
router.use("/email", emailController);
router.use("/messages", messagesController);

module.exports = router;
