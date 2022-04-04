import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import carServices from "../../../services/carServices";

const EditModel = () => {
	const [model, setModel] = useState({
		model: "",
		avgPrice: "",
		description: "",
		images: ["", "", "", ""],
	});

	const navigate = useNavigate();
	const location = useLocation();
	const currentModel = location.state.model;
	const modelId = currentModel._id;

	useEffect(() => {
		carServices
			.getModelById(modelId)
			.then((res) => {
				setModel(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [modelId]);

	const onEditModelFormSubmitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const model = formData.get("modelName");
		const avgPrice = formData.get("avgPrice");
		const description = formData.get("modelDesc");
		const picOne = formData.get("modelPic-a");
		const picTwo = formData.get("modelPic-b");
		const picThree = formData.get("modelPic-c");
		const picFour = formData.get("modelPic-d");

		const modelData = {
			model,
			avgPrice: Number(avgPrice),
			description,
			images: [picOne, picTwo, picThree, picFour],
			brandId: model.brandId,
		};

		carServices
			.updateModel(modelId, modelData)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
		navigate(`/cars`);
	};
	return (
		<Box
			className="addModelContainer"
			sx={{
				bgcolor: "#111827",
				height: "auto",
				width: "70%",
			}}
		>
			<h1 className="addModelHeading">Edit Model</h1>
			<form id="addModel-form" action="POST" className="addModel-form" onSubmit={onEditModelFormSubmitHandler}>
				<div className="modelNameContainer">
					<label htmlFor="modelName">Model Name</label>
					<input
						autoComplete="off"
						id="modelName"
						type="text"
						name="modelName"
						className="formInputStyle"
						value={model.model}
						onChange={(e) => {
							setModel({
								...model,
								model: e.target.value,
							});
						}}
					/>
				</div>

				<div className="avgPriceContainer">
					<label htmlFor="avgPrice">Average Price</label>
					<input
						id="avgPrice"
						type="text"
						name="avgPrice"
						className="formInputStyle"
						value={model.avgPrice}
						onChange={(e) => {
							setModel({
								...model,
								avgPrice: e.target.value,
							});
						}}
					/>
				</div>
				<div className="modelDescContainer">
					<label htmlFor="modelDesc">Model Description</label>
					<textarea
						rows={6}
						cols={50}
						id="modelDesc"
						type="text"
						name="modelDesc"
						value={model.description}
						onChange={(e) => {
							setModel({
								...model,
								description: e.target.value,
							});
						}}
					></textarea>
				</div>
				<div className="pictureContainer">
					<label htmlFor="modelPic">Image URL</label>
					<input
						id="modelPic-a"
						type="text"
						name="modelPic-a"
						className="formInputStyle"
						value={model.images[0]}
						onChange={(e) =>
							setModel({
								...model,
								images: [e.target.value, model.images[1], model.images[2], model.images[3]],
							})
						}
					/>
				</div>
				<div className="pictureContainer">
					<label htmlFor="modelPic">Image URL</label>
					<input
						id="modelPic-b"
						type="text"
						name="modelPic-b"
						className="formInputStyle"
						value={model.images[1]}
						onChange={(e) =>
							setModel({
								...model,
								images: [model.images[0], e.target.value, model.images[2], model.images[3]],
							})
						}
					/>
				</div>
				<div className="pictureContainer">
					<label htmlFor="modelPic">Image URL</label>
					<input
						id="modelPic-c"
						type="text"
						name="modelPic-c"
						className="formInputStyle"
						value={model.images[2]}
						onChange={(e) =>
							setModel({
								...model,
								images: [model.images[0], model.images[1], e.target.value, model.images[3]],
							})
						}
					/>
				</div>
				<div className="pictureContainer">
					<label htmlFor="modelPic">Image URL</label>
					<input
						id="modelPic-d"
						type="text"
						name="modelPic-d"
						className="formInputStyle"
						value={model.images[3]}
						onChange={(e) =>
							setModel({
								...model,
								images: [model.images[0], model.images[1], model.images[2], e.target.value],
							})
						}
					/>
				</div>

				<input className="addModelButton" type="submit" value="Edit Model" />
			</form>
		</Box>
	);
};
export default EditModel;
