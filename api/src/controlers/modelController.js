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
			res.status(201).json(res);
		})
		.catch((err) => {
			console.log(err);
		});
};

const getModelById = (req, res) => {
	const { modelId } = req.params;
	return carServices
		.getModelById(modelId)
		.then((model) => {
			res.json(model);
		})
		.catch((err) => {
			console.log(err);
		});
};

const updateModel = (req, res) => {
	const { modelId } = req.params;
	const model = req.body;
	return carServices
		.updateModel(modelId, model)
		.then((model) => {
			res.json(model);
		})
		.catch((err) => {
			console.log(err);
		});
};

const deleteModel = (req, res) => {
	const { modelId } = req.params;

	return carServices
		.deleteModel(modelId)
		.then((model) => {
			res.json(model);
		})
		.catch((err) => {
			console.log(err);
		});
};

router.post("/", isAuthorized(), isAdmin(), validate(schemas.addModelSchema), addModel);

router.get("/:modelId", getModelById);
router.put("/:modelId", isAuthorized(), isAdmin(), validate(schemas.addModelSchema), updateModel);
router.delete("/:modelId", isAuthorized(), isAdmin(), deleteModel);

module.exports = router;
