import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../utils/localStorage";
import { FAVORITE_LS_KEY } from "../constants";

const initialState = getFromLocalStorage(FAVORITE_LS_KEY) ?? {};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: {
    addFavorite: (state, action) => {
      const { id, data } = action.payload;
      state[id] = data;
    },
    removeFavorite: (state, action) => {
      delete state[action.payload];
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
