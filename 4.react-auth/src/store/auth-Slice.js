import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuth: false, authEmail: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, actions) {
      state.authToken = actions.payload.authToken;
      state.isAuth = actions.payload.isAuth;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
