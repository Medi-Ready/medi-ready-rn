import { call, put } from "redux-saga/effects";

import { requestPrescriptionList } from "../../api/index";
import { failGettingPrescriptionList, savePrescriptionList } from "../../redux/features/prescriptionSlice";

export function* handlePrescriptionList() {
  try {
    const { result, data } = yield call(requestPrescriptionList);

    if (result === "success") {
      yield put(savePrescriptionList(data));
    }
  } catch(error) {
    yield put(failGettingPrescriptionList({ message: error.message }));
  }
}
