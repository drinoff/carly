const router = require("express").Router();
const messageServices = require("../services/messageServices");

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

const sendMessage = (req, res) => {
	const senderId = req.params.userId;
	const messageObj = req.body;

	messageServices
		.sendMessage(senderId, messageObj)
		.then((message) => {
			res.json(message);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

router.get("/:userId", getUserMessages);
router.post("/:userId", sendMessage);

module.exports = router;
