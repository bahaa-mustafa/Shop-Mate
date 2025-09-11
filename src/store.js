import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Redux/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
