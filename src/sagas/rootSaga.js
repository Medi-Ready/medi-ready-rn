import { all, takeLatest } from "@redux-saga/core/effects";

import { handlePrescriptionList } from "./handlers/prescriptions";
import { getPrescriptionList } from "../redux/features/prescriptionSlice";

import { handleLogin, handleAuthCheck, handleLogout } from "./handlers/auth";
import { login, logout, checkAuthentication } from "../redux/features/userSlice";

export function* watcherSaga() {
  yield all([
    takeLatest(login.type, handleLogin),
    takeLatest(logout.type, handleLogout),
    takeLatest(checkAuthentication.type, handleAuthCheck),
    takeLatest(getPrescriptionList, handlePrescriptionList),
  ]);
}
