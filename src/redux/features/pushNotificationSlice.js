import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  isLoading: false,
  pushNotificationList: [],
  pushNotificationBadge: 0,
};

export const pushNotificationSlice = createSlice({
  name: "pushNotification",
  initialState,

  reducers: {
    registerPushNotification: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    successNotificationRegister: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    failNotificationRegister: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    savePushNotification: (state, action) => {
      state.pushNotificationList.push(action.payload);
      state.pushNotificationBadge++;
    },
    deletePushNotification: (state, action) => {
      state.pushNotificationBadge--;
    },
  },
});

export const {
  savePushNotification,
  failNotificationRegister,
  registerPushNotification,
  successNotificationRegister,
} = pushNotificationSlice.actions;

export default pushNotificationSlice.reducer;
