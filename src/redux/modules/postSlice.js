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
export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    try {
      const res = await myAxios.post(
        `/post/${payload.postId}/comment`,
        payload.comment
      );
      console.log("addComment res", res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log("addComment error", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// const initialState = {
//   post: {},
//   comments: [],
//   comment:'',
//   isLoading: false,
//   error: null,
// };
const initialState = {
  post: {},
  commentChunk: { isLoading: false, error: null, commentList: [] },
  comment: "",
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    __typeComment: (state, action) => {
      state.comment = action.payload;
    },
  },
  extraReducers: {
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload.post;
      state.commentChunk.commentList = action.payload.comments;
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
      console.log("action.payload.postLiked", action.payload.postLiked);
      state.post.postLike = action.payload.postLiked;
      state.post.likeCount = action.payload.postLiked
        ? state.post.likeCount + 1
        : state.post.likeCount - 1;
    },
    [__liking.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.commentChunk.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.commentChunk.isLoading = false;
      console.log("action.payload", action.payload);
      state.commentChunk.commentList = [...state.commentChunk.commentList, action.payload];
    },
    [__addComment.rejected]: (state, action) => {
      state.commentChunk.isLoading = false;
      state.commentChunk.error = action.payload;
    },
  },
});
export const { __typeComment } = postSlice.actions;
export default postSlice.reducer;
