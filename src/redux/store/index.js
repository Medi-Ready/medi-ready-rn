import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

import { watcherSaga } from "../../sagas/rootSaga";

import userReducer from "../features/userSlice";
import doseDaysReducer from "../features/doseDaysSlice";
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
    doseDays: doseDaysReducer,
    prescription: prescriptionReducer,
    alarmSetting: alarmSettingReducer,
    pharmacyCheckIn: pharmacyCheckInReducer,
  },
  middleware,
});

sagaMiddleware.run(watcherSaga);

export default store;
