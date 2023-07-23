import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainPage from "../pages/MainPage";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { Home, Wallets, Favorites, OrderHistory, Settings } from "../layouts";
function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.isLoged) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    } else {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="">
      <ToastContainer />

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
