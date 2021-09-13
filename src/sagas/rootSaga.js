import { all, takeLatest } from "@redux-saga/core/effects";

import { saveAlarm } from "../redux/features/alarmSettingSlice";
import { handlePrescriptionList } from "./handlers/prescriptions";
import { getPrescriptionList } from "../redux/features/prescriptionSlice";
import { openScanner, checkIn } from "../redux/features/pharmacyCheckInSlice";

import { handleAlarmSetting } from "./handlers/alarmSetting";
import { handleLogin, handleAuthCheck, handleLogout } from "./handlers/auth";
import { login, logout, checkAuthentication } from "../redux/features/userSlice";
import { handleCameraPermission, handlePharmacyCheckIn } from "./handlers/checkIn";

export function* watcherSaga() {
  yield all([
    takeLatest(login.type, handleLogin),
    takeLatest(logout.type, handleLogout),
    takeLatest(checkAuthentication.type, handleAuthCheck),

    takeLatest(saveAlarm.type, handleAlarmSetting),

    takeLatest(checkIn.type, handlePharmacyCheckIn),
    takeLatest(openScanner.type, handleCameraPermission),

    takeLatest(getPrescriptionList.type, handlePrescriptionList),
  ]);
}
