import { createSlice } from "@reduxjs/toolkit";
import { noop } from "lodash";

const initialState = {
  isSignedIn: false,
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: noop,
    checkAuthentication: noop,
    logout: (state, action) => {
      state.isSignedIn = false;
      state.userInfo = {};
    },
    setUserInfo: (state, action) => {
      state.isSignedIn = true;
      state.userInfo = action.payload;
    },
    deleteUserInfo: (state, action) => {
      state.isSignedIn = false;
      state.userInfo = {};
    },
  },
});

export const {
  login,
  logout,
  setUserInfo,
  deleteUserInfo,
  checkAuthentication,
} = userSlice.actions;

export default userSlice.reducer;
