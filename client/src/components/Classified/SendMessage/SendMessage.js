import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import messageServices from "../../../services/messageServices";
const { useLocation } = require("react-router-dom");

const SendMessage = ({ onError }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const senderId = location.state.userId;
	const classifiedTitle = location.state.classifiedTitle;
	const classified = location.state.classified;
	const [message, setMessage] = useState("");

	const sendMessageClickHandler = () => {
		if (message.length === 0) {
			onError(["Message cannot be empty"]);
			return;
		}
		const messageObj = {
			receiver: classified.ownerId,
			message: message,
		};

		messageServices
			.sendMessage(senderId, messageObj)
			.then((res) => {
				setMessage("");
				navigate(`/classifieds/${classified._id}`, { state: { classified } });

				onError(res.error || "Successfully sent message");
			})
			.catch((err) => {
				onError(err);
			});
	};

	return (
		<Box
			className="addArticleContainer"
			sx={{
				bgcolor: "#111827",
				height: "auto",
				width: "100%",
			}}
		>
			<div className="titleContainer">
				<label htmlFor="title">Title</label>
				<input
					autoComplete="off"
					id="title"
					type="text"
					name="title"
					className="formInputStyle"
					readOnly
					value={classifiedTitle}
				/>
			</div>
			<div className="titleContainer">
				<label htmlFor="messageforClassified">Message</label>
				<textarea
					rows={6}
					cols={50}
					id="articleDescription"
					type="text"
					name="articleDescription"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>

			<input
				className="addArticleActionButton"
				type="submit"
				value="Send Message"
				onClick={sendMessageClickHandler}
			/>
		</Box>
	);
};

export default SendMessage;
