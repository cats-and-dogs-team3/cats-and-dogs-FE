import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import serverUrl from "../server.js.js";

export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${serverUrl}/post`);
      if(data.statusCode===400) throw new Error('에러 발생 ~!')
      const post = data.data.post

      return thunkAPI.fulfillWithValue(post);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getComments = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${serverUrl}/post`);
      const post = data.data.post

      //comments를 따로 받는게 좋을 것 같다. 
      // 댓글 작성, 삭제 할 때마다 post부터 불러오는것 보다 그게 맞는 방법일 것 같다. 

      return thunkAPI.fulfillWithValue(post);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  post: {},
  isLoading: false,
  error: null,
};
const state = {
  post: {
  //   id: 1,
  //   nickname: "범준",
  //   titl: "제목",
  //   content: "내용",
  //   likeCount: 3,
  //   postLike: true,
  //   createdAt: "2022-12-16-13:55",
  //   modifiedAt: "2022-12-16-13:55",
  //   picturePath: "/static/resource/img/aa.png",
  //   category: "cat",
  //   comentList: [
  //     {
  //       id: 1,
  //       content: "댓글 내용",
  //       nickname: "범준",
  //       commentLike: true,
  //       createdAt: "2022-12-16-13:55",
  //       likeCount: 4,
  //     },
  //   ],
  },
  comments:[],
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
      state.post = action.payload;
      state.comments = action.payload.commentList
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;
