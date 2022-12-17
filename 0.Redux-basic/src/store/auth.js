import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { Authentication: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.Authentication = true;
    },
    logout(state) {
      state.Authentication = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
