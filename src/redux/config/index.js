import { configureStore } from "@reduxjs/toolkit";

import post from "../modules/postSlice";
import signUp from "../modules/signUpSlice";
import login from '../modules/loginSlice'

const store = configureStore({
  reducer: {
    post,
    signUp,
    login,
  },
});

export default store;
