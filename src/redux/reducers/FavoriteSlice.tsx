import { TProduct } from "@/types/Product-Type";
import { createSlice } from "@reduxjs/toolkit";


export interface IFavorite {
  favoriteList: TProduct[];
}

const initialState: IFavorite = { favoriteList: [] };

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    add : (state, action) => {
      state.favoriteList.push(action.payload);
    },
    remove: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});


export const {add , remove} = favoriteSlice.actions;

export default favoriteSlice.reducer;