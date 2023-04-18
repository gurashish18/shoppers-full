import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import authReducer from "../redux/auth/authSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer
  },
});
