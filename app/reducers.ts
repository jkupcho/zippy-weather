import { combineReducers } from "@reduxjs/toolkit";

import favoritesReducer from "../features/favorites/favoritesSlice";
import { weatherApi } from "../services/weather";

export default combineReducers({
  favorites: favoritesReducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});
