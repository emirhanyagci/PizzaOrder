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
  wallets: [],
  selectedWallet: null,
  orderHistory: [],
};
// example wallets object item => {
// cardId
// currentBalance,
// deadDate:{
//   month,
//   year
// },
// cardNumber
// }
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
    },
    removeFavorite(state, action) {
      const decrementedFavorite = state.favorites.filter((item) => {
        return item !== action.payload;
      });
      state.favorites = decrementedFavorite;
    },
    addCreditCard(state, action) {
      state.wallets.push(action.payload);
      state.selectedWallet = state.wallets[0];
    },

    removeCreditCard(state, action) {
      const decremenWallets = state.wallets.filter((item) => {
        return item !== action.payload;
      });
      state.wallets = decremenWallets;
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
  addCreditCard,
  removeCreditCard,
} = userSlice.actions;
export default userSlice.reducer;
