import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../server.js";
const initialState = {
  best: [],
  isLoading: false,
  error: null,
};

export const __getBestPost = createAsyncThunk(
  "getBestPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/post`);
      return thunkAPI.fulfillWithValue(data.data.todaysPets.rank);
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const bestSlice = createSlice({
  name: "best",
  initialState,
  reducers: {},
  extraReducers: {
    [__getBestPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBestPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.best = action.payload;
    },
    [__getBestPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = bestSlice.actions;

export default bestSlice.reducer;
