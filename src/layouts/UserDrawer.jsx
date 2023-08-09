import Spinner from "../components/Spinner";
import ProfileBar from "../components/ProfileBar";
import CreditCard from "../components/CreditCard";
import ShoppingCard from "../components/ShoppingCard";
import Button from "../components/Button";
import { IoIosArrowForward } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowModal } from "../store/userSlice";
import useFirestore from "../hooks/useFirestore";
import { useState } from "react";
function UserDrawer() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.user.isModalOpen);
  const selectedCart = useSelector((state) => state.user.selectedWallet);
  const shoppingPrice = useSelector((state) => state.user.shoppingPrice);
  const { decreaseCardAmount } = useFirestore();
  const [isLoading, setIsLoading] = useState(false);
  function toggleModal() {
    dispatch(toggleShowModal());
  }
  function decreaseCardAmountHandler() {
    setIsLoading(true);
    decreaseCardAmount(shoppingPrice).then(() => {
      console.log("done");
      setIsLoading(false);
    });
  }
  return (
    <>
      <button onClick={toggleModal} className="absolute right-7 top-7">
        <SlBasket size="20px" />
      </button>
      <div
        className={`w-full h-screen translate-x-0 absolute right-0 flex flex-col transition-all duration-300 justify-between py-5 px-10 bg-primary/90 sm:w-[360px]  ${
          !isModalOpen ? "translate-x-[40rem] " : ""
        }`}
      >
        <div className="space-y-8 h-full flex flex-col overflow-auto">
          <div className="flex justify-between">
            <button onClick={toggleModal}>
              <IoIosArrowForward size="20px" />
            </button>
            <ProfileBar />
          </div>
          {selectedCart ? (
            <>
              <CreditCard
                cartId={selectedCart.cartId}
                currentBalance={selectedCart.currentBalance}
                cartNumber={selectedCart.cartNumber}
                lastDate={selectedCart.lastDate}
                editable={false}
              />
              {isLoading ? <Spinner size={"40px"} /> : null}
            </>
          ) : null}

          <ShoppingCard />
        </div>
        <div className="space-y-2">
          <div className="text-xl">Total: {shoppingPrice}$</div>
          <Button
            onClickHandler={decreaseCardAmountHandler}
            className="bg-secondary-500 w-full py-3 rounded-full text-white font-medium"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
}

export default UserDrawer;
