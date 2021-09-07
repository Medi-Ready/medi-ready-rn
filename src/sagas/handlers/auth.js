import { all, call, put } from "redux-saga/effects";

import { login, authCheck } from "../../api/index";
import signInWithGoogle from "../../utils/signInWithGoogle";
import { setUserInfo, deleteUserInfo, logout } from "../../redux/features/userSlice";
import { getSecureStoreItem, setSecureStoreItem, deleteSecureStoreItem } from "../../utils/secureStore";

export function* handleLogin() {
  const userData = yield call(signInWithGoogle);
  const response = yield call(login, userData);

  if (response.result === "login success") {
    yield all([
      put(setUserInfo(response.user)),
      call(setSecureStoreItem, "token", response.token),
    ]);
  }
}

export function* handleLogout() {
  yield all([
    put(deleteUserInfo()),
    call(deleteSecureStoreItem, "token"),
  ]);
}

export function* handleAuthCheck() {
  const token = yield call(getSecureStoreItem, "token");

  if (!token) {
    yield put(logout());
    return;
  }

  const checkAuth = yield call(authCheck, token);

  if (checkAuth.result === "authorized") {
    yield put(setUserInfo(checkAuth.userInfo));
  } else {
    yield put(logout());
  }
}
