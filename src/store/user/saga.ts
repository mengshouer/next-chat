import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUserProfile } from "src/lib/user";
import { updateUserProfile, updateUserRequest } from ".";
import type { IuserState } from ".";

export function* updateUser() {
  try {
    const res: IuserState = yield call(fetchUserProfile);
    yield put(updateUserRequest(res));
  } catch (error: Error | unknown) {
    let message: string;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }
    console.log(message);
  }
}

export default function* userSaga() {
  yield takeLatest(updateUserProfile.type, updateUser);
}
