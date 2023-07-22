import { LuLogOut } from "react-icons/lu";
import NavIcons from "../components/NavIcons";
function NavBar() {
  return (
    <nav className="  flex flex-col justify-between h-screen items-center w-24 py-12">
      <div className="space-y-5 flex items-center flex-col w-full ">
        <NavIcons />
      </div>
      <button>
        <LuLogOut size="1.5rem" />
      </button>
    </nav>
  );
}

export default NavBar;
