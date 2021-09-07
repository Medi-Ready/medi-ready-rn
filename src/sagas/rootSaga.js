import { all, takeEvery, takeLatest } from "@redux-saga/core/effects";

import { handleLogin, handleAuthCheck, handleLogout } from "./handlers/auth";
import { login, logout, checkAuthentication } from "../redux/features/userSlice";

export function* watcherSaga() {
  yield all([
    takeLatest(login.type, handleLogin),
    takeLatest(logout.type, handleLogout),
    takeEvery(checkAuthentication.type, handleAuthCheck),
  ]);
}
