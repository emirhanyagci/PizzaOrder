import LoginForm from "./LoginForm";
function ReAuth() {
  function reAuthHandler(e, email, password) {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <div>
      <LoginForm onSubmitHandler={reAuthHandler} />
    </div>
  );
}

export default ReAuth;
