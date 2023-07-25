import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false, // boolean
  isLoged: false, //boolean
  email: null, //string
  uid: null, //string
  name: null, //string
  photoURL: null, //string
  shoppingCard: [],
  favorites: [],
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
    addFavorite(state, action) {
      state.favorites.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state));
    },
    removeFavorite(state, action) {
      const decrementedFavorite = state.favorites.filter((item) => {
        return action.payload.pizza.name !== item.pizza.name;
      });
      state.favorites = decrementedFavorite;
    },
    unSetUser() {
      return initialState;
    },
    toggleShowModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});
export const {
  setUser,
  addFavorite,
  removeFavorite,
  unSetUser,
  toggleShowModal,
} = userSlice.actions;
export default userSlice.reducer;
