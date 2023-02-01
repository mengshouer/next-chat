import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IuserState {
  id: string;
  name: string;
  email: string;
  email_verified: boolean | null;
  image: string;
}

const initialState: IuserState = {
  id: "",
  name: "",
  email: "",
  email_verified: null,
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserProfile: () => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUserRequest: (state, action: PayloadAction<IuserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.email_verified = action.payload.email_verified;
      state.image = action.payload.image;
    },
  },
});

export const { updateUserProfile, updateUserRequest } = userSlice.actions;

export const userReducer = userSlice.reducer;
