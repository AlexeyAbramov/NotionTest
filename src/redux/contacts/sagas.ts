import { call, ForkEffect, put, StrictEffect, takeEvery } from "redux-saga/effects";
import { getContacts } from "../../assets/js/api";
import { IUserInfo } from "../../types/users";
import { setContacts, setError } from "./action";
import { ContactActionType } from "./types";

function* fetchContacts(): Generator<StrictEffect, void, IUserInfo[]> {
  try {
    const contacts = yield call(getContacts);
    yield put(setContacts(contacts));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export function* watchFetchContacts(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(ContactActionType.CONTACTS_FETCH, fetchContacts);
}
