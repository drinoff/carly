import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../features/auth/Header";
import Home from "../components/Home/Home";
import Cars from "../features/car/Cars";
import EditCar from "../components/Cars/EditCar/EditCar";
import BrandDetails from "../components/Cars/BrandDetails/BrandDetails";
import ModelDetails from "../components/Cars/BrandDetails/CarModelButton/ModelDetails/ModelDetails";
//import Blog from "../features/review/Review";
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
import AddClassified from "../components/Classified/AddClassified/AddClassified";
import UserPanel from "../components/UserPanel/UserPanel";

import "./App.css";

const Blog = React.lazy(() => import("../features/review/Review"));
function App() {
	const onError = (error) => {
		console.log(error);
	};

	return (
		<div className="App">
			<Header />
			<Suspense fallback={"Loading..."}>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<Home />} />
					<Route path="cars" element={<Cars />} />
					<Route path="cars/:brand" element={<BrandDetails />} />
					<Route path="cars/:brand/:model" element={<ModelDetails />} />

					<Route
						path="cars/:brand/edit"
						element={
							<RouteGuard>
								<EditCar />
							</RouteGuard>
						}
					/>
					<Route
						path="cars/:brand/:model/edit"
						element={
							<RouteGuard>
								<EditModel />
							</RouteGuard>
						}
					/>

					<Route
						path="cars/:brand/addModel"
						element={
							<RouteGuard>
								<AddModel />
							</RouteGuard>
						}
					/>

					<Route
						path="cars/add"
						element={
							<RouteGuard>
								<AddCar />
							</RouteGuard>
						}
					/>

					<Route path="blog" element={<Blog />} />

					<Route
						path="blog/add"
						element={
							<RouteGuard>
								<AddArticle />
							</RouteGuard>
						}
					/>
					<Route
						path="blog/:id/edit"
						element={
							<RouteGuard>
								<EditArticle />
							</RouteGuard>
						}
					/>
					<Route path="register" element={<Register onError={onError} />} />
					<Route path="login" element={<Login onError={onError} />} />
					<Route path="logout" element={<Logout />} />
					<Route path="classifieds" element={<Classifieds />} />
					<Route path="classifieds/:id" element={<DetailedClassified />} />
					<Route path="classifieds/add" element={<AddClassified />} />
					<Route path="user/:name" element={<UserPanel />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
