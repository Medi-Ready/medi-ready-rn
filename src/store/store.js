import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import userReducer from "./userSlice";
import prescriptionReducer from "./prescriptionSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    prescription: prescriptionReducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === "development") {
      return getDefaultMiddleware()
        .concat(logger)
        .concat(composeWithDevTools)
        .concat(sagaMiddleware);
    }

    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
