import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import AuthContainer from "./AuthContainer";
import LoginForm from "./LoginForm";
function Login() {
  const { signIn } = useAuth();

  const navigate = useNavigate();
  function signInHandler(e, email, password) {
    e.preventDefault();
    signIn(email, password).then(() => {
      navigate("/home", { state: { name: "emirr" } });
    });
  }

  return (
    <AuthContainer>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
        Sign in to your account
      </h1>
      <LoginForm onSubmitHandler={signInHandler}></LoginForm>
      <p className="text-sm font-light text-gray-500 ">
        Don’t have an account yet?{" "}
        <Link
          to="/register"
          className="font-medium text-amber-600 hover:underline "
        >
          Sign up
        </Link>
      </p>
    </AuthContainer>
  );
}

export default Login;
