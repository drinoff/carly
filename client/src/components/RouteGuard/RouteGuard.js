import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
    const onError = (error) => {
        console.log(error);
    };
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        if (user.role !== "admin") {
            onError("You need to Login or Register to be able acces this page");
        }
    }, [user.role]);
    return user.role === "admin" ? children : <Navigate to="/login" />;
};
export default RouteGuard;
