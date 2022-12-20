import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../dataManager/myAxios.js";

export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const res = await myAxios.get(`/post/${payload}`);
      console.log("date get post", res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log("get post error", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const __liking = createAsyncThunk(
  "liking",
  async (payload, thunkAPI) => {
    try {
      const res = await myAxios.post(`/like/post/${payload}`);
      console.log("liking res", res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log("liking error", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const initialState = {
  post: {},
  comments: [],
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
      state.comments = action.payload.comments;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__liking.pending]: (state) => {
      state.isLoading = true;
    },
    [__liking.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("action.payload.postLiked",action.payload.postLiked)
      state.post.postLike = action.payload.postLiked
      state.post.likeCount = action.payload.postLiked ? (state.post.likeCount +1) : (state.post.likeCount - 1)
    },
    [__liking.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
