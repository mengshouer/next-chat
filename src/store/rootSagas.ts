import { all, fork } from "redux-saga/effects";
import chatSaga from "./chat/saga";
import userSaga from "./user/saga";

function* rootSaga() {
  yield all([fork(chatSaga), fork(userSaga)]);
}

export default rootSaga;
