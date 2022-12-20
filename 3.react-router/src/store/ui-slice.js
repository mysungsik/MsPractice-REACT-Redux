// ui 전용 slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = { getFetchLoading: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    fetchLoading(state, action) {
      state.getFetchLoading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
