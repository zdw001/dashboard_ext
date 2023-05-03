import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from '../slices/userDataSlice';

export const store = configureStore({
  reducer: {
    userData: userDataReducer
  },
})