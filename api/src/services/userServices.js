const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../constants").JWT_SECRET;

const blacklist = [];

const register = async (userData) => {
	const { email, password } = userData;
	const user = await User.findOne({ email });
	if (user) {
		throw new Error("User already exists");
	}
	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = new User({
		email,
		password: hashedPassword,
	});
	await newUser.save();
	return createSession(newUser);
};

const login = async (userData) => {
	try {
		const { email, password } = userData;
		const user = await User.findOne({ email: email.trim().toLowerCase() });
		if (!user) {
			throw new Error("User does not exist");
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			throw new Error("Email or Password is incorrect");
		}
		return createSession(user);
	} catch (error) {
		return error.message;
	}
};

const logout = async (token) => {
	blacklist.push(token);
	return { message: "Logout successful" };
};

function createSession(user) {
	return {
		email: user.email,
		role: user.role,
		_id: user._id,
		isAuthenticated: true,
		accessToken: jwt.sign(
			{
				email: user.email,
				_id: user._id,
			},
			JWT_SECRET,
			{ expiresIn: "1h" }
		),
	};
}

function verifySession(token) {
	if (blacklist.includes(token)) {
		throw new Error("Token is invalidated");
	}

	const payload = jwt.verify(token, JWT_SECRET);

	return {
		email: payload.email,
		_id: payload._id,
		role: payload.role,
		token,
	};
}

const getAllUsers = async () => {
	const users = await User.find({});
	return users.map((user) => ({
		email: user.email,
		role: user.role,
		_id: user._id,
	}));
};

const updateUserRole = async (userData) => {
	const user = await User.findById(userData._id);
	if (!user) {
		throw new Error("User does not exist");
	}
	user.role = userData.role;
	await user.save();
	return user.map((user) => ({
		email: user.email,
		role: user.role,
		_id: user._id,
	}));
};

const deleteUser = async (userId) => {
	const user = await User.findById(userId);
	if (!user) {
		throw new Error("User does not exist");
	}
	await user.remove();
	return { message: "User deleted successfully" };
};

const userServices = {
	register,
	login,
	logout,
	verifySession,
	getAllUsers,
	updateUserRole,
	deleteUser,
};

module.exports = userServices;
