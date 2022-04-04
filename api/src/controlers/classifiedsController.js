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

const addClassified = (req, res) => {
	const classified = req.body;
	classifiedServices
		.addClassified(classified)
		.then((classified) => {
			res.json(classified);
		})
		.catch((err) => {
			res.json(err);
		});
};

const updateClassified = (req, res) => {
	const classified = req.body;
	const classifiedId = req.params.id;
	classifiedServices
		.updateClassified(classifiedId, classified)
		.then((classified) => {
			res.json(classified);
		})
		.catch((err) => {
			res.json(err);
		});
};

const deleteClassified = (req, res) => {
	const id = req.params.id;
	classifiedServices
		.deleteClassified(id)
		.then((classified) => {
			res.json(classified);
		})
		.catch((err) => {
			res.json(err);
		});
};

router.get("/", getAllClassifieds);
router.post("/", addClassified);
router.delete("/:id", deleteClassified);
router.put("/:id", updateClassified);

module.exports = router;
