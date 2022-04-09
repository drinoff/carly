import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import classifiedServices from "../../services/classifiedServices";

const initialState = {
	classifieds: [],
};

export const fetchClassifieds = createAsyncThunk("classifieds/fetchClassifieds", async () => {
	try {
		const classifieds = await classifiedServices.getAllClassifieds();
		return classifieds;
	} catch (error) {
		return error;
	}
});

export const classifiedSlice = createSlice({
	name: "classifieds/fetchClassifieds",
	initialState,
	extraReducers: {
		[fetchClassifieds.fulfilled]: (state, action) => {
			state.classifieds = action.payload;
		},
		[fetchClassifieds.rejected]: (state, action) => {
			state.classifieds = [];
		},
		[fetchClassifieds.pending]: (state, action) => {
			state.classifieds = [];
		},
	},
});

export const selectAllClassifieds = (state) => state.classifieds.classifieds;
export default classifiedSlice.reducer;
