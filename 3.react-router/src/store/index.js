import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./quotes-slice";
import uiSlice from "./ui-slice";

const rootStore = configureStore({
  reducer: {
    quotesSlice: quotesSlice,
    uiSlice: uiSlice,
  },
});

export default rootStore;
