import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllClassifieds, fetchClassifieds } from "./classifiedSlice";
import { isAuthenticatedSelector } from "../auth/authSlice";
import Classified from "../../components/Classified/Classified";

import "./Classifieds.css";

const Classifieds = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const classifieds = useSelector(selectAllClassifieds);
	const isAuthenticated = useSelector(isAuthenticatedSelector);
	useEffect(() => {
		dispatch(fetchClassifieds());
	}, [dispatch]);

	const onAddArticleClickHandler = () => {
		navigate("/classifieds/add");
	};

	const onClassifiedCLickHandler = (classified) => {
		navigate("/classifieds/" + classified._id, { state: { classified } });
	};
	return (
		<div>
			<h1>Classifieds</h1>
			{classifieds.map((classified) => (
				<Classified
					key={classified.title}
					classified={classified}
					onClassifiedCLickHandler={onClassifiedCLickHandler}
				/>
			))}
			{isAuthenticated && (
				<button className="addArticleButton" onClick={onAddArticleClickHandler}>
					Add
				</button>
			)}
		</div>
	);
};

export default Classifieds;
