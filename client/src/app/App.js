import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../features/auth/Header";
import Home from "../components/Home/Home";
import Cars from "../features/car/Cars";
import EditCar from "../components/Cars/EditCar/EditCar";
import BrandDetails from "../components/Cars/BrandDetails/BrandDetails";
import ModelDetails from "../components/Cars/BrandDetails/CarModelButton/ModelDetails/ModelDetails";
import EditArticle from "../components/ReviewArticle/EditArticle/EditArticle";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Classifieds from "../features/classifieds/Classifieds";
import DetailedClassified from "../components/Classified/DetailedClassified/DetailedClassified";
import NotFound from "../components/NotFound/NotFound";
import RouteGuard from "../components/RouteGuard/RouteGuard";
import Logout from "../components/Logout/Logout";
import AddCar from "../components/Cars/AddCar/AddCar";
import AddModel from "../components/Cars/BrandDetails/AddModel/AddModel";
import AddArticle from "../components/ReviewArticle/AddArticle/AddArticle";
import EditModel from "../components/Cars/EditModel/EditModel";
import EditClassified from "../components/Classified/EditClassified/EditClassified";
import AddClassified from "../components/Classified/AddClassified/AddClassified";
import UserPanel from "../components/UserPanel/UserPanel";
import AdminPanel from "../components/AdminPanel/AdminPanel";
import BasicModal from "../components/BasicModal/BasicModal";
import Contact from "../components/Contact/Contact";

import "./App.css";
const Blog = React.lazy(() => import("../features/review/Review"));

function App() {
	const [error, setError] = useState();
	const [open, setOpen] = useState(false);

	const onError = (error) => {
		setError(error);
		setOpen(true);
		setTimeout(() => {
			setOpen(false);
		}, 5000);
	};

	return (
		<div className="App">
			<Header />
			<Suspense fallback={"Loading..."}>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<Home />} />
					<Route path="cars" element={<Cars />} />
					<Route path="cars/:brand" element={<BrandDetails onError={onError} />} />
					<Route path="cars/:brand/:model" element={<ModelDetails onError={onError} />} />

					<Route
						path="cars/:brand/edit"
						element={
							<RouteGuard>
								<EditCar onError={onError} />
							</RouteGuard>
						}
					/>
					<Route
						path="cars/:brand/:model/edit"
						element={
							<RouteGuard>
								<EditModel onError={onError} />
							</RouteGuard>
						}
					/>

					<Route
						path="cars/:brand/addModel"
						element={
							<RouteGuard>
								<AddModel onError={onError} />
							</RouteGuard>
						}
					/>

					<Route
						path="cars/add"
						element={
							<RouteGuard>
								<AddCar onError={onError} />
							</RouteGuard>
						}
					/>

					<Route path="blog" element={<Blog onError={onError} />} />

					<Route
						path="blog/add"
						element={
							<RouteGuard>
								<AddArticle onError={onError} />
							</RouteGuard>
						}
					/>
					<Route
						path="blog/:id/edit"
						element={
							<RouteGuard>
								<EditArticle onError={onError} />
							</RouteGuard>
						}
					/>
					<Route path="register" element={<Register onError={onError} />} />
					<Route path="login" element={<Login onError={onError} />} />
					<Route path="logout" element={<Logout />} />
					<Route path="classifieds" element={<Classifieds />} />
					<Route path="classifieds/:id" element={<DetailedClassified onError={onError} />} />
					<Route
						path="classifieds/add"
						element={
							<RouteGuard>
								<AddClassified onError={onError} />
							</RouteGuard>
						}
					/>
					<Route
						path="classifieds/:id/edit"
						element={
							<RouteGuard>
								<EditClassified onError={onError} />
							</RouteGuard>
						}
					/>
					<Route
						path="user/:name"
						element={
							<RouteGuard>
								<UserPanel />
							</RouteGuard>
						}
					/>
					<Route
						path="adminPanel"
						element={
							<RouteGuard>
								<AdminPanel />
							</RouteGuard>
						}
					/>
					<Route path="contact" element={<Contact onError={onError} />} />
				</Routes>
			</Suspense>
			<BasicModal openModal={open} error={error} />
		</div>
	);
}

export default App;
