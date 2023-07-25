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
} from "firebase/firestore";
import app from "../service/firebase";
import { toastHandler, firebaseErrorConverter } from "../utils/helper";

const db = getFirestore(app);
// eslint-disable-next-line no-unused-vars
const [SUCCESS, ERROR, WARN, INFO] = ["success", "error", "warn", "info"];
export default function useFirestore() {
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
  async function getPizzas() {
    const querySnapshot = await getDocs(collection(db, "pizza"));
    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        pizza: doc.data(),
      };
    });
  }
  async function getPizza(pizzaId) {
    const pizza = await getDoc(doc(db, "pizza", pizzaId));
    return pizza.data();
  }
  async function getFavorites(uid) {
    const user = await getDoc(doc(db, "users", uid));
    return user.data().favorites;
  }
  async function addToFavorite(uid, pizzaId) {
    await updateDoc(doc(db, "users", uid), {
      favorites: arrayUnion(pizzaId),
    });
  }
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
  };
}

// pizza data example = {
//     name:'PEPPERONI',
//     star:3,
//     price:20,
//     image:'https://sdsdsd'
// }
