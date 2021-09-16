import { call, put } from "redux-saga/effects";

import { setNotificationToken } from "../../api";
import { registerForPushNotificationsAsync } from "../../utils/pushNotification";
import { successNotificationRegister, failNotificationRegister, registerPushNotification } from "../../redux/features/pushNotificationSlice";

export function* handlePushNotificationPermission() {
  try {
    const notificationToken = yield call(registerForPushNotificationsAsync);

    if (!notificationToken) {
      yield put(failNotificationRegister({ message: "push notification not authroized" }));
    }

    const { result } = yield call(setNotificationToken, notificationToken);

    result === "success"
      ? yield put(successNotificationRegister())
      : yield put(failNotificationRegister({ message: "push notification not authroized" }));
  } catch (error) {
    yield put(failNotificationRegister({ message: error.message }));
  }
}
