import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
import reviewReducer from "../features/review/reviewSlice";

export const store = configureStore({
    reducer: {
        cars: carReducer,
        reviews: reviewReducer,
    },
});
