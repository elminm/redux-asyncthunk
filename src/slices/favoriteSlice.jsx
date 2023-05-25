import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "count",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavoritesAction: (state, action) => {
      state.favorites = [...state.favorites, action.payload]
    },
    removeFavoriteAction: (state, action) => {
      state.favorites = [...state.favorites.filter(q => q.id != action.payload.id)]
    },
  },
});

export const { addFavoritesAction, removeFavoriteAction } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
