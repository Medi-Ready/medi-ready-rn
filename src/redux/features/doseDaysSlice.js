import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  error: null,
  isLoading: false,
  selectedDay: "YYYY-MM-DD",
};

export const doseDaysSlice = createSlice({
  name: "pharmacy check in",
  initialState,
  reducers: {

  },
});

export const {

} = doseDaysSlice.actions;

export default doseDaysSlice.reducer;
