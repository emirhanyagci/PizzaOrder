import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function ProfileBar() {
  const state = useSelector((state) => state.user);
  return (
    <Link to="/settings">
      <div className="flex justify-between">
        <div className="flex items-center space-x-3 justify-end ">
          <img
            className="rounded-full"
            src={state.photoURL}
            width="44px"
            alt=""
          />
          <span className="font-medium ">
            {!state.name ? "Set name" : state.name}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProfileBar;
