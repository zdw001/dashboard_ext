import { createSlice } from '@reduxjs/toolkit'

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: {
    value: ""
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { setSearchValue } = searchValueSlice.actions

export default searchValueSlice.reducer