import { BASE_URL } from "../constants";

const register = (userData) => {
    return fetch(BASE_URL + "/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
}; // validate if passes match and other validation => send to backend for DB validation

const login = (userData) => {}; //chechk if passwords match send to backEnd for further validation with DB entity

const userServices = {
    register,
    login,
};

export default userServices;
