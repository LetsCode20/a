import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
  favoriteId: null,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItemToFavorite: (state, { payload }) => {
      state.favoriteItems.push(payload);
    },
    getId: (state, { payload }) => {
      state.favoriteId = payload;
    },
  },
});

export const favoriteItems = (state) => state.favorite.favoriteItems;
export const favoriteItemsId = (state) => state.favorite.favoriteId;

export const { addItemToFavorite, getId } = favoriteSlice.actions;

export default favoriteSlice.reducer;
