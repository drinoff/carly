const Classified = require("../models/Classified");

const getAllClassifieds = () => {
	return Classified.find({})
		.populate("ownerId", "email")
		.lean()
		.then((classifieds) => {
			return classifieds;
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

const addClassified = (classified) => {
	return Classified.create(classified)
		.then((classified) => {
			return classified;
		})
		.catch((err) => {
			throw err;
		});
};

const updateClassified = (classifiedId, classified) => {
	return Classified.findByIdAndUpdate(classifiedId, classified, { new: true })
		.then((classified) => {
			return classified;
		})
		.catch((err) => {
			throw err;
		});
};

const deleteClassified = (id) => {
	return Classified.findByIdAndDelete(id)
		.then((classified) => {
			return classified;
		})
		.catch((err) => {
			throw err;
		});
};

const classifiedServices = {
	getAllClassifieds,
	addClassified,
	deleteClassified,
	updateClassified,
};

module.exports = classifiedServices;
