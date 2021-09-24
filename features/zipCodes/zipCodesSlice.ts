import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoritesState {
  selected: string;
  favorites: string[];
}

const initialState: FavoritesState = {
  selected: "",
  favorites: [],
};

export const zipCodesSlice = createSlice({
  name: "zipCodes",
  initialState,
  reducers: {
    addFavorite: (state: FavoritesState, action: PayloadAction<string>) => {
      if (state.favorites.indexOf(action.payload) === -1) {
        state.favorites.push(action.payload);
      }
      state.selected = action.payload;
    },
    select: (state: FavoritesState, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export const { addFavorite, select } = zipCodesSlice.actions;
export default zipCodesSlice.reducer;
