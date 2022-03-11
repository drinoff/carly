import NavBar from "./NavBar/NavBar";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <img className="header-logo" src="images/logo.png" alt="" />
            <NavBar />
        </div>
    );
};
export default Header;
