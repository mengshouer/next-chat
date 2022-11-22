import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchMessage, postMessage } from "src/lib/chat";
import {
  getMessageRequest,
  getMessageSuccess,
  getMessageFailure,
  pushRemoteMessageRequest,
  pushRemoteMessageFailure,
} from ".";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { MessageProps } from "src/types/chat.types";

export function* initFetchMessage() {
  try {
    const res: { data: MessageProps[] } = yield call(fetchMessage);
    yield put(
      getMessageSuccess({
        status: "success",
        data: res.data,
        error: null,
      })
    );
  } catch (errors: unknown) {
    yield put(getMessageFailure(errors as Error));
  }
}

export function* pushRemoteMessageData(action: PayloadAction<MessageProps>) {
  try {
    const { data } = yield call(postMessage, action.payload);
  } catch (errors: unknown) {
    yield put(pushRemoteMessageFailure(errors as Error));
  }
}

export default function* chatSaga() {
  yield takeLatest(getMessageRequest.type, initFetchMessage);
  yield takeEvery(pushRemoteMessageRequest.type, pushRemoteMessageData);
}
