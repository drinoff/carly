const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 12,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    classifieds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Classified",
        },
    ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
