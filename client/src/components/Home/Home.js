import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchClassifieds } from "../../features/classifieds/classifiedSlice";
import { fetchReviews } from "../../features/review/reviewSlice";

import { fetchCars } from "../../features/car/carSlice";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchClassifieds());
		dispatch(fetchReviews());
		dispatch(fetchCars());
	}, [dispatch]);
	return (
		<div>
			<h1>Home</h1>
			<p>To be Implemented</p>
		</div>
	);
};
export default Home;
