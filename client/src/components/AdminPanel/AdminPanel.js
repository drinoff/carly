import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllClassifieds } from "../../features/classifieds/classifiedSlice";
import { selectAllReviews } from "../../features/review/reviewSlice";
import { fetchClassifieds } from "../../features/classifieds/classifiedSlice";
import { fetchReviews } from "../../features/review/reviewSlice";
import { userSelector } from "../../features/auth/authSlice";
import { selectAllCars } from "../../features/car/carSlice";
import { fetchCars } from "../../features/car/carSlice";
import AnalogClock from "analog-clock-react";
import { clockOptions } from "../../utils/utils";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import AdminClassifiedsPanel from "./AdminClassifiedsPanel/AdminClassifiedsPanel";
import AdminReviewsPanel from "./AdminReviewsPanel/AdminReviewsPanel";
import "./AdminPanel.css";
import AdminCarsPanel from "./AdminCarsPanel/AdminCarsPanel";
import AdminUsersPanel from "./AdminUsersPanel/AdminUserPanel";
import userServices from "../../services/userServices";
import AdminDBPanel from "./AdminDBPanel/AdminDBPanel";

const style = {
	width: "100%",
	maxWidth: 360,
	bgcolor: "transparent",
	marginTop: "73px",
	borderRadius: "12px",
};

const AdminPanel = () => {
	const dispatch = useDispatch();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [classifieds, setClassifieds] = useState([]);
	const [classified, setClassified] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [review, setReview] = useState([]);
	const [cars, setCars] = useState([]);
	const [flag, setFlag] = useState(false);
	const [users, setUsers] = useState([]);

	const user = useSelector(userSelector);
	const allClassifieds = useSelector(selectAllClassifieds);
	const allReviews = useSelector(selectAllReviews);
	const allCars = useSelector(selectAllCars);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchClassifieds()).then(() => {
			setClassifieds(allClassifieds);
		});
		dispatch(fetchReviews()).then(() => {
			setReviews(allReviews);
		});
		dispatch(fetchCars()).then(() => {
			setCars(allCars);
		});

		userServices
			.getAllUsers()
			.then((res) => {
				setUsers(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [dispatch]);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
		event.target.classList.add("selected");
	};

	const adminPanelClassifiedClickHandler = (e) => {
		navigate(`/classifieds/${e.target.id}`, {
			state: { classified: allClassifieds.find((classified) => classified._id === e.target.id) },
		});
	};

	const adminPanelClassifiedHoverHandler = (e) => {
		setClassified(allClassifieds.find((classified) => classified._id === e.target.id));
	};

	const adminPanelClickHandler = (e) => {
		const review = allReviews.find((review) => review._id === e.target.id);
		setReview(review);
	};

	const adminPanelCarClickHandler = (e) => {
		const currentCar = allCars.find((car) => car._id === e.target.id);
		navigate(`/cars/${e.target.id}`, {
			state: { carId: currentCar._id, carModels: currentCar.models },
		});
	};

	const onItemDeleteHandler = (id) => {
		const filteredReviews = allReviews.filter((review) => review._id !== id);
		if (flag) {
			setReviews(filteredReviews);
			setFlag(false);
		} else {
			setFlag(true);
			setReviews(filteredReviews);
		}
	};

	const onCarDeleteHandler = (id) => {
		const filteredCars = allCars.filter((car) => car._id !== id);
		if (flag) {
			setCars(filteredCars);
			setFlag(false);
		} else {
			setFlag(true);
			setCars(filteredCars);
		}
	};

	const onClassifiedDeleteHandler = (id) => {
		const filteredClassifieds = allClassifieds.filter((classified) => classified._id !== id);
		if (flag) {
			setClassifieds(filteredClassifieds);
			setFlag(false);
		} else {
			setFlag(true);
			setClassifieds(filteredClassifieds);
		}
	};

	return (
		<div className="userPanelContainer">
			<Box className="sidePanel" sx={{ bgcolor: "#111827", height: "100vh", width: "13%" }}>
				<List sx={style} component="nav" aria-label="mailbox folders" className="ListItem">
					<ListItem
						button
						divider
						className="dividerListItem "
						selected={selectedIndex === 0}
						classes={{ selected: "selected" }}
						onClick={(event) => handleListItemClick(event, 0)}
					>
						Classifieds
					</ListItem>
					<Divider />
					<ListItem
						button
						divider
						className="dividerListItem"
						selected={selectedIndex === 1}
						classes={{ selected: "selected" }}
						onClick={(event) => handleListItemClick(event, 1)}
					>
						Reviews
					</ListItem>
					<Divider />
					<ListItem
						button
						divider
						className="dividerListItem"
						selected={selectedIndex === 2}
						classes={{ selected: "selected" }}
						onClick={(event) => handleListItemClick(event, 2)}
					>
						Cars
					</ListItem>
					<Divider />

					<ListItem
						button
						divider
						className="dividerListItem"
						selected={selectedIndex === 3}
						classes={{ selected: "selected" }}
						onClick={(event) => handleListItemClick(event, 3)}
					>
						Users
					</ListItem>
					<Divider />
					{/* <ListItem
						button
						divider
						className="dividerListItem"
						selected={selectedIndex === 4}
						classes={{ selected: "selected" }}
						onClick={(event) => handleListItemClick(event, 4)}
					>
						Comments
					</ListItem>
					<Divider /> */}
					<ListItem
						button
						divider
						className="dividerListItem"
						selected={selectedIndex === 4}
						classes={{ selected: "selected" }}
						onClick={(event) => handleListItemClick(event, 4)}
					>
						DB Storage
					</ListItem>
					<Divider />
				</List>
			</Box>
			<Box className="adjustMainFrameContainer" sx={{ bgcolor: "#0B0F19", height: "100vh", width: "87%" }}>
				<Box className="userTimeContainer" sx={{ bgcolor: "#7582EB", maxHeight: "33vh", width: "95%" }}>
					<h1>{`Hello ${
						user.email.charAt(0).toUpperCase() + user.email.slice(1, user.email.indexOf("@"))
					}`}</h1>
					<AnalogClock {...clockOptions} />
				</Box>
				{selectedIndex === 0 && (
					<AdminClassifiedsPanel
						classifieds={classifieds}
						classified={classified}
						adminPanelClassifiedClickHandler={adminPanelClassifiedClickHandler}
						adminPanelClassifiedHoverHandler={adminPanelClassifiedHoverHandler}
						onClassifiedDeleteHandler={onClassifiedDeleteHandler}
					/>
				)}
				{selectedIndex === 1 && (
					<AdminReviewsPanel
						review={review}
						reviews={reviews}
						adminPanelClickHandler={adminPanelClickHandler}
						onItemDeleteHandler={onItemDeleteHandler}
					/>
				)}
				{selectedIndex === 2 && (
					<AdminCarsPanel
						cars={cars}
						adminPanelCarClickHandler={adminPanelCarClickHandler}
						onCarDeleteHandler={onCarDeleteHandler}
					/>
				)}
				{selectedIndex === 3 && (
					<AdminUsersPanel
						users={users}
						adminPanelCarClickHandler={adminPanelCarClickHandler}
						onCarDeleteHandler={onCarDeleteHandler}
					/>
				)}
				{selectedIndex === 4 && (
					<AdminDBPanel cars={cars} reviews={reviews} users={users} classifieds={classifieds} />
				)}
			</Box>
		</div>
	);
};

export default AdminPanel;
