import { BASE_URL } from "../constants";

const register = (userData) => {
    return fetch(BASE_URL + "/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    }).then((response) => {
        return response.json();
    });
};

const login = (userData) => {
    return fetch(BASE_URL + "/user/login", {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    }).then((response) => {
        return response.json();
    });
};

const userServices = {
    register,
    login,
};

export default userServices;
