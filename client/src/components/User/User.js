import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import "./User.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));

const User = ({ isAuthenticated, user }) => {
	let display = "invisible";
	if (isAuthenticated) {
		display = "userHeaderCard";
	} else {
		display = "invisible";
	}

	return (
		<div className={display === "invisible" ? "invisible" : "userHeaderCard"}>
			<StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
				<Avatar sx={{ width: "54px", height: "54px", bgcolor: "#673AB7" }}>
					{user.email?.slice(0, 1).toUpperCase()}
				</Avatar>
			</StyledBadge>
			{user ? (
				<h2>
					{(user.email?.charAt(0).toUpperCase() + user.email?.slice(1, user.email?.indexOf("@"))).toString()}
				</h2>
			) : (
				<h2>Guest</h2>
			)}
			<Link to={`user/${user.email?.slice(0, user.email?.indexOf("@"))}`}>User Panel</Link>
			{user.role === "admin" ? <Link to="adminPanel">Admin Panel</Link> : null}
		</div>
	);
};

export default User;
