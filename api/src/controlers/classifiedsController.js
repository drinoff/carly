const router = require("express").Router();
const classifiedServices = require("../services/classifiedServices");

const getAllClassifieds = (req, res) => {
    classifiedServices
        .getAllClassifieds()
        .then((classifieds) => {
            res.json(classifieds);
        })
        .catch((err) => {
            res.json(err);
        });
};

router.get("/", getAllClassifieds);

module.exports = router;
