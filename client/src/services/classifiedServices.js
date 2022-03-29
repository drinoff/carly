import { BASE_URL } from "../constants";

const getAllClassifieds = () => {
    return fetch(`${BASE_URL}/classifieds`)
        .then((res) => res.json())
        .catch((err) => {
            return err.message;
        });
};

const classifiedServices = {
    getAllClassifieds,
};

export default classifiedServices;
