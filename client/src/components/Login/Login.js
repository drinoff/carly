import { Link } from "react-router-dom";

import { Box } from "@mui/material";
import "./Login.css";

const Login = () => {
    const onRegisterFormSubmitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <Box
            className="loginContainer"
            sx={{ bgcolor: "#111827", height: "80%", width: "33%" }}
        >
            <h1 className="pleaseLogin">Please Login</h1>
            <form
                id="login-form"
                action="POST"
                className="login-form"
                onSubmit={onRegisterFormSubmitHandler}
            >
                <div className="emailContainer">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        className="loginFormInputStyle"
                    />
                </div>

                <div className="passwordContainer">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="loginFormInputStyle"
                    />
                </div>

                <input className="loginButton" type="submit" value="Login" />
                <p className="dontHaveAnAcc">
                    Don't have an account?{" "}
                    <Link to="/register" className="registerLinkinLoginComp">
                        <span>Register</span>
                    </Link>
                </p>
            </form>
        </Box>
    );
};

export default Login;
