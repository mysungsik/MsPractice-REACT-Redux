import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./quotes-slice";

const rootStore = configureStore({
  reducer: {
    quotesSlice: quotesSlice,
  },
});

export default rootStore;
