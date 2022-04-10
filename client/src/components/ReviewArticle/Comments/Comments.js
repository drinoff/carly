import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector, isAuthenticatedSelector } from "../../../features/auth/authSlice";
import reviewServices from "../../../services/reviewServices";

import "./Comments.css";

const Comments = ({ review }) => {
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState(review.comments);
	const user = useSelector(userSelector);
	const isAuthenticated = useSelector(isAuthenticatedSelector);

	const onSendCommentCLickHandler = (e) => {
		const commentData = {
			comment,
			owner: user.email.slice(0, user.email.indexOf("@")),
		};
		// const updatedReview = Object.assign({}, review, { comments: [...review.comments, commentData] });
		reviewServices
			.addComment(review._id, commentData)
			.then((res) => {
				setComments(res.updatedReview.comments);
				setComment("");
			})
			.catch((err) => {});
	};

	const commentsDeleteButtonClickHandler = (e) => {
		reviewServices.deleteComment(review._id, e.target.id).then((res) => {
			setComments(res.updatedReview.comments);
		});
	};
	const acordeonHandler = (e) => {
		const target = e.target;
		const panel = target.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	};

	return (
		<>
			<button className="accordion" onClick={acordeonHandler}>
				Comments
			</button>
			<div className="panel">
				{comments?.map((comment) => (
					<div key={`${Date.now()}+${Math.random()}`}>
						<div className="commentsContainer">
							<p className="commentOwner">{comment.owner} :</p>
							<p className="commentMessage">{comment.comment}</p>
							{isAuthenticated && user.role === "admin" ? (
								<img
									id={comment._id}
									className="deleteCommentReview"
									onClick={commentsDeleteButtonClickHandler}
									alt="deleteCommentReview"
									src="/images/delete.svg"
								/>
							) : isAuthenticated &&
							  user.email?.charAt(0).toLowerCase() +
									user.email?.slice(1, user.email?.indexOf("@")).toString() ===
									comment.owner ? (
								<img
									id={comment._id}
									className="deleteCommentReview"
									onClick={commentsDeleteButtonClickHandler}
									alt="deleteCommentReview"
									src="/images/delete.svg"
								/>
							) : null}
						</div>
					</div>
				))}
				{isAuthenticated ? (
					<>
						<input
							type="text"
							className="addComment"
							placeholder="Write something...."
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						/>

						<button className="sendComment" onClick={onSendCommentCLickHandler}>
							Add Comment
						</button>
					</>
				) : null}
			</div>
		</>
	);
};

export default Comments;
