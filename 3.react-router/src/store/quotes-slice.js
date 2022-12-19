import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allQuotes: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuotes(state, action) {
      state.allQuotes.push(action.payload.quotes); // quotes 는 id, content, auythor 이 있는 객체
    },
    replaceQuotes(state, action) {
      state.allQuotes = action.payload;
    },
  },
});

export const quotesActions = quotesSlice.actions;

export default quotesSlice.reducer;
