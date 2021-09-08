import { call, put } from "redux-saga/effects";

import { requestPrescriptionList } from "../../api/index";
import { failGettingPrescriptionList, savePrescriptionList } from "../../redux/features/prescriptionSlice";

export function* handlePrescriptionList() {
  const { result, data } = yield call(requestPrescriptionList);

  result === "success"
    ? yield put(savePrescriptionList(data))
    : yield put(failGettingPrescriptionList());
}
