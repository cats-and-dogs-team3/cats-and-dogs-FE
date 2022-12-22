import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../dataManager/myAxios";

const initialState = { nickname: "", isLoading: false, error: null };

export const __getNickName = createAsyncThunk(
  "getNickName",
  async (payload,thunkAPI) => {
    try {
      const res = await myAxios.get(`/user`);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const nicknameSlice = createSlice({
  name: "nickname",
  initialState,
  reducers: {},
  extraReducers: {
    [__getNickName.pending]: (state) => {
      state.isLoading = true;
    },
    [__getNickName.fulfilled]: (state, action) => {
      state.nickname = action.payload;
    },
    [__getNickName.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {} = nicknameSlice.actions;
export default nicknameSlice.reducer;
