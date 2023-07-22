import { LuLogOut } from "react-icons/lu";
import NavIcons from "../components/NavIcons";
function NavBar() {
  return (
    <div className="  flex flex-col justify-between items-center w-24 py-12">
      <div className="space-y-5 flex items-center flex-col w-full [&>button]:p-3 [&>button]:rounded-full [&>button]:transition-all">
        <NavIcons />
      </div>
      <button>
        <LuLogOut size="1.5rem" />
      </button>
    </div>
  );
}

export default NavBar;
