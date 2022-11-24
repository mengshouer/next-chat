import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IuserState {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

const initialState: IuserState = {
  name: "Not logged in",
  email: "Not logged in",
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUser: (state, action: PayloadAction<IuserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.image = action.payload.image;
    },
  },
});

export const { updateUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
