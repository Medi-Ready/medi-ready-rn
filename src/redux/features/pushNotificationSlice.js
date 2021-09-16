import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  isLoading: false,
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
  },
});

export const {
  registerPushNotification,
  successNotificationRegister,
  failNotificationRegister,
} = pushNotificationSlice.actions;

export default pushNotificationSlice.reducer;
