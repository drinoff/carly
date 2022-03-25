const User = require("../models/User");

const register = (userData) => {
    return User.create(userData)
        .then((user) => {
            return user;
        })
        .catch((err) => {
            return err;
        });
};

const userServices = {
    register,
};

module.exports = userServices;
