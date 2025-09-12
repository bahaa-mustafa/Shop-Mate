import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Redux/counterSlice";
import cartReducer from "./Redux/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
