import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

import { watcherSaga } from "../../sagas/rootSaga";

import userReducer from "../features/userSlice";
import doseHistoryReducer from "../features/doseHistorySlice";
import prescriptionReducer from "../features/prescriptionSlice";
import alarmSettingReducer from "../features/alarmSettingSlice";
import pharmacyCheckInReducer from "../features/pharmacyCheckInSlice";

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
  },
  middleware,
});

sagaMiddleware.run(watcherSaga);

export default store;
