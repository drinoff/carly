import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userServices from "../../services/userServices";

const authStatus = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: {
        id: authStatus ? authStatus._id : null,
        email: authStatus ? authStatus.email : null,
        isAuthenticated: authStatus ? true : false,
    },
};

export const authenticateUser = createAsyncThunk(
    "auth/authenticateUser",
    async (userData) => {
        try {
            const response = await userServices.login(userData);
            return response;
        } catch (error) {
            return error;
        }
    }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    try {
        const response = await userServices.logout();
        return response;
    } catch (error) {
        return error;
    }
});

export const authSlice = createSlice({
    name: "auth/authenticateUser",
    initialState,
    extraReducers: {
        [authenticateUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        [authenticateUser.rejected]: (state, action) => {
            state.user = {
                id: "",
                email: "",
            };
        },
        [authenticateUser.pending]: (state, action) => {
            state.user = {
                id: "",
                email: "",
            };
        },
        [logoutUser.fulfilled]: (state, action) => {
            state.user = {
                id: "",
                email: "",
            };
            localStorage.clear();
        },
    },
});

export const userSelector = (state) => state.auth.user;
export const isAuthenticatedSelector = (state) =>
    state.auth.user.isAuthenticated;

export default authSlice.reducer;
