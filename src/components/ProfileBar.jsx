import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function ProfileBar() {
  const state = useSelector((state) => state.user);
  console.log(state.email);
  return (
    <Link to="/settings">
      <div className="flex justify-between">
        <div className="flex items-center space-x-3 justify-end ">
          <img
            className="rounded-full h-11 w-11 object-cover"
            src={state.photoURL}
            alt=""
          />
          <span className="font-medium ">
            {!state.name
              ? state.email?.substring(0, state.email.lastIndexOf("@"))
              : state.name}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProfileBar;
