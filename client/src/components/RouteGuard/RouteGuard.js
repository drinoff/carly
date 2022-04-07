import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
	const onError = (error) => {
		console.log(error);
	};
	const user = JSON.parse(localStorage.getItem("user"));

	function result() {
		if (children.type.name === "AddArticle" || children.type.name === "EditArticle") {
			if (!user?.role) {
				onError("You are not authorized to add or edit articles");
				return <Navigate to="/login" />;
			} else if (user.role === "user") {
				onError("You are not authorized to add or edit articles");
				return <Navigate to="/" />;
			} else {
				return children;
			}
		} else if (
			children.type.name === "AddCar" ||
			children.type.name === "EditCar" ||
			children.type.name === "AddModel" ||
			children.type.name === "EditModel"
		) {
			if (user?.role !== "admin") {
				onError("You are not authorized to add or edit cars");
				return <Navigate to="/" />;
			} else {
				return children;
			}
		} else if (children.type.name === "AddClassified" || children.type.name === "EditClassified") {
			if (!user) {
				onError("Please login to add classifieds");
				return <Navigate to="/login" />;
			} else {
				return children;
			}
		} else if (children.type.name === "UserPanel") {
			if (!user) {
				onError("Please login to view user panel");
				return <Navigate to="/login" />;
			} else {
				return children;
			}
		} else if (children.type.name === "AdminPanel") {
			if (user.role !== "admin") {
				onError("You are not authorized to view admin panel");
				return <Navigate to="/" />;
			} else {
				return children;
			}
		}
	}
	return result();
};
export default RouteGuard;
