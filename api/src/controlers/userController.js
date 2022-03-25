const router = require("express").Router();

const userServices = require("./../services/userServices");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");

const register = (req, res) => {
    return userServices
        .register(req.body)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        });
};

router.post("/register", (validate(schemas.registerSchema), register));

module.exports = router;
