import { Outlet, useNavigate } from "react-router-dom";
import { NavBar, UserDrawer } from "../layouts";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUser } from "../store/userSlice";
import Spinner from "../components/Spinner";
function Main() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.isLoged) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
      setIsUserLogin(true);
    } else {
      navigate("/login", { replace: true });
    }
  }, [user.isLoged]);
  return (
    <>
      {!isUserLogin ? (
        <Spinner />
      ) : (
        <div className="flex justify-between h-screen">
          <NavBar />
          <div className="overflow-y-scroll w-full h-screen py-10 relative">
            <Outlet />
          </div>
          <UserDrawer />
        </div>
      )}
    </>
  );
}

export default Main;
