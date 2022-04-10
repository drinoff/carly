const router = require("express").Router();

const userServices = require("./../services/userServices");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");
const { isAdmin, isAuthorized } = require("../middlewares/guards");

const register = async (req, res) => {
	try {
		const result = await userServices.register(req.body);

		res.status(201).json({ message: "Thank You for registering", result });
	} catch (err) {
		res.status(400).json({ message: err });
	}
};

const login = async (req, res) => {
	try {
		const result = await userServices.login(req.body);
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json({ message: err });
	}
};
const logout = async (req, res) => {
	try {
		const result = await userServices.logout(req.body.token);
		res.status(200).json({ message: "Successfully logged out" });
	} catch (err) {
		res.status(400).json({ message: err });
	}
};
const getAllUsers = async (req, res) => {
	try {
		const result = await userServices.getAllUsers();
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json({ message: err });
	}
};

const updateUserRole = async (req, res) => {
	try {
		const result = await userServices.updateUserRole(req.body);
		res.status(200).json({ message: "Successfully edited user role", result });
	} catch (err) {
		res.status(400).json({ message: err });
	}
};

const deleteUser = async (req, res) => {
	try {
		const result = await userServices.deleteUser(req.params.id);
		res.status(200).json({ message: "Successfully deleted user", result });
	} catch (err) {
		res.status(400).json({ message: err });
	}
};

router.get("/", isAuthorized(), isAdmin(), getAllUsers);
router.post("/register", validate(schemas.registerSchema), register);
router.post("/login", validate(schemas.loginSchema), login);
router.put("/:id", isAuthorized(), isAdmin(), updateUserRole);
router.post("/logout", logout);
router.delete("/:id", isAuthorized(), isAdmin(), deleteUser);

module.exports = router;
