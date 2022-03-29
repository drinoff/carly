import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { userSelector, isAuthenticatedSelector } from "./authSlice";
import "./Header.css";
import User from "../../components/User/User";

const Header = () => {
    const user = useSelector(userSelector);
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    return (
        <div className="header">
            <User isAuthenticated={isAuthenticated} user={user} />
            <img className="header-logo" src="images/logo.png" alt="" />
            <NavBar isAuthenticated={isAuthenticated} />
        </div>
    );
};
export default Header;
