import { call, put } from "redux-saga/effects";

import signInWithGoogle from "../../utils/signInWithGoogle";
import { loginRequest, logoutRequest, authCheck } from "../../api/index";
import { setUserInfo, deleteUserInfo, logout } from "../../redux/features/userSlice";

export function* handleLogin() {
  const userData = yield call(signInWithGoogle);
  const { result, data } = yield call(loginRequest, userData);

  if (result === "success") {
    yield put(setUserInfo(data.user));
  }
}

export function* handleLogout() {
  const response = yield call(logoutRequest);

  if (response.result === "success") {
    yield put(deleteUserInfo());
  }
}

export function* handleAuthCheck() {
  const { result, data } = yield call(authCheck);

  result === "success"
    ? yield put(setUserInfo(data.user))
    : yield put(logout());
}
