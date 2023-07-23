import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firebaseErrorConverter } from "../utils/helper";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import app from "../service/firebase";

const auth = getAuth(app);

export default function useAuth() {
  const dispatch = useDispatch();
  function signUp(email, password) {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch(
            setUser({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
            })
          );
          resolve(userCredential);
        })
        .catch((error) => {
          reject(reject(firebaseErrorConverter(error)));
        });
    });
  }
  function signIn(email, password) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch(
            setUser({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
            })
          );
          resolve(userCredential);
        })
        .catch((error) => {
          reject(firebaseErrorConverter(error));
        });
    });
  }
  function getUser() {
    return auth.currentUser;
  }
  function updateDisplayName(displayName) {
    return new Promise((resolve, reject) => {
      updateProfile(auth.currentUser, { displayName })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(firebaseErrorConverter(error));
        });
    });
  }
  return { signUp, signIn, getUser, updateDisplayName };
}
