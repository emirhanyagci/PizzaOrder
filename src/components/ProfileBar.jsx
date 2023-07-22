import { Link } from "react-router-dom";
function ProfileBar() {
  return (
    <Link to="/settings">
      <div className="flex justify-between">
        <div className="flex items-center space-x-3 justify-end ">
          <img src="/public/user (1).png" width="44px" alt="" />
          <span className="font-medium ">Emirhan</span>
        </div>
      </div>
    </Link>
  );
}

export default ProfileBar;
