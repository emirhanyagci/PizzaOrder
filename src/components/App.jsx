import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddPizza from "../pages/AddPizza";
import MainPage from "../pages/MainPage";
import { Home, Wallets, Favorites, OrderHistory, Settings } from "../layouts";
import { useSelector } from "react-redux";
import Modal from "./Modal";
function App() {
  const { open } = useSelector((state) => state.modal);
  return (
    <div className="">
      <ToastContainer />
      {open ? <Modal open={open} /> : null}
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index path="/home" element={<Home />}></Route>
          <Route path="/wallets" element={<Wallets />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/order-history" element={<OrderHistory />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="add-pizza" element={<AddPizza />}></Route>
      </Routes>
    </div>
  );
}

export default App;
