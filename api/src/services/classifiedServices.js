const Classified = require("../models/Classified");

const getAllClassifieds = () => {
    return Classified.find({})
        .populate("ownerId", "email")
        .lean()
        .then((classifieds) => {
            console.log(classifieds);
            return classifieds;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const classifiedServices = {
    getAllClassifieds,
};

module.exports = classifiedServices;
