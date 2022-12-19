import { configureStore } from "@reduxjs/toolkit";

import post from "../modules/postSlice";
import signUp from "../modules/signUpSlice";

const store = configureStore({
  reducer: {
    post, signUp
  },
});

export default store;
