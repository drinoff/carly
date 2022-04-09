import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = ({ isAuthenticated }) => {
	let activeStyle = {
		backgroundColor: "#242A38",
		border: "1px solid #7582EB",
		borderRadius: "5px",
		color: "#75FAC8",
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
			<NavLink to="contact" style={ACTIVE} className="li">
				Contact
			</NavLink>
			{isAuthenticated ? (
				<NavLink to="logout" className="logout li">
					Logout
				</NavLink>
			) : (
				<>
					<NavLink to="login" style={ACTIVE} className="login li">
						Login
					</NavLink>
					<NavLink to="register" style={ACTIVE} className="register li">
						Register
					</NavLink>{" "}
				</>
			)}
		</ul>
	);
};
export default NavBar;
