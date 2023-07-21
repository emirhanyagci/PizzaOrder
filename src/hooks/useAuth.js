import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/userSlice";
import app from "../service/firebase";

const auth = getAuth(app);

export default function useAuth() {
  const dispatch = useDispatch();
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(loginUser({ email }));
        return userCredential;
      })
      .catch((error) => {
        return error;
      });
  }
  return { signUp };
}
