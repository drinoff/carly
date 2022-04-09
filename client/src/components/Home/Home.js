import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchClassifieds } from "../../features/classifieds/classifiedSlice";
import { fetchReviews } from "../../features/review/reviewSlice";
import { Box } from "@mui/material";
import "./Home.css";
import background from "./background.jpg";

import { fetchCars } from "../../features/car/carSlice";

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchClassifieds());
		dispatch(fetchReviews());
		dispatch(fetchCars());
	}, [dispatch]);
	const onLetsGoButtonCLickHandler = () => {
		navigate("/classifieds");
	};

	return (
		<div className="homeContainer">
			<img src={background} alt="asd" />
			<Box className="homeSubContainer" sx={{ bgcolor: "#111827", height: "100vh", width: "70%" }}></Box>
			<div className="heading">
				<h1>Carly</h1>
				<p>You want to find your dream car?</p>
				<p>Sell your Car?</p>
				<p>Just Chillin`?</p>
				<button className="pulsingButton" onClick={onLetsGoButtonCLickHandler}>
					Let's Go!
				</button>
			</div>
		</div>
	);
};
export default Home;
