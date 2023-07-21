import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
export default store;
// SLICES
// userSlice: sepetdekiler,favoriler,lastorders,wallets user slice icinde olacak
// pizzasSlice: pizzalar
