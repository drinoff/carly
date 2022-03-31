import { useNavigate } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();
    const onBackButtonClickHandler = () => {
        navigate("/");
    };
    return (
        <div className="NotFound-Container">
            <img src="/images/404page.png" alt="404" />
            <button
                onClick={onBackButtonClickHandler}
                className="glow-on-hover"
            >
                Back to Recipes
            </button>
        </div>
    );
};
export default NotFound;
