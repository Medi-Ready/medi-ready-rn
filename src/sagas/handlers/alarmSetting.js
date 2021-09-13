import { call, put } from "redux-saga/effects";

import { setAlarmTime } from "../../api/index";
import { failAlarmSetting, completeAlarmSetting } from "../../redux/features/alarmSettingSlice";

export function* handleAlarmSetting(action) {
  try {
    const { result } = yield call(setAlarmTime, action.payload);

    if (result === "success") {
      yield put(completeAlarmSetting());
    } else {
      yield put(failAlarmSetting(result.message));
    }
  } catch (error) {
    yield put(failAlarmSetting(error.message));
  }
}
