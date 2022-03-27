import { Routes, Route } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cars from "./components/Cars/Cars";
import BrandDetails from "./components/Cars/BrandDetails/BrandDetails";
import ModelDetails from "./components/Cars/BrandDetails/CarModelButton/ModelDetails/ModelDetails";
import Blog from "./components/Blog/Blog";
import UserContext from "./contexts/UserContext";

import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const initialValue = {
    email: "",
    accesToken: "",
    _id: "",
    isAuthenticated: false,
};

function App() {
    const [user, setUser] = useLocalStorage("user", initialValue);
    const [message, setMessage] = useLocalStorage("message", "");
    const [error, setError] = useLocalStorage("error", "");

    const onLogin = (user) => {
        console.log(user);
        setUser(user);
    };
    const onLogout = () => {
        setUser(null);
    };

    const onError = (error) => {
        console.log(error);
    };

    return (
        <div className="App">
            <UserContext.Provider value={{ user, onLogin, onLogout }}>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cars" element={<Cars />} />
                    <Route path="cars/:brand" element={<BrandDetails />} />
                    <Route
                        path="cars/:brand/:model"
                        element={<ModelDetails />}
                    />
                    <Route path="blog" element={<Blog />} />
                    <Route
                        path="register"
                        element={<Register onError={onError} />}
                    />
                    <Route
                        path="login"
                        element={<Login onLogin={onLogin} onError={onError} />}
                    />
                </Routes>
            </UserContext.Provider>
        </div>
    );
}

export default App;
