import LoginForm from "./LoginForm";
import useAuth from "../hooks/useAuth.js";
function ReAuth() {
  const { reSignIn } = useAuth();
  function reAuthHandler(e, email, password) {
    e.preventDefault();
    console.log(email, password);
    reSignIn(email, password);
    console.log(email, password);
  }
  return (
    <div>
      <LoginForm onSubmitHandler={reAuthHandler} />
    </div>
  );
}

export default ReAuth;
