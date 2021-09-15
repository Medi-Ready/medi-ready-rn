import { all, takeLatest } from "@redux-saga/core/effects";

import { updateDoseHistories } from "../redux/features/doseHistorySlice";
import { getPrescriptionList } from "../redux/features/prescriptionSlice";
import { openScanner, checkIn } from "../redux/features/pharmacyCheckInSlice";
import { saveAlarm, getAlarmTime } from "../redux/features/alarmSettingSlice";
import { login, logout, checkAuthentication } from "../redux/features/userSlice";

import { handlePrescriptionList } from "./handlers/prescriptions";
import { handleUpdateDoseHistories } from "./handlers/doseHistory";
import { handleLogin, handleAuthCheck, handleLogout } from "./handlers/auth";
import { handleCameraPermission, handlePharmacyCheckIn } from "./handlers/checkIn";
import { handleAlarmSetting, handleLoginAlarmSetting } from "./handlers/alarmSetting";

export function* watcherSaga() {
  yield all([
    takeLatest(login.type, handleLogin),
    takeLatest(logout.type, handleLogout),
    takeLatest(checkAuthentication.type, handleAuthCheck),

    takeLatest(saveAlarm.type, handleAlarmSetting),
    takeLatest(getAlarmTime.type, handleLoginAlarmSetting),

    takeLatest(checkIn.type, handlePharmacyCheckIn),
    takeLatest(openScanner.type, handleCameraPermission),

    takeLatest(getPrescriptionList.type, handlePrescriptionList),

    takeLatest(updateDoseHistories, handleUpdateDoseHistories),
  ]);
}
