import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./userSlice";
import prescriptionReducer from "../features/prescriptionSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    prescription: prescriptionReducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === "development") {
      return getDefaultMiddleware().concat(logger);
    }

    return getDefaultMiddleware();
  },
});

export default store;
