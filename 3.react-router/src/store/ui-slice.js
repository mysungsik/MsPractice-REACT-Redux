// ui 전용 slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = { getFetchLoading: false, isSignup: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    fetchLoading(state, action) {
      state.getFetchLoading = action.payload;
    },
    signupModalOn(state, action) {
      state.isSignup = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
