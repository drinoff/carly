const Messages = require("../models/Messages");
const getUserMessages = (userId) => {
	return Messages.find({ receiver: userId });
};
