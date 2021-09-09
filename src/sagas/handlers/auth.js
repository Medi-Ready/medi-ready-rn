import { call, put } from "redux-saga/effects";

import signInWithGoogle from "../../utils/signInWithGoogle";
import { loginRequest, logoutRequest, authCheck } from "../../api/index";
import {
  logout,
  loginFail,
  loginCancel,
  setUserInfo,
  deleteUserInfo,
} from "../../redux/features/userSlice";

export function* handleLogin() {
  try {
    const userData = yield call(signInWithGoogle);

    if (!userData) {
      yield put(loginCancel());
      return;
    }

    const { result, data } = yield call(loginRequest, userData);

    if (result === "success") {
      yield put(setUserInfo(data.user));
    }
  } catch (error) {
    yield put(loginFail({ message: error.message }));
  }
}

export function* handleLogout() {
  try {
    const response = yield call(logoutRequest);

    if (response.result === "success") {
      yield put(deleteUserInfo());
    }
  } catch (error) {
    yield put(loginFail({ message: error.message }));
  }
}

export function* handleAuthCheck() {
  try {
    const { result, data } = yield call(authCheck);

    result === "success"
      ? yield put(setUserInfo(data.user))
      : yield put(logout());
  } catch (error) {
    yield put(loginFail({ message: error.message }));
  }
}
