import { configureStore } from "@reduxjs/toolkit";
import favouritSlice from "./reducers/FavoriteSlice";

export const store = configureStore({
  reducer: {
    favorite: favouritSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
