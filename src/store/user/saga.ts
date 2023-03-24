import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUserProfile } from "src/lib/user";
import { updateUserProfile, updateUserRequest } from ".";
import type { IuserState } from ".";

export function* updateUser() {
  try {
    const res: IuserState = yield call(fetchUserProfile);
    yield put(updateUserRequest(res));
  } catch (error: Error | unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
  }
}

export default function* userSaga() {
  yield takeLatest(updateUserProfile.type, updateUser);
}
