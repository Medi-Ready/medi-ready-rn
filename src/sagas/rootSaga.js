import { all, takeLatest } from "@redux-saga/core/effects";

import { handlePrescriptionList } from "./handlers/prescriptions";
import { getPrescriptionList } from "../redux/features/prescriptionSlice";
import { openScanner, checkIn } from "../redux/features/pharmacyCheckInSlice";

import { handleLogin, handleAuthCheck, handleLogout } from "./handlers/auth";
import { login, logout, checkAuthentication } from "../redux/features/userSlice";
import { handleCameraPermission, handlePharmacyCheckIn } from "./handlers/checkIn";

export function* watcherSaga() {
  yield all([
    takeLatest(login.type, handleLogin),
    takeLatest(logout.type, handleLogout),
    takeLatest(checkIn.type, handlePharmacyCheckIn),
    takeLatest(openScanner.type, handleCameraPermission),
    takeLatest(checkAuthentication.type, handleAuthCheck),
    takeLatest(getPrescriptionList.type, handlePrescriptionList),
  ]);
}
