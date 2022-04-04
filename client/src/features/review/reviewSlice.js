import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reviewServices from "../../services/reviewServices";

const initialState = {
	reviews: [],
	loading: false,
	errors: undefined,
};

//thunk
export const fetchReviews = createAsyncThunk("reviews/fetchReviews", async () => {
	try {
		const reviews = await reviewServices.getAllReviews();
		return reviews;
	} catch (error) {
		return error;
	}
});

export const reviewSlice = createSlice({
	name: "reviews/fetchReviews",
	initialState,
	extraReducers: {
		[fetchReviews.fulfilled]: (state, action) => {
			state.reviews = action.payload;
			state.loading = false;
			state.errors = undefined;
		},
		[fetchReviews.rejected]: (state, action) => {
			state.reviews = [];
			state.loading = false;
			state.errors = action.payload;
		},
		[fetchReviews.pending]: (state, action) => {
			state.reviews = [];
			state.loading = true;
			state.errors = undefined;
		},
	},
});

export const selectAllReviews = (state) => state.reviews.reviews;

export default reviewSlice.reducer;
