import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.isSignedIn = true;
    },
    logout: (state, action) => {
      state.isSignedIn = false;
    },
  },
});

export const {
  login,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
