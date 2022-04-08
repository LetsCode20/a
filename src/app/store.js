import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import directoryReducer from '../features/directory/directorySlice';
import shopReducer from '../features/shop/shopSlice';

export const store = configureStore({
  reducer: {
    user: authReducer,
    directory: directoryReducer,
    shop: shopReducer,
  },
});
