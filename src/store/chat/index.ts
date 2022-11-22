import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { MessageProps } from "src/types/chat.types";

interface ImessageState {
  status: "success" | "loading" | "error";
  data: MessageProps[];
  error: Error | null;
}

const initialState: ImessageState = {
  status: "loading",
  data: [],
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getMessageRequest: () => {},
    getMessageSuccess: (state, action: PayloadAction<ImessageState>) => {
      state.status = "success";
      state.data = action.payload.data;
    },
    getMessageFailure: (state, action: PayloadAction<Error>) => {
      state.status = "error";
      state.error = action.payload;
    },
    updateMessageDataRequest: (state, action: PayloadAction<MessageProps>) => {
      state.data.push(action.payload);
    },
    pushRemoteMessageRequest: (
      state,
      action: PayloadAction<MessageProps>
    ) => {},
    pushRemoteMessageFailure: (state, action: PayloadAction<Error>) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const {
  getMessageRequest,
  getMessageSuccess,
  getMessageFailure,
  updateMessageDataRequest,
  pushRemoteMessageRequest,
  pushRemoteMessageFailure,
} = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
