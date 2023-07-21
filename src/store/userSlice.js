import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false, //boolean
  email: "", //boolean
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.isLogin = true;
      state.email = action.payload.email;
    },
  },
});
export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
