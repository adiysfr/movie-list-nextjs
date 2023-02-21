import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "../../services/Movie";

const initialState = {
  data:[],
  loading: false,
};

export const getMovie = createAsyncThunk(
  "GET_LIST_MOVIE",
    async(body) => {
      try {
        const response = await movieService.getMovie(body);
        return response.data;
    } catch (error) {
      return error;
    }
  });
  
export const getDetailMovie = createAsyncThunk(
  "GET_DETAIL_MOVIE",
  async(id) => {
    try {
      const response = await movieService.getDetailMovie(id);
      return response.data;
    } catch (error) {
      return error;
    }
  });
  
const movieSlice = createSlice({
  name: "Movie",
  initialState,
  // extraReducers: (builder) => {
  //   builder.addCase(getMovie.fulfilled, (state, action) => {
  //     state.data = state.data.concat(action.payload.Search)
  //   })
  // },
  extraReducers: {
    [getMovie.pending]: (state, action) => {
      state.data = false;
      state.loading = true;
    },
    [getMovie.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getMovie.rejected]: (state, action) => {
      state.data = false;
      state.loading = true;
    },

    [getDetailMovie.pending]: (state, action) => {
      state.data = false;
      state.loading = true;
    },
    [getDetailMovie.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getDetailMovie.rejected]: (state, action) => {
      state.data = false;
      state.loading = true;
    },
  },

});

export const { setGetMovie, placeDetail } = movieSlice.actions;
const { reducer } = movieSlice;
export default reducer;
