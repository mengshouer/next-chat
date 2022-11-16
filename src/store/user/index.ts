import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IuserState {
  user_id: string;
  username: string;
}

const initialState: IuserState = {
  user_id: "1",
  username: "John",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUser: (state, action: PayloadAction<IuserState>) => {
      state.user_id = action.payload.user_id;
      state.username = action.payload.username;
    },
  },
});

export const { updateUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
