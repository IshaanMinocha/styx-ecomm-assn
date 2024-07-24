import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
