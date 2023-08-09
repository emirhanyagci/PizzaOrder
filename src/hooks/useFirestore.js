import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import app from "../service/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  addCreditCard,
  setCreditCards,
  removeCreditCard,
  resetShoppingCard,
} from "../store/userSlice";
import { toastHandler, firebaseErrorConverter } from "../utils/helper";

const db = getFirestore(app);
// eslint-disable-next-line no-unused-vars
const [SUCCESS, ERROR, WARN, INFO] = ["success", "error", "warn", "info"];

export default function useFirestore() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  // adding pizza - (unusable now) will be only admin can add-
  function addPizza(name, star, price, image) {
    addDoc(collection(db, "pizza"), {
      name,
      star,
      price,
      image,
    })
      .then(() => {
        toastHandler(SUCCESS, "Succesfully added");
      })
      .catch((error) => {
        toastHandler(ERROR, firebaseErrorConverter(error).code);
      });
  }
  // get all pizza in pizza doc
  async function getPizzas() {
    const querySnapshot = await getDocs(collection(db, "pizza"));
    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        pizza: doc.data(),
      };
    });
  }
  // get pizza data from id
  async function getPizza(pizzaId) {
    const pizza = await getDoc(doc(db, "pizza", pizzaId));
    return { id: pizzaId, pizza: pizza.data() };
  }
  // fetches all favorites list
  async function getFavorites() {
    const user = await getDoc(doc(db, "users", state.uid));
    return user.data()?.favorites;
  }
  // adding single pizza to favorite
  function addToFavorite(pizzaId) {
    return updateDoc(doc(db, "users", state.uid), {
      favorites: arrayUnion(pizzaId),
    }).then(() => {
      console.log(state.favorites, pizzaId);
      if (!state.favorites.includes(pizzaId)) {
        dispatch(addFavorite(pizzaId));
      } else {
        alert("already in favorite");
      }
    });
  }
  //removing single pizza from favorite
  function removeFromFavorite(pizzaId) {
    return updateDoc(doc(db, "users", state.uid), {
      favorites: arrayRemove(pizzaId),
    }).then(() => {
      dispatch(removeFavorite(pizzaId));
    });
  }
  async function getCards() {
    const user = await getDoc(doc(db, "users", state.uid));
    return user.data()?.wallets;
  }

  function addToCards(card) {
    return updateDoc(doc(db, "users", state.uid), {
      wallets: arrayUnion(card),
    })
      .then(() => {
        dispatch(addCreditCard(card));
        toastHandler(SUCCESS, "Card added");
      })
      .catch((error) => {
        console.log(error);
        toastHandler(SUCCESS, "Failed");
      });
  }
  async function decreaseCardAmount(amount) {
    const selectedCard = state.wallets[0];
    if (selectedCard.currentBalance < amount)
      return toastHandler(ERROR, "insufficient balance");
    const removeCard = updateDoc(doc(db, "users", state.uid), {
      wallets: arrayRemove(selectedCard),
    });
    const decrementedCard = updateDoc(doc(db, "users", state.uid), {
      wallets: arrayUnion({
        ...selectedCard,
        currentBalance: selectedCard.currentBalance - amount,
      }),
    });
    return Promise.all([removeCard, decrementedCard]).then(async () => {
      const updatedCards = await getCards();
      dispatch(setCreditCards(updatedCards));
      dispatch(resetShoppingCard());
      toastHandler(SUCCESS, "We have received your order");
    });
  }
  // logic of selected card => when user select a card 'selectSelectedCard' will remove it card and add again to array then it will be automaticly last item mean is selected card
  async function selectSelectedCard(card) {
    const removePromise = updateDoc(doc(db, "users", state.uid), {
      wallets: arrayRemove(card),
    });

    const addPromise = updateDoc(doc(db, "users", state.uid), {
      wallets: arrayUnion(card),
    });

    Promise.all([removePromise, addPromise]).then(async () => {
      const updatedCards = await getCards();
      dispatch(setCreditCards(updatedCards));
    });
  }
  function removeFromCards(card) {
    updateDoc(doc(db, "users", state.uid), {
      wallets: arrayRemove(card),
    }).then(() => {
      dispatch(removeCreditCard(card));
      // dispatch(removeFavorite(pizzaId));
    });
  }
  // trigger when user signup
  async function initializeUser(uid) {
    await setDoc(doc(db, "users", uid), {
      favorites: [],
      wallets: [],
      orderHistory: [],
    });
  }
  return {
    addPizza,
    getPizzas,
    getPizza,
    addToFavorite,
    getFavorites,
    initializeUser,
    getCards,
    addToCards,
    decreaseCardAmount,
    removeFromCards,
    removeFromFavorite,
    selectSelectedCard,
  };
}

// pizza data example = {
//     name:'PEPPERONI',
//     star:3,
//     price:20,
//     image:'https://sdsdsd'
// }
