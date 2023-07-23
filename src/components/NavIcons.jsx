import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { HiOutlineChat } from "react-icons/hi";
import { BsBookmarkStar } from "react-icons/bs";
import { LiaWalletSolid } from "react-icons/lia";
import { TfiReceipt } from "react-icons/tfi";

const linkStyle = {
  padding: "0.75rem",
  borderRadius: "100%",
  transition: "all 300ms",
};
const linkIsActive = ({ isActive }) => {
  return isActive ? "active-nav" : "";
};
function NavIcons() {
  return (
    <>
      <NavLink to="/home" style={linkStyle} className={linkIsActive}>
        {({ isActive }) => (
          <AiOutlineHome size="1.5rem" color={isActive ? "white" : ""} />
        )}
      </NavLink>

      <button disabled style={linkStyle}>
        <HiOutlineChat size="1.5rem" color="gray" />
      </button>
      <NavLink to="/wallets" style={linkStyle} className={linkIsActive}>
        {({ isActive }) => (
          <LiaWalletSolid size="1.5rem" color={isActive ? "white" : ""} />
        )}
      </NavLink>
      <NavLink to="/favorites" style={linkStyle} className={linkIsActive}>
        {({ isActive }) => (
          <BsBookmarkStar size="1.5rem" color={isActive ? "white" : ""} />
        )}
      </NavLink>
      <NavLink to="/order-history" style={linkStyle} className={linkIsActive}>
        {({ isActive }) => (
          <TfiReceipt size="1.5rem" color={isActive ? "white" : ""} />
        )}
      </NavLink>
      <NavLink to="/settings" style={linkStyle} className={linkIsActive}>
        {({ isActive }) => (
          <AiOutlineSetting size="1.5rem" color={isActive ? "white" : ""} />
        )}
      </NavLink>
    </>
  );
}

export default NavIcons;
