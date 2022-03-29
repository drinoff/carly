import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllClassifieds, fetchClassifieds } from "./classifiedSlice";
import Classified from "../../components/Classified/Classified";

const Classifieds = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const classifieds = useSelector(selectAllClassifieds);
    useEffect(() => {
        dispatch(fetchClassifieds());
    }, [dispatch]);

    const onClassifiedCLickHandler = (classified) => {
        navigate("/classifieds/" + classified._id, { state: { classified } });
    };
    return (
        <div>
            <h1>Classifieds</h1>
            {classifieds.map((classified) => (
                <Classified
                    key={classified.title}
                    classified={classified}
                    onClassifiedCLickHandler={onClassifiedCLickHandler}
                />
            ))}
        </div>
    );
};

export default Classifieds;
