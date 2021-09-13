import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  isLoading: false,
  alarmTimeList: {
    morning: "",
    lunch: "",
    dinner: "",
    beforeBed: "",
  },
};

export const alarmSettingSlice = createSlice({
  name: "alarmSetting",
  initialState,
  reducers: {
    setAlarm: (state, action) => {
      const { dosePeriod, alarmTime } = action.payload;

      state.alarmTimeList[dosePeriod] = alarmTime;
    },
    saveAlarm: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    completeAlarmSetting: (state, action) => {
      state.isLoading = false;
    },
    failAlarmSetting: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setAlarm,
  saveAlarm,
  failAlarmSetting,
  completeAlarmSetting,
} = alarmSettingSlice.actions;

export default alarmSettingSlice.reducer;
