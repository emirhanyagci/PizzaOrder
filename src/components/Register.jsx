import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import AuthContainer from "./AuthContainer";
import RegisterForm from "./RegisterForm";
function Register() {
  const { signUp } = useAuth();

  const navigate = useNavigate();

  function signUpHandler(e, email, password) {
    e.preventDefault();
    signUp(email, password).then(() => {
      navigate("/");
    });
  }
  return (
    <AuthContainer>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-3">
        Create and account
      </h1>
      <RegisterForm onSubmitHandler={signUpHandler}></RegisterForm>
    </AuthContainer>
  );
}

export default Register;
