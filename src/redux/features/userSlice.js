import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  isLoading: false,
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.isLoading = true;
    },
    logout: (state, action) => {
      state.isLoading = true;
    },
    failLogin: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    cancelLogin: (state, action) => {
      state.isLoading = false;
    },
    setUserInfo: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    deleteUserInfo: (state, action) => {
      state.userInfo = null;
      state.isLoading = false;
    },
    checkAuthentication: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const {
  login,
  logout,
  failLogin,
  cancelLogin,
  setUserInfo,
  deleteUserInfo,
  checkAuthentication,
} = userSlice.actions;

export default userSlice.reducer;
