import { ToastContainer, toast } from "react-toastify";
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
      <div>MAIN</div>
    </>
  );
}

export default Main;
