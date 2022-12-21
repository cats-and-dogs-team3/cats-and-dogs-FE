import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "../modules/mainSlice";
import uppost from "../modules/uppostSlice";
import bestSlice from "../modules/bestSlice";
import post from "../modules/postSlice";
import signUp from "../modules/signUpSlice";
import login from "../modules/loginSlice";
import nickname from "../modules/nickNameSlice";

const store = configureStore({
  reducer: {
    best: bestSlice,
    main: mainSlice,
    uppost: uppost,
    post,
    signUp,
    login,
    nickname,
  },
});

export default store;
