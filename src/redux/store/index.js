import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

import { watcherSaga } from "../../sagas/rootSaga";

import userReducer from "../features/userSlice";
import doseHistoryReducer from "../features/doseHistorySlice";
import alarmSettingReducer from "../features/alarmSettingSlice";
import prescriptionReducer from "../features/prescriptionSlice";
import pharmacyCheckInReducer from "../features/pharmacyCheckInSlice";
import pushNotificationReducer from "../features/pushNotificationSlice";
import prescriptionListReducer from "../features/prescriptionListSlice";

const sagaMiddleware = createSagaMiddleware();

const middleware = process.env.NODE_ENV === "development"
  ? [logger, sagaMiddleware]
  : (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware);

const store = configureStore({
  reducer: {
    user: userReducer,
    doseHistory: doseHistoryReducer,
    prescription: prescriptionReducer,
    alarmSetting: alarmSettingReducer,
    pharmacyCheckIn: pharmacyCheckInReducer,
    prescriptionList: prescriptionListReducer,
    pushNotification: pushNotificationReducer,
  },
  middleware,
});

sagaMiddleware.run(watcherSaga);

export default store;
