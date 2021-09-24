import { combineReducers } from "@reduxjs/toolkit";

import favoritesReducer from "../features/zipCodes/zipCodesSlice";
import { weatherApi } from "../services/weather";

export default combineReducers({
  zipCodes: favoritesReducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});
