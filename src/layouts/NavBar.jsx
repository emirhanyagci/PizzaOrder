import { LuLogOut } from "react-icons/lu";
import NavIcons from "../components/NavIcons";
import useAuth from "../hooks/useAuth";

function NavBar() {
  const { signOut } = useAuth();
  return (
    <nav className="  flex flex-col justify-between h-[100svh] items-center w-28 py-10">
      <div className="space-y-5 flex items-center flex-col w-full ">
        <NavIcons />
      </div>
      <button onClick={signOut}>
        <LuLogOut size="1.5rem" />
      </button>
    </nav>
  );
}

export default NavBar;
