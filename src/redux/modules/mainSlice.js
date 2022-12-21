import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../server.js";
const initialState = {
  post: [],
  isLoading: false,
  error: null,
};
export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/post`);
      console.log(data.data.postList.postResponseDtoList);
      return thunkAPI.fulfillWithValue(data.data.postList.postResponseDtoList);
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.error = action.payload;
    },

  },
});

export const {} = mainSlice.actions;

export default mainSlice.reducer;
