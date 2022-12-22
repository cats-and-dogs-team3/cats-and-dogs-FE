import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "../modules/mainSlice";
import uppost from "../modules/uppostSlice";
import bestSlice from "../modules/bestSlice";
import post from "../modules/postSlice";
import signUp from "../modules/signUpSlice";
import signIn from "../modules/signInSlice";
import nickname from "../modules/nickNameSlice";

const store = configureStore({
  reducer: {
    best: bestSlice,
    main: mainSlice,
    uppost: uppost,
    post,
    signUp,
    signIn,
    nickname,
  },
});

export default store;
