import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import app from "../service/firebase";

const auth = getAuth(app);

export default function useAuth() {
  const dispatch = useDispatch();
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          setUser({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
          })
        );
        return userCredential;
      })
      .catch((error) => {
        return {
          code: error.code,
          message: error.message,
        };
      });
  }
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          setUser({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
          })
        );
        console.log(userCredential.user);
      })
      .catch((error) => {
        return {
          code: error.code,
          message: error.message,
        };
      });
  }
  return { signUp, signIn };
}
