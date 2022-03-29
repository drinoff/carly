import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
import reviewReducer from "../features/review/reviewSlice";
import authReducer from "../features/auth/authSlice";
import classifiedReducer from "../features/classifieds/classifiedSlice";

export const store = configureStore({
    reducer: {
        cars: carReducer,
        reviews: reviewReducer,
        auth: authReducer,
        classifieds: classifiedReducer,
    },
});
