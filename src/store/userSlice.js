import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
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
    toggleShowModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});
export const { setUser, toggleShowModal } = userSlice.actions;
export default userSlice.reducer;
