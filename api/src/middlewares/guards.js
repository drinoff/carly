const { verifySession } = require("../services/userServices");
const User = require("../models/User");

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
                message: "Invalid access token. Please sign in",
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

module.exports = {
    isAuthorized,
    isAdmin,
};
