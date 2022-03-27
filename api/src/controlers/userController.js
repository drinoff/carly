const router = require("express").Router();

const userServices = require("./../services/userServices");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");

const register = async (req, res) => {
    try {
        const result = await userServices.register(req.body);

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const login = async (req, res) => {
    try {
        const result = await userServices.login(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

router.post("/register", validate(schemas.registerSchema), register);
router.post("/login", validate(schemas.loginSchema), login);

module.exports = router;
