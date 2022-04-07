const router = require("express").Router();

const userServices = require("./../services/userServices");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");
const { isAdmin, isAuthorized } = require("../middlewares/guards");
const { mapErrors } = require("../utils/mapper");

const register = async (req, res) => {
	try {
		const result = await userServices.register(req.body);

		res.status(201).json({ message: "Thank You for registering", result });
	} catch (err) {
		const error = mapErrors(err);
		res.status(400).json({ message: error });
	}
};

const login = async (req, res) => {
	try {
		const result = await userServices.login(req.body);
		res.status(200).json({ message: "Successfully logged in", result });
	} catch (err) {
		const error = mapErrors(err);
		res.status(400).json({ message: error });
	}
};
const logout = async (req, res) => {
	try {
		const result = await userServices.logout(req.body.token);
		res.status(200).json({ message: "Successfully logged out" });
	} catch (err) {
		const error = mapErrors(err);
		res.status(400).json({ message: error });
	}
};
const getAllUsers = async (req, res) => {
	try {
		const result = await userServices.getAllUsers();
		res.status(200).json(result);
	} catch (err) {
		const error = mapErrors(err);
		res.status(400).json({ message: error });
	}
};

const updateUserRole = async (req, res) => {
	try {
		const result = await userServices.updateUserRole(req.body);
		res.status(200).json({ message: "Successfully edited user role", result });
	} catch (err) {
		const error = mapErrors(err);
		res.status(400).json({ message: error });
	}
};

router.get("/", isAuthorized(), isAdmin(), getAllUsers);
router.post("/register", validate(schemas.registerSchema), register);
router.post("/login", validate(schemas.loginSchema), login);
router.put("/:id", isAuthorized(), isAdmin(), updateUserRole);
router.post("/logout", logout);

module.exports = router;
