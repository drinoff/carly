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
            JWT_SECRET
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

const userServices = {
    register,
    login,
    logout,
    verifySession,
};

module.exports = userServices;
