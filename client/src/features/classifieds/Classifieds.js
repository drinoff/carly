import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllClassifieds, fetchClassifieds } from "./classifiedSlice";
import { isAuthenticatedSelector } from "../auth/authSlice";
import Classified from "../../components/Classified/Classified";
import SearchClassified from "../../components/Classified/SearchClassified/SearchClassified";
import { handleFiltration } from "../../utils/utils";
import { handleSort } from "../../utils/utils";

import "./Classifieds.css";

const Classifieds = () => {
	const [filter, setFilter] = useState("");
	const [sort, setSort] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const classifieds = handleSort(sort, useSelector(selectAllClassifieds));
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

	const filterHandler = (filter) => {
		setFilter(filter);
	};
	const sortHandler = (sort) => {
		setSort(sort);
	};

	return (
		<div className="classifiedsMainContainer">
			<SearchClassified classifieds={classifieds} filterHandler={filterHandler} sortHandler={sortHandler} />
			{handleSort(sort, handleFiltration(filter, classifieds)).map((classified) => (
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
