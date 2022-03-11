import { BASE_URL } from "../constants";

const getBlogArticles = async () => {
    return fetch(`${BASE_URL}/reviews`)
        .then((res) => res.json())
        .catch((err) => {
            return err.message;
        });
};

const blogServices = {
    getBlogArticles,
};

export default blogServices;
