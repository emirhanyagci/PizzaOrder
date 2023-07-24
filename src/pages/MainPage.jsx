import { Outlet, useNavigate } from "react-router-dom";
import { NavBar, UserDrawer } from "../layouts";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../store/userSlice";

function Main() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.isLoged) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    } else {
      navigate("/login", { replace: true });
    }
  }, [user]);
  return (
    <>
      <div className="flex justify-between h-screen">
        <NavBar />
        <div className="overflow-y-scroll w-full h-screen py-10">
          <Outlet />
        </div>
        <UserDrawer />
      </div>
    </>
  );
}

export default Main;
