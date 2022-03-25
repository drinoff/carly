const router = require("express").Router();
const carsController = require("./controlers/carsController");
const userController = require("./controlers/userController");

router.use("/cars", carsController);
router.use("/user", userController);

module.exports = router;
