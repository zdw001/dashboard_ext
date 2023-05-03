import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'userData',
  initialState: {
    _id: null,
    username: null,
    password: null,
    profile: {},
    settings: {},
    websites: []
  },
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
    setUserData: (state, action) => {
      state._id = action.payload._id;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.profile = action.payload.profile;
      state.settings = action.payload.settings;
      state.websites = action.payload.websites;
    },
    addWebsite: (state, action) => {
      state.websites.push(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserData, addWebsite } = counterSlice.actions

export default counterSlice.reducer