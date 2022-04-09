const router = require("express").Router();

const getUserMessages = (req, res) => {
	const userId = req.params.userId;
	messageServices
		.getUserMessages(userId)
		.then((messages) => {
			res.json(messages);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
};

router.get("/:userId", getUserMessages);

module.exports = router;
