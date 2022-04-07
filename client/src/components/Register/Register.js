import { Link, useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import userServices from "../../services/userServices";
import "./Register.css";

const Register = ({ onError }) => {
	const navigate = useNavigate();

	const onRegisterFormSubmitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const email = formData.get("email");
		const password = formData.get("password");
		const rePass = formData.get("rePass");
		const userData = {
			email,
			password,
			rePass,
		};
		userServices.register(userData).then((user) => {
			if (user.error) {
				onError(user.error);
			} else {
				onError(user.message);
				navigate("/login");
			}
		});
	};

	return (
		<Box className="registerContainer" sx={{ bgcolor: "#111827", height: "80%", width: "33%" }}>
			<h1 className="pleaseRegister">Please Register</h1>
			<form id="register-form" action="POST" className="register-form" onSubmit={onRegisterFormSubmitHandler}>
				<div className="emailContainer">
					<label htmlFor="email">Email</label>
					<input id="email" type="text" name="email" className="registerFormInputStyle" />
				</div>

				<div className="passwordContainer">
					<label htmlFor="password">Password</label>
					<input id="password" type="password" name="password" className="registerFormInputStyle" />
				</div>
				<div className="rePassContainer">
					<label htmlFor="rePass">Repeat Password</label>
					<input id="rePass" type="password" name="rePass" className="registerFormInputStyle" />
				</div>

				<input className="registerButton" type="submit" value="Register" />
				<p className="alreadyGotAcc">
					Don't have an account?{" "}
					<Link to="/login" className="loginLinkInRegisterComp">
						<span>Login</span>
					</Link>
				</p>
			</form>
		</Box>
	);
};

export default Register;
