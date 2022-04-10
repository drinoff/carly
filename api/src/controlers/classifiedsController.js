const router = require("express").Router();
const { isAuthorized, isAdmin, isReviewer, isOwner } = require("../middlewares/guards");
const validate = require("../middlewares/validation/validate");
const schemas = require("../middlewares/validation/schemas");
const classifiedServices = require("../services/classifiedServices");

const getAllClassifieds = (req, res) => {
	classifiedServices
		.getAllClassifieds()
		.then((classifieds) => {
			res.json(classifieds);
		})
		.catch((err) => {
			res.status(400).json({ message: err });
		});
};

const addClassified = (req, res) => {
	const classified = req.body;
	classifiedServices
		.addClassified(classified)
		.then((classified) => {
			res.status(201).json({ message: "Succesffully created", classified });
		})
		.catch((err) => {
			res.status(400).json({ message: err });
		});
};

const updateClassified = (req, res) => {
	const classified = req.body;
	const classifiedId = req.params.id;
	classifiedServices
		.updateClassified(classifiedId, classified)
		.then((classified) => {
			res.json({ message: "Succesffully updated", classified });
		})
		.catch((err) => {
			res.status(400).json({ message: err });
		});
};

const deleteClassified = (req, res) => {
	const id = req.params.id;
	classifiedServices
		.deleteClassified(id)
		.then(() => {
			res.json({ message: "Successfully deleted" });
		})
		.catch((err) => {
			res.status(400).json({ message: err });
		});
};

router.get("/", getAllClassifieds);
router.post("/", isAuthorized(), validate(schemas.classifiedSchema), addClassified);
router.delete("/:id", isAuthorized(), isOwner(), deleteClassified);
router.put("/:id", isAuthorized(), isOwner(), validate(schemas.classifiedSchema), updateClassified);

module.exports = router;
