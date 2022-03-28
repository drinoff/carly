import { BASE_URL } from "../constants";

const getAllReviews = async () => {
    return fetch(`${BASE_URL}/reviews`)
        .then((res) => res.json())
        .catch((err) => {
            return err.message;
        });
};

const blogServices = {
    getAllReviews,
};

export default blogServices;
