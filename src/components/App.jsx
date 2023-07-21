import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

function App() {
  const navigate = useNavigate();
  const user = false;
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
