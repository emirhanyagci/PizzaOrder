import { Outlet } from "react-router-dom";
import { NavBar, UserDrawer } from "../layouts";

function Main() {
  return (
    <>
      <div className="flex justify-between h-screen">
        <NavBar />
        <div className="overflow-y-scroll w-full h-screen py-10">
          <Outlet />
        </div>
        <UserDrawer />
      </div>
    </>
  );
}

export default Main;
