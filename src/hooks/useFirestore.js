import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../service/firebase";
import { toastHandler, firebaseErrorConverter } from "../utils/helper";

const db = getFirestore(app);
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
  return addPizza;
}

// pizza data example = {
//     name:'PEPPERONI',
//     star:3,
//     price:20,
//     image:'https://sdsdsd'
// }
