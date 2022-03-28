import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import carServices from "../../services/carServices";

const initialState = {
    cars: [],
    loading: false,
    errors: undefined,
};

//thunk
export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
    try {
        const cars = await carServices.getAllCars();
        return cars;
    } catch (error) {
        return error;
    }
});

export const carSlice = createSlice({
    name: "cars/fetchCars",
    initialState,
    extraReducers: {
        [fetchCars.fulfilled]: (state, action) => {
            state.cars = action.payload;
            state.loading = false;
            state.errors = undefined;
        },
        [fetchCars.rejected]: (state, action) => {
            state.cars = [];
            state.loading = false;
            state.errors = action.payload;
        },
        [fetchCars.pending]: (state, action) => {
            state.cars = [];
            state.loading = true;
            state.errors = undefined;
        },
    },
});

export const selectAllCars = (state) => state.cars.cars;

export default carSlice.reducer;
