const Messages = require("../models/Messages");
const getUserMessages = (userId) => {
	return Messages.find({ receiver: userId });
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
