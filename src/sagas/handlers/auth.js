import { call, put } from "redux-saga/effects";

import signInWithGoogle from "../../utils/signInWithGoogle";
import { loginRequest, logoutRequest, authCheck } from "../../api/index";
import { setUserInfo, deleteUserInfo, logout } from "../../redux/features/userSlice";

export function* handleLogin() {
  const userData = yield call(signInWithGoogle);
  const response = yield call(loginRequest, userData);

  if (response.result === "login success") {
    yield put(setUserInfo(response.user));
  }
}

export function* handleLogout() {
  const response = yield call(logoutRequest);

  if (response.result === "success") {
    yield put(deleteUserInfo());
  }
}

export function* handleAuthCheck() {
  const response = yield call(authCheck);

  if (response.result === "success") {
    yield put(setUserInfo(response.userInfo));
  } else {
    yield put(logout());
  }
}
