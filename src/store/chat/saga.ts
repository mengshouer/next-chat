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
import type { MessageProps, MessageResProps } from "src/types/chat.types";

export function* initFetchMessage() {
  try {
    const res: { data: MessageResProps[] } = yield call(fetchMessage);
    yield put(
      getMessageSuccess({
        status: "success",
        data: res.data,
        error: null,
      })
    );
  } catch (error: Error | unknown) {
    const message = error instanceof Error ? error.message : String(error);
    yield put(getMessageFailure(message));
  }
}

export function* pushRemoteMessageData(action: PayloadAction<MessageProps>) {
  try {
    const res: MessageResProps = yield call(postMessage, action.payload);
    // Identify whether the message was sent successfully (todo...)
  } catch (error: Error | unknown) {
    const message = error instanceof Error ? error.message : String(error);
    yield put(pushRemoteMessageFailure(message));
  }
}

export default function* chatSaga() {
  yield takeLatest(getMessageRequest.type, initFetchMessage);
  yield takeEvery(pushRemoteMessageRequest.type, pushRemoteMessageData);
}
