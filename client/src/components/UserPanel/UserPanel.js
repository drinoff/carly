import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../features/auth/authSlice";
import { selectAllClassifieds } from "../../features/classifieds/classifiedSlice";
import { selectAllReviews } from "../../features/review/reviewSlice";
import { useEffect, useState } from "react";
import { fetchClassifieds } from "../../features/classifieds/classifiedSlice";
import { fetchReviews } from "../../features/review/reviewSlice";
import { Chart } from "./Chart";
import messageServices from "../../services/messageServices";

import { Box } from "@mui/material";

import "./UserPanel.css";

const UserPanel = () => {
	const loggedUser = JSON.parse(localStorage.getItem("user"));
	const allClassifieds = useSelector(selectAllClassifieds);
	const allReviews = useSelector(selectAllReviews);
	const [reviews, setReviews] = useState([]);
	const [classifieds, setClassifieds] = useState([]);
	const [userMessages, setUserMessages] = useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchClassifieds()).then(() => {
			setClassifieds(allClassifieds.filter((classified) => classified.ownerId?._id === loggedUser._id));
		});
		dispatch(fetchReviews()).then(() => {
			setReviews(allReviews.filter((review) => review.ownerId?._id === loggedUser.id));
		});

		messageServices.getUserMessages(loggedUser._id).then((res) => {
			if (res.name) {
				setUserMessages([]);
			} else {
				setUserMessages(res);
			}
		});
	}, [dispatch]);
	console.log(userMessages);
	const messagesIconClickHandler = () => {
		window.scrollTo({
			top: 1000,
			behavior: "smooth",
		});
	};

	const chartData = {
		labels: ["classifieds", "Reviews"],
		datasets: [
			{
				label: "User Chart",
				data: [classifieds.length, reviews.length],
				backgroundColor: ["#7582EB", "#8A2BE2"],
				borderColor: ["#7582EB", "#8A2BE2"],
				borderWidth: 5,
			},
		],
	};
	const userPanelClassifiedClickHandler = (e) => {
		navigate(`/classifieds/${e.target.id}`, {
			state: { classified: allClassifieds.find((classified) => classified._id === e.target.id) },
		});
	};
	return (
		<>
			<div className="userPanelContainer">
				<Box sx={{ bgcolor: "#0B0F19", height: "100vh", width: "87%" }}>
					<div className="infoContainer">
						<Box className="mainContainer" sx={{ bgcolor: "#7582EB", height: "20vh", width: "95%" }}>
							<h1>{loggedUser.email}</h1>
							<p>Wellcome to your User Panel</p>
							<p className="userRoleContainer">
								<span>Role: </span>
								<span>{loggedUser.role}</span>
							</p>
							<img
								className="userPanelMessageIcon"
								src="/images/message.svg"
								alt="userMessagesIcon"
								onClick={messagesIconClickHandler}
							/>
						</Box>
						<div className="myStuff">
							<Box
								className="userClassifiedContainer"
								sx={{ bgcolor: "#111827", height: "50vh", width: "30%" }}
							>
								<div className="userPanelClassifiedContainer">
									<p className="Classifieds">My Classifieds</p>
									{classifieds.length > 0 ? (
										classifieds.map((classified) => (
											<p
												key={classified._id}
												id={classified._id}
												className="userClassifiedMap"
												onClick={userPanelClassifiedClickHandler}
											>
												{classified.title}
											</p>
										))
									) : (
										<p className="userClassifiedMap">You don't have any classifieds</p>
									)}
								</div>
							</Box>
							<Box
								className="userReviewContainer"
								sx={{ bgcolor: "#111827", height: "50vh", width: "30%" }}
							>
								<div className="userPanelClassifiedContainer">
									<p className="Classifieds">My Reviews</p>
									{reviews.length > 0 ? (
										reviews.map((review) => (
											<p key={review._id} id={review._id} className="userReviewMap">
												{review.title}
											</p>
										))
									) : (
										<p className="userReviewMap">You don't have any reviews</p>
									)}
								</div>
							</Box>
							<Box
								className="userChartContainer"
								sx={{ bgcolor: "#111827", minHeight: "50vh", width: "30%" }}
							>
								<Chart className="positionChart" data={chartData} />
							</Box>
						</div>
					</div>
				</Box>
			</div>
			<Box className="bottomMessageContainer" sx={{ bgcolor: "#111827", height: "80vh", width: "85%" }}>
				<h2>Message Box</h2>
				{userMessages.length > 0 ? (
					userMessages.map((message) => (
						<div key={message._id}>
							<p>{message.sender.email}</p>
							<p>Message: {message.message}</p>
							<p>{message.date.slice(0, 16).replace("T", " ")}</p>
						</div>
					))
				) : (
					<p>You don't have any messages</p>
				)}
			</Box>
		</>
	);
};

export default UserPanel;
