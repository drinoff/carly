const router = require("express").Router();
const mailer = require("../services/mailer");
const { isAuthorized } = require("../middlewares/guards");

const sendMail = (req, res) => {
	mailer(req.body);
	res.status(200).json({ message: "Successfully sent" });
};

router.post("/", sendMail);

module.exports = router;
