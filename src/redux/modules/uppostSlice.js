import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../server.js";

const initialState = {
  post: {},
};
export const __uppostPost = createAsyncThunk(
  "upload/post",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      console.log("appraching Thunk");
      const { title, content, category, pictureName } = payload;

      const dispenser = {
        title: title,
        content: content,
        category: category,
        pictureName: pictureName,
      };
      payload = dispenser;
      console.log(dispenser);
      const { data } = await instance.post(`/post`, dispenser);
      console.log(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uppostSlice = createSlice({
  name: "create",
  initialState,
  reducers: {},
  extraReducers: {
    [__uppostPost.rejected]: (state) => {
      state.isLoading = false;
      state.post = state.post;
    },
    [__uppostPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__uppostPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.post = [...state.post, action.payload];
      state.post = state.post;
    },
  },
});
export const {} = uppostSlice.actions;
export default uppostSlice.reducer;
