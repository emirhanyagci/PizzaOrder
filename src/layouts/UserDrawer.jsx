import Spinner from "../components/Spinner";
import ProfileBar from "../components/ProfileBar";
import CreditCard from "../components/CreditCard";
import ShoppingCard from "../components/ShoppingCard";
import Button from "../components/Button";
import { IoIosArrowForward } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowModal } from "../store/userSlice";
import { setBounceInBasket } from "../store/animationSlice";
import useFirestore from "../hooks/useFirestore";
import { useState, useEffect } from "react";
import { useAnimate } from "framer-motion";

function UserDrawer() {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.user.isDrawerOpen);
  const selectedCart = useSelector((state) => state.user.selectedWallet);
  const shoppingPrice = useSelector((state) => state.user.shoppingPrice);
  const bounceInBasket = useSelector((state) => state.animation.bounceInBasket);
  const { decreaseCardAmount } = useFirestore();
  const [isLoading, setIsLoading] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      { scale: [0.6, 1.1, 0.9, 1.03, 0.97, 1] },
      { duration: 0.6 }
    );
    dispatch(setBounceInBasket(false));
  }, [bounceInBasket]);

  function toggleModal() {
    dispatch(toggleShowModal());
  }
  function decreaseCardAmountHandler() {
    setIsLoading(true);
    decreaseCardAmount(shoppingPrice).finally(() => {
      setIsLoading(false);
    });
  }

  return (
    <>
      <button
        ref={scope}
        onClick={toggleModal}
        className="absolute right-7 top-7"
      >
        <SlBasket size="20px" />
      </button>

      <div
        className={`w-full h-screen translate-x-0 absolute right-0 flex flex-col transition-all duration-300 justify-between py-5 px-10 bg-primary/90 sm:w-[360px] ${
          !isDrawerOpen ? "translate-x-[40rem]" : ""
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
                cardId={selectedCart.cardId}
                currentBalance={selectedCart.currentBalance}
                cardNumber={selectedCart.cardNumber}
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
