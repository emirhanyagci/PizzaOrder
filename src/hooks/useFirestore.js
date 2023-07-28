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
import { addFavorite, removeFavorite } from "../store/userSlice";
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
  async function addToFavorite(pizzaId) {
    await updateDoc(doc(db, "users", state.uid), {
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
  async function removeFromFavorite(pizzaId) {
    await updateDoc(doc(db, "users", state.uid), {
      favorites: arrayRemove(pizzaId),
    }).then(() => {
      dispatch(removeFavorite(pizzaId));
    });
  }
  async function getCards() {
    const user = await getDoc(doc(db, "users", state.uid));
    return user.data()?.wallets;
  }
  async function addToCards(cardId) {
    await updateDoc(doc(db, "users", state.uid), {
      wallets: arrayUnion(cardId),
    }).then(() => {
      // dispatch(addFavorite(cardId));
    });
  }
  async function removeFromCards(cardId) {
    await updateDoc(doc(db, "users", state.uid), {
      wallets: arrayRemove(cardId),
    }).then(() => {
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
    removeFromCards,
    removeFromFavorite,
  };
}

// pizza data example = {
//     name:'PEPPERONI',
//     star:3,
//     price:20,
//     image:'https://sdsdsd'
// }
