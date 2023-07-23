import { toast } from "react-toastify";
import { Outlet } from "react-router-dom";
import { NavBar, UserDrawer } from "../layouts";

import { useEffect } from "react";

function Main() {
  useEffect(() => {
    toast.success("Successfully Login", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }, []);
  return (
    <>
      <div className="flex justify-between h-screen">
        <NavBar />
        <div className="overflow-y-scroll w-full h-screen py-12">
          <Outlet />
        </div>
        <UserDrawer />
      </div>
    </>
  );
}

export default Main;
