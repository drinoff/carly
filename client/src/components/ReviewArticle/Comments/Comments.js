import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../../features/auth/authSlice";
import reviewServices from "../../../services/reviewServices";

import "./Comments.css";

const Comments = ({ review }) => {
	const [message, setMessage] = useState("");
	const user = useSelector(userSelector);

	const onSendCommentCLickHandler = (e) => {
		const commentData = {
			message,
			owner: user.email.slice(0, user.email.indexOf("@")),
		};
		const updatedReview = Object.assign({}, review, { comments: [...review.comments, commentData] });

		reviewServices
			.addComment(review._id, commentData)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
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
				{review?.comments?.map((comment) => (
					<div key={`${Date.now()}+${Math.random()}`}>
						<p className="commentOwner">{comment.owner}</p>
						<p className="commentMessage">{comment.comment}</p>
					</div>
				))}

				<input
					type="text"
					className="addComment"
					placeholder="Write something...."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button className="sendComment" onClick={onSendCommentCLickHandler}>
					Add Comment
				</button>
			</div>
		</>
	);
};

export default Comments;
