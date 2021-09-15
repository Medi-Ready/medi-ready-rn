import { call, put } from "redux-saga/effects";

import signInWithGoogle from "../../utils/signInWithGoogle";
import { loginRequest, logoutRequest, authCheck } from "../../api/index";
import {
  failLogin,
  cancelLogin,
  setUserInfo,
  deleteUserInfo,
} from "../../redux/features/userSlice";
import wait from "../../utils/delay";

export function* handleLogin() {
  try {
    const userData = yield call(signInWithGoogle);

    if (!userData) {
      yield put(cancelLogin());
      return;
    }

    const { result, data } = yield call(loginRequest, userData);

    yield call(wait, 2000);

    result === "success"
      ? yield put(setUserInfo(data))
      : yield put(cancelLogin());
  } catch (error) {
    yield put(failLogin(error));
  }
}

export function* handleLogout() {
  try {
    const response = yield call(logoutRequest);

    yield call(wait, 2000);

    response.result === "success"
      ? yield put(deleteUserInfo())
      : yield put(cancelLogin());
  } catch (error) {
    yield put(failLogin(error));
  }
}

export function* handleAuthCheck() {
  try {
    const { result, data } = yield call(authCheck);

    yield call(wait, 2000);

    result === "success"
      ? yield put(setUserInfo(data))
      : yield put(deleteUserInfo());
  } catch (error) {
    yield put(failLogin(error));
  }
}
