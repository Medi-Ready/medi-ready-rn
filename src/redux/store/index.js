import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

import userReducer from "../features/userSlice";
import prescriptionReducer from "../features/prescriptionSlice";
import { watcherSaga } from "../../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = process.env.NODE_ENV === "development"
  ? [logger, sagaMiddleware]
  : [sagaMiddleware];

const store = configureStore({
  reducer: {
    user: userReducer,
    prescription: prescriptionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(watcherSaga);

export default store;
