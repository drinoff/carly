import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cars from "./components/Cars/Cars";
import BrandDetails from "./components/Cars/BrandDetails/BrandDetails";
import ModelDetails from "./components/Cars/BrandDetails/CarModelButton/ModelDetails/ModelDetails";
import Blog from "./components/Blog/Blog";

import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cars" element={<Cars />} />
                <Route path="cars/:brand" element={<BrandDetails />} />
                <Route path="cars/:brand/:model" element={<ModelDetails />} />
                <Route path="blog" element={<Blog />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
