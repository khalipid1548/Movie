import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import movieApi from "API/movieAPI";

export const getMovieList = createAsyncThunk("movie/getMovieList", async () => {
  // call Api
  const data = await movieApi.get();
  return data;
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: [],
    danhSachGheDangDat: [],
    lichChon: [],
    phimChon: [],
  },
  reducers: {
    PICK_LICH(state, action) {
      state.lichChon.push(action.payload);
      // console.log(action.payload);
    },
    PICK_PHIM(state, action) {
      state.phimChon.push(action.payload);
      // console.log(action.payload);
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
  },
});

const {reducer, actions} = movieSlice;
export const {DAT_GHE, HUY_GHE, PICK_LICH, PICK_PHIM} = actions;
export default reducer;
