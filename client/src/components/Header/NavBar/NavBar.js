import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
    let activeStyle = {
        backgroundColor: "#242A38",
        border: "1px solid #7582EB",
        borderRadius: "5px",
    };
    const ACTIVE = ({ isActive }) => (isActive ? activeStyle : undefined);
    return (
        <ul className="navigation">
            <NavLink to="/" style={ACTIVE} className="li">
                Home
            </NavLink>
            <NavLink to="cars" style={ACTIVE} className="li">
                Cars
            </NavLink>
            <NavLink to="blog" style={ACTIVE} className="li">
                Blog
            </NavLink>
            <NavLink to="classifieds" style={ACTIVE} className="li">
                Clasifieds
            </NavLink>
            <NavLink to="about" style={ACTIVE} className="li">
                About
            </NavLink>

            <NavLink to="logout" className="logout li">
                Logout
            </NavLink>

            <NavLink to="login" className="login li">
                Login
            </NavLink>
            <NavLink to="register" className="register li">
                Register
            </NavLink>
        </ul>
    );
};
export default NavBar;
