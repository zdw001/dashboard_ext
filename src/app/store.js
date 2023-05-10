import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from '../slices/userDataSlice';
import searchValueReducer from '../slices/searchValueSlice';

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    searchValue: searchValueReducer
  },
})