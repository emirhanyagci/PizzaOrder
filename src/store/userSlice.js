import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoged: false, //boolean
  email: null, //string
  uid: null, //string
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLoged = true;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
