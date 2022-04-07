const router = require("express").Router();
const { isAuthorized, isAdmin } = require("../middlewares/guards");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");
const carServices = require("../services/carServices");
const mapErrors = require("../utils/mapper");

const addModel = (req, res) => {
	const { brandId } = req.body;
	delete req.body.brandId;
	const model = req.body;

	return carServices
		.addModel(model, brandId)
		.then((res) => {
			res.status(201).json({ message: "Successfully added", res });
		})
		.catch((err) => {
			const error = mapErrors(err);
			res.status(400).json({ message: error });
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
			const error = mapErrors(err);
			res.status(400).json({ message: error });
		});
};

const updateModel = (req, res) => {
	const { modelId } = req.params;
	const model = req.body;
	return carServices
		.updateModel(modelId, model)
		.then((model) => {
			res.json({ message: "Successfully updated", model });
		})
		.catch((err) => {
			const error = mapErrors(err);
			res.status(400).json({ message: error });
		});
};

const deleteModel = (req, res) => {
	const { modelId } = req.params;

	return carServices
		.deleteModel(modelId)
		.then(() => {
			res.status(204).json({ message: "Successfully deleted" });
		})
		.catch((err) => {
			const error = mapErrors(err);
			res.status(400).json({ message: error });
		});
};

router.post("/", isAuthorized(), isAdmin(), validate(schemas.addModelSchema), addModel);

router.get("/:modelId", getModelById);
router.put("/:modelId", isAuthorized(), isAdmin(), validate(schemas.addModelSchema), updateModel);
router.delete("/:modelId", isAuthorized(), isAdmin(), deleteModel);

module.exports = router;
