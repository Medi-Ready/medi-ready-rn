import { call, put } from "redux-saga/effects";

import { updateDoseHistory } from "../../api";
import { failDoseHistoryUpdate } from "../../redux/features/doseHistorySlice";

export function* handleUpdateDoseHistories(action) {
  try {
    const { doseHistoryId, newDoseHistory } = action.payload;

    yield call(updateDoseHistory, doseHistoryId, newDoseHistory);
  } catch (error) {
    yield put(failDoseHistoryUpdate(error.message));
  }
}
