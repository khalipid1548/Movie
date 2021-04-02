import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

const rootReducer = {
  movieReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
