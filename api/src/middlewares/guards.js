const { verifySession } = require("../services/userServices");
const User = require("../models/User");
const Classified = require("../models/Classified");

function isAuthorized() {
	return (req, res, next) => {
		const token = req.headers["x-authorization"];

		try {
			if (token) {
				const userData = verifySession(token);
				req.user = userData;
			}
			next();
		} catch (err) {
			res.status(498).json({
				message: "Please log in",
			});
		}
	};
}

function isAdmin() {
	return async (req, res, next) => {
		const userEmail = req.user.email;
		const existing = await User.findOne({ email: userEmail });

		if (existing.role !== "admin") {
			res.status(403).json({
				message: "You are not authorized to perform this action",
			});
		} else {
			next();
		}
	};
}

function isReviewer() {
	return async (req, res, next) => {
		const userEmail = req.user.email;
		const existing = await User.findOne({ email: userEmail });

		if (existing.role === "reviewer" || existing.role === "admin") {
			next();
		} else {
			res.status(403).json({
				message: "You are not authorized to perform this action",
			});
		}
	};
}

function isOwner() {
	return async (req, res, next) => {
		const userEmail = req.user.email;
		const itemId = req.params.id;
		const existing = await User.findOne({ email: userEmail });
		const item = await Classified.findOne({ _id: itemId });

		if (existing._id.toString() === item.ownerId.toString() || existing.role === "admin") {
			next();
		} else {
			res.status(403).json({
				message: "You are not authorized to perform this action",
			});
		}
	};
}

module.exports = {
	isAuthorized,
	isAdmin,
	isReviewer,
	isOwner,
};
