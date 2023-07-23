import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false, // boolean
  isLoged: false, //boolean
  email: null, //string
  uid: null, //string
  name: null, //string
  photoURL: null, //string
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLoged = true;
      state.email = action.payload.email || state.email;
      state.uid = action.payload.uid || state.uid;
      state.name = action.payload.name || state.name;
      state.photoURL = action.payload.photoURL || state.photoURL;
      localStorage.setItem("user", JSON.stringify(state));
    },
    unSetUser() {
      return initialState;
    },
    toggleShowModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});
export const { setUser, unSetUser, toggleShowModal } = userSlice.actions;
export default userSlice.reducer;
