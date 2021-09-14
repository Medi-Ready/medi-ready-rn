import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  isLoading: false,
};

export const doseDaysSlice = createSlice({
  name: "doseDays",
  initialState,
  reducers: {
    setDoseComplete: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    completeSetDose: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    failSetDose: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  failSetDose,
  completeSetDose,
  setDoseComplete,
} = doseDaysSlice.actions;

export default doseDaysSlice.reducer;
