import { BASE_URL } from "../constants";

const getAllCars = async () => {
    return fetch(`${BASE_URL}/cars`).then((res) =>
        res.json().catch((err) => {
            return err.message;
        })
    );
};

const carServices = {
    getAllCars,
};

export default carServices;
