import { LuLogOut } from "react-icons/lu";
import NavIcons from "../components/NavIcons";
import { unSetUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();
  return (
    <nav className="  flex flex-col justify-between h-screen items-center w-28 py-10">
      <div className="space-y-5 flex items-center flex-col w-full ">
        <NavIcons />
      </div>
      <button
        onClick={() => {
          dispatch(unSetUser());
        }}
      >
        <LuLogOut size="1.5rem" />
      </button>
    </nav>
  );
}

export default NavBar;
