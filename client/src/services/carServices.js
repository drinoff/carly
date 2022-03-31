import { BASE_URL } from "../constants";

const getAllCars = async () => {
    return fetch(`${BASE_URL}/cars`).then((res) =>
        res.json().catch((err) => {
            return err.message;
        })
    );
};

const addCar = async (car) => {
    const user = JSON.parse(localStorage.getItem("user"));
    return fetch(`${BASE_URL}/cars`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-authorization": user.accessToken,
        },
        body: JSON.stringify(car),
    }).then((res) => res.json());
};

const addModel = (model) => {
    const user = JSON.parse(localStorage.getItem("user"));
    return fetch(`${BASE_URL}/models`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-authorization": user.accessToken,
        },
        body: JSON.stringify(model),
    })
        .then((res) => res.json())
        .catch((err) => {
            return err.message;
        });
};

const carServices = {
    getAllCars,
    addCar,
    addModel,
};

export default carServices;
