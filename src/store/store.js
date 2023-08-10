import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import pizzaSlice from "./pizzaSlice";
import animationSlice from "./animationSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    pizza: pizzaSlice,
    animation: animationSlice,
  },
});
export default store;
// SLICES
// userSlice: sepetdekiler,favoriler,lastorders,wallets user slice icinde olacak
// pizzasSlice: pizzalar
