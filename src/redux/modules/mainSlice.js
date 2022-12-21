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

      console.log("approaching mainSlice");
      console.log(data.data.postList.postResponseDtoList);
      return thunkAPI.fulfillWithValue(data.data.postList.postResponseDtoList);
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// 질문 한페이지에서 여기의 state는 .. todaysPetDto를 넘겨줫는데 왜 막상 찍히는건 ??
// export const __getBestPost = createAsyncThunk(
//   "getBestPost",
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await instance.get(`/post`);
//       console.log("d", data.data.todaysPets.rank);
//       return thunkAPI.fulfillWithValue(data.data.todaysPets.rank);
//     } catch (error) {
//       console.log(error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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
      console.log("g", state);
    },
    [__getPost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    // [__getBestPost.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getBestPost.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.post = [...state.post, action.payload];
    //   console.log("b", state);
    // },
    // [__getBestPost.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {} = mainSlice.actions;

export default mainSlice.reducer;
