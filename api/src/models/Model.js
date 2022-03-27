const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    мodel: {
        type: String,
        required: true,
        validate: [
            /^[a-zA-Z0-9 ]+$/,
            "Model should contain only english letters,digits and spaces",
        ],
    },
    avgPrice: {
        type: Number,
        required: true,
        validate: [/^[0-9]+$/, "Average price should contain only digits"],
    },
    description: {
        type: String,
        required: true,
        minlength: 100,
    },
    images: [
        {
            type: String,
            required: true,
            validate: [
                /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                "Please enter a valid URL",
            ],
        },
    ],
});

const Model = mongoose.model("Model", modelSchema);

module.exports = Model;
