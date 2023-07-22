import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainPage from "../pages/MainPage";
import { useSelector } from "react-redux";
import { Home, Wallets, Favorites, OrderHistory, Settings } from "../layouts";
function App() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    // if (!user.isLoged) {
    //   navigate("/login");
    // }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/wallets" element={<Wallets />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/order-history" element={<OrderHistory />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
