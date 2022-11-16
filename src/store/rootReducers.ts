import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { chatReducer } from "./chat";

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
});

export default rootReducer;
