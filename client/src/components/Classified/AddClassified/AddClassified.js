import { Box } from "@mui/material";

import "./AddClassified.css";

const AddClassified = () => {
	const onAddClassifiedFormSubmitHandler = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
	};

	const acordeonHandler = (e) => {
		if (e.target.textContent === "Fill Car Data") {
			const panel = document.getElementsByClassName("addArticleContainer")[0];
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight * 2 + "px";
			}
		} else if (e.target.textContent === "Fill Technical Data") {
			const panel = document.getElementsByClassName("addArticleTechDataContainer")[0];
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight * 2 + "px";
			}
		} else if (e.target.textContent === "Fill Extras") {
			const panel = document.getElementsByClassName("addArticleExtrasContainer")[0];
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight * 2 + "px";
			}
		}
	};

	return (
		<div className="classifiedContainer">
			<button className="classifiedAccordion articleData" onClick={acordeonHandler}>
				Fill Car Data
			</button>
			<button className="classifiedAccordion techData" onClick={acordeonHandler}>
				Fill Technical Data
			</button>
			<button className="classifiedAccordion extras" onClick={acordeonHandler}>
				Fill Extras
			</button>
			<Box
				className="addArticleContainer"
				sx={{
					bgcolor: "#111827",
					height: "auto",
					width: "100%",
				}}
			>
				<h1 className="addArticleHeading">Car Data</h1>
				<form
					id="addArticle-form"
					action="POST"
					className="addArticle-form"
					onSubmit={onAddClassifiedFormSubmitHandler}
				>
					<div className="titleContainer">
						<label htmlFor="title">Title</label>
						<input autoComplete="off" id="title" type="text" name="title" className="formInputStyle" />
					</div>

					<div className="brandContainer">
						<label htmlFor="brand">Brand</label>
						<input autoComplete="off" id="brand" type="text" name="brand" className="formInputStyle" />
					</div>

					<div className="modelContainer">
						<label htmlFor="logo">Model</label>
						<input id="model" type="text" name="model" className="formInputStyle" />
					</div>
					<div className="priceContainer">
						<label htmlFor="price">Price</label>
						<input id="price" type="text" name="price" className="formInputStyle" />
					</div>
					<div className="articleDescriptionContainer">
						<label htmlFor="rePass">Description</label>
						<textarea
							rows={6}
							cols={50}
							id="articleDescription"
							type="text"
							name="articleDescription"
						></textarea>
					</div>

					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-a" type="text" name="modelPic-a" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-b" type="text" name="modelPic-b" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-c" type="text" name="modelPic-c" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-d" type="text" name="modelPic-d" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-e" type="text" name="modelPic-e" className="formInputStyle" />
					</div>

					<div className="categoryContainer">
						<label htmlFor="category">Category</label>
						<input
							autoComplete="off"
							id="category"
							type="text"
							name="category"
							className="formInputStyle"
						/>
					</div>

					<input className="addArticleActionButton" type="submit" value="Add Classified" />
				</form>
			</Box>

			<Box
				className="addArticleTechDataContainer"
				sx={{
					bgcolor: "#111827",
					height: "auto",
					width: "100%",
				}}
			>
				<h1 className="addArticleHeading">Technical Data</h1>
				<form
					id="addArticle-form"
					action="POST"
					className="addArticle-form"
					onSubmit={onAddClassifiedFormSubmitHandler}
				>
					<div className="titleContainer">
						<label htmlFor="title">Title</label>
						<input autoComplete="off" id="title" type="text" name="title" className="formInputStyle" />
					</div>

					<div className="brandContainer">
						<label htmlFor="brand">Brand</label>
						<input autoComplete="off" id="brand" type="text" name="brand" className="formInputStyle" />
					</div>

					<div className="modelContainer">
						<label htmlFor="logo">Model</label>
						<input id="model" type="text" name="model" className="formInputStyle" />
					</div>
					<div className="priceContainer">
						<label htmlFor="price">Price</label>
						<input id="price" type="text" name="price" className="formInputStyle" />
					</div>
					<div className="articleDescriptionContainer">
						<label htmlFor="rePass">Description</label>
						<textarea
							rows={6}
							cols={50}
							id="articleDescription"
							type="text"
							name="articleDescription"
						></textarea>
					</div>

					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-a" type="text" name="modelPic-a" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-b" type="text" name="modelPic-b" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-c" type="text" name="modelPic-c" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-d" type="text" name="modelPic-d" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-e" type="text" name="modelPic-e" className="formInputStyle" />
					</div>

					<div className="categoryContainer">
						<label htmlFor="category">Category</label>
						<input
							autoComplete="off"
							id="category"
							type="text"
							name="category"
							className="formInputStyle"
						/>
					</div>

					<input className="addArticleActionButton" type="submit" value="Add Classified" />
				</form>
			</Box>
			<Box
				className="addArticleExtrasContainer"
				sx={{
					bgcolor: "#111827",
					height: "auto",
					width: "100%",
				}}
			>
				<h1 className="addArticleHeading">Extras</h1>
				<form
					id="addArticle-form"
					action="POST"
					className="addArticle-form"
					onSubmit={onAddClassifiedFormSubmitHandler}
				>
					<div className="titleContainer">
						<label htmlFor="title">Title</label>
						<input autoComplete="off" id="title" type="text" name="title" className="formInputStyle" />
					</div>

					<div className="brandContainer">
						<label htmlFor="brand">Brand</label>
						<input autoComplete="off" id="brand" type="text" name="brand" className="formInputStyle" />
					</div>

					<div className="modelContainer">
						<label htmlFor="logo">Model</label>
						<input id="model" type="text" name="model" className="formInputStyle" />
					</div>
					<div className="priceContainer">
						<label htmlFor="price">Price</label>
						<input id="price" type="text" name="price" className="formInputStyle" />
					</div>
					<div className="articleDescriptionContainer">
						<label htmlFor="rePass">Description</label>
						<textarea
							rows={6}
							cols={50}
							id="articleDescription"
							type="text"
							name="articleDescription"
						></textarea>
					</div>

					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-a" type="text" name="modelPic-a" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-b" type="text" name="modelPic-b" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-c" type="text" name="modelPic-c" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-d" type="text" name="modelPic-d" className="formInputStyle" />
					</div>
					<div className="pictureContainer">
						<label htmlFor="modelPic">Image URL</label>
						<input id="modelPic-e" type="text" name="modelPic-e" className="formInputStyle" />
					</div>

					<div className="categoryContainer">
						<label htmlFor="category">Category</label>
						<input
							autoComplete="off"
							id="category"
							type="text"
							name="category"
							className="formInputStyle"
						/>
					</div>

					<input className="addArticleActionButton" type="submit" value="Add Classified" />
				</form>
			</Box>
		</div>
	);
};

export default AddClassified;
