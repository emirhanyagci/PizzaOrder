import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainPage from "../pages/MainPage";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoged) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
