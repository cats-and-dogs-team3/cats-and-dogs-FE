import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import {
  isValidEmail,
  isValidId,
  isValidPassword,
} from "../../components/signUp/func";

//초기 상태값 설정
const initialState = {
  username: { value: "", isValid: false },
  email: { value: "", isValid: false },
  password: { value: "", isValid: false, isShown: false },
  passwordCheck: { value: "", isValid: false, isShown: false },
  nickname: { value: "", isValid: false },
  form: { username: "", email: "", nickname: "", password: "" },
  loginForm: { username: "", password: "" },
};
const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    __cleanUp: (state, action) => {
      state = initialState;
    },
    __submitForm: (state, action) => {
      state.form = action.payload;
    },
    __typeUsername: (state, action) => {
      state.username.value = action.payload;
      state.username.isValid = isValidId(action.payload);
    },
    __typeEmail: (state, action) => {
      state.email.value = action.payload;
      state.email.isValid = isValidEmail(action.payload);
    },
    __typePassword: (state, action) => {
      state.password.value = action.payload;
      state.password.isValid = isValidPassword(action.payload);
    },
    __typePasswordCheck: (state, action) => {
      state.passwordCheck.value = action.payload;
      state.passwordCheck.isValid = action.payload === state.password.value
    },
    __typeNickname: (state, action) => {
      state.nickname.value = action.payload;
      state.nickname.isValid = action.payload.trim() !== "";
    },
    __showPwd: (state, action) => {
      state.password.isShown = !state.password.isShown;
    },
    __showPwdCheck: (state, action) => {
      state.passwordCheck.isShown = !state.passwordCheck.isShown;
    },
  },
});

export const {
  __cleanUp,
  __showPwd,
  __showPwdCheck,
  __submitForm,
  __typeUsername,
  __typeEmail,
  __typeNickname,
  __typePassword,
  __typePasswordCheck,
} = signUpSlice.actions;

export default signUpSlice.reducer;
