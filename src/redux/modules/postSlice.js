import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import myAxios from "../../dataManager/myAxios.js";
import { serverUrl } from "../server.js";

export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const {data} = await myAxios.get(`/post/${payload}`);
      console.log("date get post", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
); 
// export const __getPost = createAsyncThunk(
//   "getPost",
//   async (payload, thunkAPI) => {
//     try {
//       console.log("haslkdjflaksjdf");
//       // const { data } = await axios.get(`${serverUrl}/post/${payload}`);
//       const { data } = axios({
//         method: "GET",
//         headers: {
//           "content-type": "Application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         url: `${serverUrl}/post/${payload}`,
//       });
//       console.log('data',data)
//       if (data.statusCode === 400) throw new Error("에러 발생 ~!");
//       const post = data.data.post;
//       return thunkAPI.fulfillWithValue(post);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const __getComments = createAsyncThunk(
//   "getcomments",
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`${serverUrl}/post`);
//       const post = data.data.post;

//       //comments를 따로 받는게 좋을 것 같다.
//       // 댓글 작성, 삭제 할 때마다 post부터 불러오는것 보다 그게 맞는 방법일 것 같다.

//       return thunkAPI.fulfillWithValue(post);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const initialState = {
  post: {},
  comments: [],
  isLoading: false,
  error: null,
};
// const initialState = {
//   post: { post: {}, isLoading: false, error: null },
//   comments: { comments: [], isLoading: false, error: null },
// };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.post = action.payload.post;
      state.comments = action.payload.comments;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;
