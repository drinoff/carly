import { Routes, Route } from "react-router-dom";

import Header from "../features/auth/Header";
import Home from "../components/Home/Home";
import Cars from "../features/car/Cars";
import BrandDetails from "../components/Cars/BrandDetails/BrandDetails";
import ModelDetails from "../components/Cars/BrandDetails/CarModelButton/ModelDetails/ModelDetails";
import Blog from "../features/review/Review";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Classifieds from "../features/classifieds/Classifieds";
import DetailedClassified from "../components/Classified/DetailedClassified/DetailedClassified";
import UserPanel from "../components/UserPanel/UserPanel";

import "./App.css";
import Logout from "../components/Logout/Logout";

function App() {
    const onError = (error) => {
        console.log(error);
    };

    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cars" element={<Cars />} />
                <Route path="cars/:brand" element={<BrandDetails />} />
                <Route path="cars/:brand/:model" element={<ModelDetails />} />
                <Route path="blog" element={<Blog />} />
                <Route
                    path="register"
                    element={<Register onError={onError} />}
                />
                <Route path="login" element={<Login onError={onError} />} />
                <Route path="logout" element={<Logout />} />
                <Route path="classifieds" element={<Classifieds />} />
                <Route
                    path="classifieds/:id"
                    element={<DetailedClassified />}
                />
                <Route path="user/:name" element={<UserPanel />} />
            </Routes>
        </div>
    );
}

export default App;
