import { configureStore } from "@reduxjs/toolkit";
import credentials from "../store/slice/credentials";

export const Store = configureStore({
  reducer: {
    credentials: credentials,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default Store;
