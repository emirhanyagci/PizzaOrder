import { Outlet, useNavigate } from "react-router-dom";
import { NavBar, UserDrawer } from "../layouts";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUser, setCreditCards, setIsCardFetching } from "../store/userSlice";
import { setPizzas } from "../store/pizzaSlice";
import Spinner from "../components/Spinner";
import useFirestore from "../hooks/useFirestore";

function Main() {
  const { getPizzas, getCards } = useFirestore();
  const [isUserLogin, setIsUserLogin] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.isLoged == true) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
      setIsUserLogin(true);
      navigate("/home", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
    // second check reason : when i dispatch user for store store is not being updated so some functions like getCards need uid for request can't acces to uid because store not updated yet because of this we are checking store isLoged for requests
    if (user.isLoged) {
      getPizzas().then((res) => {
        dispatch(setPizzas(res));
      });
      dispatch(setIsCardFetching(true));
      getCards().then((res) => {
        dispatch(setCreditCards(res));
        dispatch(setIsCardFetching(false));
      });
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
