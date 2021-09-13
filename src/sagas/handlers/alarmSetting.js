import { call, put } from "redux-saga/effects";

import { getAlarmTime, setAlarmTime } from "../../api/index";
import { failAlarmSetting, completeAlarmSetting } from "../../redux/features/alarmSettingSlice";

export function* handleAlarmSetting(action) {
  try {
    const { result, data } = yield call(setAlarmTime, action.payload);

    if (result === "success") {
      yield put(completeAlarmSetting(data));
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    yield put(failAlarmSetting(error.message));
  }
}

export function* handleLoginAlarmSetting() {
  try {
    const { result, data } = yield call(getAlarmTime);

    if (result === "success") {
      yield put(completeAlarmSetting(data));
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    yield put(failAlarmSetting(error.message));
  }
};
