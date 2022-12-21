import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "../modules/mainSlice";
import uppost from "../modules/uppostSlice";
import bestSlice from "../modules/bestSlice";
const store = configureStore({
  reducer: {
    best: bestSlice,
    main: mainSlice,
    uppost: uppost,
  },
});

export default store;
