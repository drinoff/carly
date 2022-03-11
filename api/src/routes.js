const router = require("express").Router();
const carsController = require("./controlers/carsController");

router.use("/cars", carsController);

module.exports = router;
