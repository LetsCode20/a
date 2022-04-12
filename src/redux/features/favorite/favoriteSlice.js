import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItemToFavorite: (state, { payload }) => {
      const itemIndex = state.favoriteItems.filter(
        (item) => item.id !== payload.id
      );

      state.favoriteItems = [...itemIndex, payload];
    },
    removeItemFromFavorite: (state, { payload }) => {
      state.favoriteItems = [
        ...state.favoriteItems.filter((item) => item.id !== payload),
      ];
    },
  },
});

export const favoriteItems = (state) => state.favorite.favoriteItems;

export const { addItemToFavorite, removeItemFromFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
