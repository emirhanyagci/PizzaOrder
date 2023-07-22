import { ToastContainer, toast } from "react-toastify";
import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar, UserDrawer } from "../layouts";

import { useEffect } from "react";

function Main() {
  useEffect(() => {
    toast.success("Succesfully Login", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="flex justify-between h-screen">
        <NavBar />
        <div className=" bg-gray-700 overflow-y-scroll w-full">
          <Outlet />
        </div>
        <UserDrawer />
      </div>
    </>
  );
}

export default Main;
