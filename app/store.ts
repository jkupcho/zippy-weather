import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoritesSlice";
import { weatherApi } from "../services/weather";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
