import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "./favoriteSlice";
import localStorageMiddleware from "./localStorageMiddleware";

export const store = configureStore({
  reducer: { favorites: favoriteReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
