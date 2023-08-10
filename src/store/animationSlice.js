import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bounceInBasket: false,
};

const animationSlice = createSlice({
  name: "animate",
  initialState,
  reducers: {
    setBounceInBasket(state, action) {
      state.bounceInBasket = action.payload;
    },
  },
});

export const { setBounceInBasket } = animationSlice.actions;
export default animationSlice.reducer;
