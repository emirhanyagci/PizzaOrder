import ProfileBar from "../components/ProfileBar";
import CreditCard from "../components/CreditCard";
import ShoppingCard from "../components/ShoppingCard";
import Button from "../components/Button";
import { IoIosArrowForward } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowModal } from "../store/userSlice";
function UserDrawer() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.user.isModalOpen);
  const selectedCart = useSelector((state) => state.user.selectedWallet);
  function toggleModal() {
    dispatch(toggleShowModal());
  }

  return (
    <>
      <button onClick={toggleModal} className="absolute right-7 top-7">
        <SlBasket size="20px" />
      </button>
      <div
        className={`w-full translate-x-0 absolute right-0 !h-screen flex flex-col transition-all duration-300 justify-between py-5 px-10 bg-primary/90 sm:w-[360px]  ${
          !isModalOpen ? "translate-x-[40rem] " : ""
        }`}
      >
        <div className="space-y-8">
          <div className="flex justify-between">
            <button onClick={toggleModal}>
              <IoIosArrowForward size="20px" />
            </button>
            <ProfileBar />
          </div>
          {selectedCart ? (
            <CreditCard
              cartId={selectedCart.cartId}
              currentBalance={selectedCart.currentBalance}
              cartNumber={selectedCart.cartNumber}
              lastDate={selectedCart.lastDate}
              editable={false}
            />
          ) : null}

          <ShoppingCard />
        </div>
        <div>
          <Button className="bg-secondary-500 w-full py-3 rounded-full text-white font-medium">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
}

export default UserDrawer;
