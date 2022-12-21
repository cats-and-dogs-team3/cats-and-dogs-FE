import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../server.js";
const initialState = {
  post: [],
  isLoading: false,
  error: null,
};
export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/post`);
      console.log('getPost data : ',data)
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
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.error = action.payload;
    },

  },
});

export const {} = mainSlice.actions;

export default mainSlice.reducer;
