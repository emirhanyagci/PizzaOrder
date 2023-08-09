import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false, // boolean
  isLoged: false, //boolean
  isCardFetching: false,
  email: null, //string
  uid: null, //string
  name: null, //string
  photoURL: null, //string
  shoppingCard: [],
  shoppingPrice: 0,
  favorites: [],
  wallets: [],
  selectedWallet: null,
  orderHistory: [],
};

// const shoppingCard =  {
//   pizzaId:'',
//   amount:0

// }
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
    setIsCardFetching(state, action) {
      state.isCardFetching = action.payload;
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
    setCreditCards(state, action) {
      state.wallets = action.payload.reverse();
      state.selectedWallet = state.wallets[0];
    },

    removeCreditCard(state, action) {
      const decrementWallets = state.wallets.filter((item) => {
        return item.cartId !== action.payload.cartId;
      });
      state.wallets = decrementWallets;
      state.selectedWallet = state.wallets[0];
    },
    unSetUser() {
      return initialState;
    },
    toggleShowModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    addToShoppingCard(state, action) {
      for (let i = 0; i < state.shoppingCard.length; i++) {
        if (state.shoppingCard[i].pizzaId === action.payload) {
          state.shoppingCard[i].amount++;
          return;
        }
      }
      state.shoppingCard.push({ pizzaId: action.payload, amount: 1 });
    },
    decreaseFromShoppingCard(state, action) {
      state.shoppingCard.forEach((card, index) => {
        if (action.payload === card.pizzaId && card.amount === 1) {
          state.shoppingCard.splice(index, 1);
        } else if (action.payload === card.pizzaId) {
          card.amount--;
        }
      });
    },
    incrementShoppingPrice(state, action) {
      state.shoppingPrice += action.payload;
    },
    decreaseShoppingPrice(state, action) {
      state.shoppingPrice -= action.payload;
    },
    resetShoppingCard(state) {
      state.shoppingCard = [];
      state.shoppingPrice = 0;
    },
  },
});
export const {
  setUser,
  setIsCardFetching,
  addFavorite,
  removeFavorite,
  unSetUser,
  toggleShowModal,
  addCreditCard,
  removeCreditCard,
  setCreditCards,
  addToShoppingCard,
  incrementShoppingPrice,
  decreaseShoppingPrice,
  decreaseFromShoppingCard,
  resetShoppingCard,
} = userSlice.actions;

export default userSlice.reducer;
