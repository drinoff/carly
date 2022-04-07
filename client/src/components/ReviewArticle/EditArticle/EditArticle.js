import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import reviewServices from "../../../services/reviewServices";

import { Box } from "@mui/material";

import "./EditArticle.css";

const EditArticle = ({ onError }) => {
	const location = useLocation();
	const review = location.state.review;
	const navigate = useNavigate();
	const [article, setArticle] = useState(review);

	const onEditArticleFormSubmitHandler = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
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
			ownerId: article.ownerId,
			regDate: article.regDate,
			comments: article.comments,
		};

		reviewServices.updateReview(article._id, articleData).then((res) => {
			if (res.error) {
				onError(res.error);
			} else {
				onError(res.message);
				navigate(`/blog`);
			}
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
			<h1 className="addArticleHeading">Edit Article</h1>
			<form
				id="addArticle-form"
				action="POST"
				className="addArticle-form"
				onSubmit={onEditArticleFormSubmitHandler}
			>
				<div className="titleContainer">
					<label htmlFor="title">Title</label>
					<input
						autoComplete="off"
						id="title"
						type="text"
						name="title"
						className="formInputStyle"
						value={article.title}
						onChange={(event) => setArticle({ ...article, title: event.target.value })}
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
						value={article.brand}
						onChange={(event) => setArticle({ ...article, brand: event.target.value })}
					/>
				</div>

				<div className="modelContainer">
					<label htmlFor="logo">Model</label>
					<input
						id="model"
						type="text"
						name="model"
						className="formInputStyle"
						value={article.model}
						onChange={(event) => setArticle({ ...article, model: event.target.value })}
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
						value={article.description}
						onChange={(event) => setArticle({ ...article, description: event.target.value })}
					></textarea>
				</div>

				<div className="embedContainer">
					<label htmlFor="embed">Embed URL</label>
					<input
						autoComplete="off"
						id="embed"
						type="text"
						name="embed"
						className="formInputStyle"
						value={article.embed}
						onChange={(event) => setArticle({ ...article, embed: event.target.value })}
					/>
				</div>

				<div className="highsContainer">
					<label htmlFor="embed">Highs</label>
					<input
						autoComplete="off"
						id="highs"
						type="text"
						name="highs"
						className="formInputStyle"
						value={article.highs}
						onChange={(event) => setArticle({ ...article, highs: event.target.value })}
					/>
				</div>

				<div className="lowsContainer">
					<label htmlFor="embed">Lows</label>
					<input
						autoComplete="off"
						id="lows"
						type="text"
						name="lows"
						className="formInputStyle"
						value={article.lows}
						onChange={(event) => setArticle({ ...article, lows: event.target.value })}
					/>
				</div>

				<div className="verdictContainer">
					<label htmlFor="embed">Verdict</label>
					<input
						autoComplete="off"
						id="verdict"
						type="text"
						name="verdict"
						className="formInputStyle"
						value={article.verdict}
						onChange={(event) => setArticle({ ...article, verdict: event.target.value })}
					/>
				</div>

				<input className="addArticleActionButton" type="submit" value="Edit Article" />
			</form>
		</Box>
	);
};

export default EditArticle;
