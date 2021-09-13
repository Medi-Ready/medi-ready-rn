import { call, put, all } from "redux-saga/effects";

import { setAlarmTime } from "../../api/index";
import { setUserInfo } from "../../redux/features/userSlice";
import { failAlarmSetting, completeAlarmSetting } from "../../redux/features/alarmSettingSlice";

export function* handleAlarmSetting(action) {
  try {
    const { result, data } = yield call(setAlarmTime, action.payload);

    if (result === "success") {
      yield all([
        put(completeAlarmSetting()),
        put(setUserInfo(data)),
      ]);
    } else {
      yield put(failAlarmSetting(result.message));
    }
  } catch (error) {
    yield put(failAlarmSetting(error.message));
  }
}
