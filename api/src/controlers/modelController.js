const router = require("express").Router();
const { isAuthorized, isAdmin } = require("../middlewares/guards");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");
const carServices = require("../services/carServices");

const addModel = (req, res) => {
    const { brandId } = req.body;
    delete req.body.brandId;
    const model = req.body;

    return carServices
        .addModel(model, brandId)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
        });
};

router.post(
    "/",
    isAuthorized(),
    isAdmin(),
    validate(schemas.addModelSchema),
    addModel
);

module.exports = router;
