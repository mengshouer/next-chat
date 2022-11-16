import { all, fork } from "redux-saga/effects";
import chatSaga from "./chat/saga";

function* rootSaga() {
  yield all([fork(chatSaga)]);
}

export default rootSaga;
