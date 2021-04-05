import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "services";

export const login = createAsyncThunk("user/login", async (user) => {
  const data = userService.login(user);
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("user_movie")) || [],
  },
  reducers: {
    logout(state) {
      localStorage.removeItem("user_movie");
      state.currentUser = [];
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload.data;
      localStorage.setItem("user_movie", JSON.stringify(action.payload.data));
    },
  },
});

const {reducer, actions} = userSlice;
export const {logout} = actions;
export default reducer;
