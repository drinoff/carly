const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists"],
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
