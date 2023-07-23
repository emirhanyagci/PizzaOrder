import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false, // boolean
  isLoged: false, //boolean
  email: null, //string
  uid: null, //string
  name: null, //string
  photoUrl: null, //string
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLoged = true;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.name = action.payload.name;
      state.photoUrl = action.payload.photoUrl || null;
      localStorage.setItem("user", JSON.stringify(state));
    },
    unSetUser() {
      localStorage.removeItem("user");
      return initialState;
    },
    toggleShowModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});
export const { setUser, unSetUser, toggleShowModal } = userSlice.actions;
export default userSlice.reducer;
