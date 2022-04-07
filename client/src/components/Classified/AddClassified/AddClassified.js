import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { userSelector } from "../../../features/auth/authSlice";
import Pictures from "./Pictures";
import TechData from "./TechData";
import ExtrasCheckboxes from "./ExtrasCheckboxes";
import Location from "./Location";
import { INITIAL_CLASSIFIED_STATE, TECH_DATA_INITIAL_STATE, INITIAL_LOCATION_STATE, EXTRAS } from "../../../constants";
import classifiedServices from "../../../services/classifiedServices";

import "./AddClassified.css";

const AddClassified = ({ onError }) => {
	const navigate = useNavigate();
	const [pictures, setPictures] = useState(["", "", "", "", ""]);
	const [techData, setTechData] = useState(TECH_DATA_INITIAL_STATE);
	const [extras, setExtras] = useState(EXTRAS);
	const [location, setLocation] = useState(INITIAL_LOCATION_STATE);

	const [classified, setClassified] = useState(INITIAL_CLASSIFIED_STATE);

	const user = useSelector(userSelector);

	const onAddClassifiedFormSubmitHandler = (event) => {
		event.preventDefault();
		const classifiedData = {
			...classified,
			techData: techData,
			location: location,
			extras: extras,
			images: pictures,
			ownerId: user.id,
		};
		classifiedServices
			.addClassified(classifiedData)
			.then((res) => {
				console.log(res);
				navigate("/classifieds");
			})
			.catch((err) => {
				onError(err.error);
			});
	};

	const acordeonHandler = (e) => {
		const target = e.target;
		const panel = target.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight * 10 + "px";
		}
	};

	const techDataCallBack = (data) => {
		setTechData(data);
	};

	const picturesCallBack = (data) => {
		setPictures(data);
	};

	const extrasCallBack = (data) => {
		setExtras(data);
	};

	const locationCallBack = (data) => {
		setLocation(data);
	};

	return (
		<div className="classifiedContainer">
			<Box
				className="addArticleContainer"
				sx={{
					bgcolor: "#111827",
					height: "auto",
					width: "100%",
				}}
			>
				<h1 className="addArticleHeading">Add Classified</h1>
				<form
					id="addArticle-form"
					action="POST"
					className="addArticle-form"
					onSubmit={onAddClassifiedFormSubmitHandler}
				>
					<div className="titleContainer">
						<label htmlFor="title">Title</label>
						<input
							autoComplete="off"
							id="title"
							type="text"
							name="title"
							className="formInputStyle"
							value={classified.title}
							onChange={(e) => setClassified({ ...classified, title: e.target.value })}
						/>
					</div>

					<div className="brandContainer">
						<label htmlFor="brand">Brand</label>
						<input
							autoComplete="off"
							id="brand"
							type="text"
							name="brand"
							className="formInputStyle"
							value={classified.brand}
							onChange={(e) => setClassified({ ...classified, brand: e.target.value })}
						/>
					</div>

					<div className="modelContainer">
						<label htmlFor="model">Model</label>
						<input
							id="model"
							type="text"
							name="model"
							className="formInputStyle"
							value={classified.model}
							onChange={(e) => setClassified({ ...classified, model: e.target.value })}
						/>
					</div>
					<div className="priceContainer">
						<label htmlFor="price">Price</label>
						<input
							id="price"
							type="text"
							name="price"
							className="formInputStyle"
							value={classified.price}
							onChange={(e) => setClassified({ ...classified, price: e.target.value })}
						/>
					</div>
					<div className="articleDescriptionContainer">
						<label htmlFor="rePass">Description</label>
						<textarea
							rows={6}
							cols={50}
							id="articleDescription"
							type="text"
							name="articleDescription"
							value={classified.description}
							onChange={(e) => setClassified({ ...classified, description: e.target.value })}
						></textarea>
					</div>
					<div className="categoryContainer">
						<label htmlFor="category">Category</label>
						<input
							autoComplete="off"
							id="category"
							type="text"
							name="category"
							className="formInputStyle"
							value={classified.category}
							onChange={(e) => setClassified({ ...classified, category: e.target.value })}
						/>
					</div>

					<button type="button" className="classifiedAccordion accordion" onClick={acordeonHandler}>
						Add Pictures
					</button>
					<div className="picturePanel">
						<Pictures initialPictures={pictures} picturesCallBack={picturesCallBack} />
					</div>

					<button type="button" className="techDataAccordion accordion" onClick={acordeonHandler}>
						Technical Data
					</button>
					<div className="picturePanel techDataContainer">
						<TechData techDataCallback={techDataCallBack} techData={techData} />
					</div>

					<button type="button" className="extrasdAccordion accordion" onClick={acordeonHandler}>
						Extras
					</button>
					<div className="picturePanel">
						<ExtrasCheckboxes extrasCallBack={extrasCallBack} />
					</div>
					<button type="button" className="locationAccordeon accordion" onClick={acordeonHandler}>
						Location
					</button>
					<div className="picturePanel locationContainer">
						<Location initialLocation={location} locationCallBack={locationCallBack} />
					</div>

					<input className="addArticleActionButton" type="submit" value="Add Classified" />
				</form>
			</Box>
		</div>
	);
};

export default AddClassified;
