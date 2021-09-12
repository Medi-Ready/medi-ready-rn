import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  isLoading: false,
  prescriptionList: [],
};

export const prescriptionSlice = createSlice({
  name: "prescription",
  initialState,
  reducers: {
    getPrescriptionList: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    savePrescriptionList: (state, action) => {
      state.prescriptionList = action.payload;
      state.isLoading = false;
    },
    failGettingPrescriptionList: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getPrescriptionList,
  savePrescriptionList,
  failGettingPrescriptionList,
} = prescriptionSlice.actions;

export default prescriptionSlice.reducer;
