import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail,
  onAuthStateChanged,
  signOut as signOutHandler,
  updatePassword as updateUserPassword,
} from "firebase/auth";
import { firebaseErrorConverter, toastHandler } from "../utils/helper";
import { useDispatch } from "react-redux";
import { setUser, unSetUser } from "../store/userSlice";
import useFirestore from "./useFirestore";
import app from "../service/firebase";
import { useEffect } from "react";
import { openModal } from "../utils/toggleModal";
const auth = getAuth(app);

// eslint-disable-next-line no-unused-vars
const [SUCCESS, ERROR, WARN, INFO] = ["success", "error", "warn", "info"];

export default function useAuth() {
  const dispatch = useDispatch();
  const { initializeUser } = useFirestore();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        // ...
      } else {
        // User is not signed in.
        // ...
      }
    });
    return () => {
      unsub;
    };
  }, []);

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
          initializeUser(userCredential.user.uid);
          toastHandler(SUCCESS, "Successfully login");
          resolve(userCredential);
        })
        .catch((error) => {
          toastHandler(ERROR, firebaseErrorConverter(error).code);

          reject(firebaseErrorConverter(error));
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
              name: userCredential.user.displayName,
              photoURL: userCredential.user.photoURL,
            })
          );
          toastHandler(SUCCESS, "Succesfully login");
          resolve(userCredential);
        })
        .catch((error) => {
          toastHandler(ERROR, firebaseErrorConverter(error).code);

          reject(firebaseErrorConverter(error));
        });
    });
  }
  function signOut() {
    signOutHandler(auth).then(() => {
      localStorage.removeItem("user");
      toastHandler(SUCCESS, "Successfully logout ");
      dispatch(unSetUser());
    });
  }
  function getUser() {
    return auth.currentUser;
  }
  function updateDisplayName(displayName) {
    return new Promise((resolve, reject) => {
      updateProfile(auth.currentUser, { displayName })
        .then(() => {
          const user = auth.currentUser;
          dispatch(
            setUser({
              name: user.displayName,
            })
          );

          toastHandler(SUCCESS, "Successfully changed ");
          resolve(true);
        })
        .catch((error) => {
          toastHandler(ERROR, firebaseErrorConverter(error).code);
          reject(firebaseErrorConverter(error));
        });
    });
  }
  function updateEmailAddress(email) {
    return new Promise((resolve, reject) => {
      updateEmail(auth.currentUser, email)
        .then((res) => {
          toastHandler(SUCCESS, "Successfully changed ");
          resolve(res);
        })
        .catch((error) => {
          toastHandler(ERROR, firebaseErrorConverter(error).code);
          reject(firebaseErrorConverter(error));
        });
    });
  }
  function updatePassword(password) {
    openModal("re-auth");
    return;
    return new Promise((resolve, reject) => {
      updateUserPassword(auth.currentUser, password)
        .then((res) => {
          toastHandler(SUCCESS, "Successfully changed ");
          resolve(res);
        })
        .catch((error) => {
          if (error.code === "auth/requires-recent-login") {
          }
          toastHandler(ERROR, firebaseErrorConverter(error).code);
          reject(firebaseErrorConverter(error));
        });
    });
  }
  function updatePhotoUrl(photoURL) {
    return new Promise((resolve, reject) => {
      updateProfile(auth.currentUser, { photoURL })
        .then((res) => {
          const user = auth.currentUser;
          dispatch(
            setUser({
              photoURL: user.photoURL,
            })
          );
          toastHandler(SUCCESS, "Successfully changed ");
          resolve(res);
        })
        .catch((error) => {
          toastHandler(ERROR, firebaseErrorConverter(error).code);
          reject(firebaseErrorConverter(error));
        });
    });
  }
  return {
    signUp,
    signIn,
    getUser,
    updateDisplayName,
    updateEmailAddress,
    updatePassword,
    updatePhotoUrl,
    signOut,
  };
}
