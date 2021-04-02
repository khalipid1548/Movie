import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import movieApi from "API/movieAPI";
// import axios from "axios";

export const getMovieList = createAsyncThunk("movie/getMovieList", async () => {
  // call Api
  const data = await movieApi.get();
  return data;
});

// export const getMovieDetail = createAsyncThunk("movie/getMovieDetail", async (payload) => {
//   // call Api
//   const data = await movieApi.getDetail(payload);
//   return data;
// });

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: [],
    danhSachGheDangDat: [],
    lichChon: [],
  },
  reducers: {
    PICK_LICH(state, action) {
      state.lichChon.push(action.payload);
      console.log(action.payload);
    },
    DAT_GHE(state, action) {
      let index = state.danhSachGheDangDat.findIndex((gheDangDat) => gheDangDat.soGhe === action.payload.soGhe);
      if (index !== -1) {
        state.danhSachGheDangDat.splice(index, 1);
      } else {
        state.danhSachGheDangDat.push(action.payload);
      }
    },
    HUY_GHE(state, action) {
      let index = state.danhSachGheDangDat.findIndex((gheDangDat) => gheDangDat.soGhe === action.payload);
      if (index !== -1) {
        state.danhSachGheDangDat.splice(index, 1);
      }
    },
  },
  extraReducers: {
    [getMovieList.fulfilled]: (state, action) => {
      state.movieList = action.payload.items;
    },
    // [getMovieDetail.fulfilled]: (state, action) => {
    //   state.phimDetail = action.payload;
    // },
  },
});

const {reducer, actions} = movieSlice;
export const {DAT_GHE, HUY_GHE, PICK_LICH} = actions;
export default reducer;