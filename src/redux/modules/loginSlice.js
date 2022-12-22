import { createSlice } from "@reduxjs/toolkit";
import {
  isValidId,
  isValidPassword,
} from "../../components/signUp/func/functionsForSignUp";

const initialState = {
  username: { value: "", isValid: false },
  password: { value: "", isValid: false },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    __typeUsername: (state, action) => {
      state.username.value = action.payload;
      state.username.isValid = isValidId(action.payload);
    },
    __typePassword: (state, action) => {
      state.password.value = action.payload;
      state.password.isValid = isValidPassword(action.payload);
    },
    __showPwd: (state, action) => {
      state.password.isShown = !state.password.isShown;
    },
    __cleanUp: (state, action) => {
      state = initialState;
    },
  },
});
export const { __typeUsername, __typePassword, __showPwd, __cleanUp } =
  loginSlice.actions;

export default loginSlice.reducer;
