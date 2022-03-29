const mongoose = require("mongoose");

const classifiedSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

    images: [
        {
            type: String,
            required: true,
        },
    ],
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    techData: {
        year: {
            type: Number,
            required: true,
        },

        hp: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        milleage: {
            type: Number,
            required: true,
        },
        transmission: {
            type: String,
            required: true,
        },
        engineCapacity: {
            type: Number,
            required: true,
        },
        doors: {
            type: Number,
            required: true,
        },
        fuel: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        interiorColor: {
            type: String,
            required: true,
        },
        extras: [
            {
                type: String,
                required: true,
            },
        ],
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

const Classified = mongoose.model("Classified", classifiedSchema);

module.exports = Classified;
