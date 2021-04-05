import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";

const rootReducer = {
  movieReducer,
  userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
