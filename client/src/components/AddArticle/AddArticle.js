import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth/authSlice";
import reviewServices from "../../services/reviewServices";
import "./AddArticle.css";

const AddArticle = () => {
	const user = useSelector(userSelector);

	const onAddArticleFormSubmitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const title = formData.get("title");
		const brand = formData.get("brand");
		const model = formData.get("model");
		const description = formData.get("articleDescription");
		const embed = formData.get("embed");
		const highs = formData.get("highs");
		const lows = formData.get("lows");
		const verdict = formData.get("verdict");

		const articleData = {
			title,
			brand,
			model,
			description,
			embed,
			highs,
			lows,
			verdict,
			ownerId: user.id,
			date: Date.now(),
			comments: [],
		};
		console.log(articleData);
		reviewServices
			.addReview(articleData)
			.then((article) => {
				console.log(article);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Box
			className="addArticleContainer"
			sx={{
				bgcolor: "#111827",
				height: "auto",
				width: "70%",
			}}
		>
			<h1 className="addArticleHeading">Add Article</h1>
			<form
				id="addArticle-form"
				action="POST"
				className="addArticle-form"
				onSubmit={onAddArticleFormSubmitHandler}
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

				<div className="embedContainer">
					<label htmlFor="embed">Embed URL</label>
					<input autoComplete="off" id="embed" type="text" name="embed" className="formInputStyle" />
				</div>

				<div className="highsContainer">
					<label htmlFor="embed">Highs</label>
					<input autoComplete="off" id="highs" type="text" name="highs" className="formInputStyle" />
				</div>

				<div className="lowsContainer">
					<label htmlFor="embed">Lows</label>
					<input autoComplete="off" id="lows" type="text" name="lows" className="formInputStyle" />
				</div>

				<div className="verdictContainer">
					<label htmlFor="embed">Verdict</label>
					<input autoComplete="off" id="verdict" type="text" name="verdict" className="formInputStyle" />
				</div>

				<input className="addArticleActionButton" type="submit" value="Add Article" />
			</form>
		</Box>
	);
};

export default AddArticle;
