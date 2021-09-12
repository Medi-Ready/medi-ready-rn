import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

import { watcherSaga } from "../../sagas/rootSaga";

import userReducer from "../features/userSlice";
import doseDaysReducer from "../features/doseDaysSlice";
import pharmacyCheckInSlice from "../features/pharmacyCheckInSlice";
import prescriptionReducer from "../features/prescriptionSlice";

const sagaMiddleware = createSagaMiddleware();

const middleware = process.env.NODE_ENV === "development"
  ? [logger, sagaMiddleware]
  : (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware);

const store = configureStore({
  reducer: {
    user: userReducer,
    doseDays: doseDaysReducer,
    prescription: prescriptionReducer,
    pharmacyCheckIn: pharmacyCheckInSlice,
  },
  middleware,
});

sagaMiddleware.run(watcherSaga);

export default store;
