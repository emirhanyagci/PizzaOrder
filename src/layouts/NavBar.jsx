import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { HiOutlineChat } from "react-icons/hi";
import { BsBookmarkStar } from "react-icons/bs";
import { LiaWalletSolid } from "react-icons/lia";
import { TfiReceipt } from "react-icons/tfi";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const linkStyle = {
  padding: "0.75rem",
  borderRadius: "100%",
  transition: "all 300ms",
};
const linkIsActive = ({ isActive }) => {
  return isActive ? "active-nav" : "";
};
function NavBar() {
  return (
    <div className="  flex flex-col justify-between items-center w-24 py-12">
      <div className="space-y-5 flex items-center flex-col w-full [&>button]:p-3 [&>button]:rounded-full [&>button]:transition-all">
        <NavLink to="/home" style={linkStyle} className={linkIsActive}>
          <AiOutlineHome size="1.5rem" />
        </NavLink>

        <button disabled style={linkStyle}>
          <HiOutlineChat color="gray" size="1.5rem" />
        </button>
        <NavLink to="/wallets" style={linkStyle} className={linkIsActive}>
          <LiaWalletSolid size="1.5rem" />
        </NavLink>
        <NavLink to="/favorites" style={linkStyle} className={linkIsActive}>
          <BsBookmarkStar size="1.4rem" />
        </NavLink>
        <NavLink to="/order-history" style={linkStyle} className={linkIsActive}>
          <TfiReceipt size="1.5rem" />
        </NavLink>
        <NavLink to="/settings" style={linkStyle} className={linkIsActive}>
          <AiOutlineSetting size="1.5rem" />
        </NavLink>
      </div>
      <button>
        <LuLogOut size="1.5rem" />
      </button>
    </div>
  );
}

export default NavBar;
