import { configureStore } from "@reduxjs/toolkit";
import callReducer from "../store/slice/CallSlice";

export const Store = configureStore({
  reducer: {
    call: callReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default Store;
