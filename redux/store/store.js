import { configureStore, combineReducers } from "@reduxjs/toolkit";
import movieReducer from "../slices/Movie";


const reducer = combineReducers ( {
	movie: movieReducer,
})
const store = configureStore({
  reducer: {reducer},
  devTools: true,
});

export default store;