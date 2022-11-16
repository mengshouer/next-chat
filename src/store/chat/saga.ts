import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchMessage, postMessage } from "src/apis/chat";
import {
  getMessageRequest,
  getMessageSuccess,
  getMessageFailure,
  updateMessageDataRequest,
} from ".";
import { MessageProps } from "src/types/chat.types";

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

export function* updateMessageData(action: PayloadAction<MessageProps>) {
  try {
    const { status }: { status: number } = yield call(
      postMessage,
      action.payload
    );
  } catch {
    // eslint-disable-next-line no-console
    console.log("error");
  }
}

export default function* chatSaga() {
  yield takeLatest(getMessageRequest.type, initFetchMessage);
  yield takeEvery(updateMessageDataRequest.type, updateMessageData);
}
