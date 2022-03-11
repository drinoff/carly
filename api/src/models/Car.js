const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        validate: [
            /^[a-zA-Z ]+$/,
            "Brand should contain only english letters and spaces",
        ],
    },
    models: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Model",
        },
    ],

    brandHistory: {
        type: String,
        required: true,
        minlength: 100,
    },
    logo: {
        type: String,
        required: true,
        validate: [
            /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
            "Please enter a valid URL",
        ],
    },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
