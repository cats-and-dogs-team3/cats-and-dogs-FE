import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import myAxios from "../../dataManager/myAxios.js";
import { serverUrl } from "../server.js";

export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await myAxios.get(`/post/${payload}`);
      console.log("date get post", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  post: {},
  comments: { postId: "", commentList: [] },
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload.post;
      state.comments.postId = action.payload.post.id
      state.comments.commentList = action.payload.comments
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;
