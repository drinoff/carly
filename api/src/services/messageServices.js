const Messages = require("../models/Messages");
const getUserMessages = (userId) => {
	return Messages.find({ receiver: userId }).populate("sender").lean();
};

const sendMessage = (senderId, messageObj) => {
	return Messages.create({
		sender: senderId,
		receiver: messageObj.receiver,
		message: messageObj.message,
	});
};

const messageServices = {
	getUserMessages,
	sendMessage,
};

module.exports = messageServices;
