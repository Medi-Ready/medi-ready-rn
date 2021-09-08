import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  isLoading: false,
  userInfo: {},
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
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setUserInfo: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    deleteUserInfo: (state, action) => {
      state.userInfo = {};
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
  loginFail,
  setUserInfo,
  deleteUserInfo,
  checkAuthentication,
} = userSlice.actions;

export default userSlice.reducer;
