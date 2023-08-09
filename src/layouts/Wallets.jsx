import CreditCard from "../components/CreditCard";
import InputCreditCard from "../components/InputCreditCard";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import { useSelector } from "react-redux";
import { useState } from "react";
function Wallets() {
  const wallets = useSelector((state) => state.user.wallets);
  const isCardFetching = useSelector((state) => state.user.isCardFetching);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <SectionTitle>Wallets</SectionTitle>
      {isCardFetching ? (
        <Spinner />
      ) : (
        <ul className="flex flex-wrap gap-5">
          {wallets.map(({ cartId, currentBalance, cartNumber, lastDate }) => (
            <li key={cartId} className="w-64">
              <CreditCard
                cartId={cartId}
                currentBalance={currentBalance}
                cartNumber={cartNumber}
                lastDate={lastDate}
              />
            </li>
          ))}

          <li className="w-64 space-y-2">
            {showModal ? (
              <div className="w-64">
                <InputCreditCard setShowModalHandler={setShowModal} />
              </div>
            ) : null}
            <Button
              onClickHandler={() => {
                setShowModal(!showModal);
              }}
              className={`bg-secondary-500 text-white w-full py-2 h-36  rounded-2xl hover:bg-secondary-400 ${
                showModal ? "h-auto" : null
              }`}
            >
              {showModal ? "Cancel" : "Add New Cart"}
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Wallets;
//todo: remove functionality
//todo: favorite wallet functionality
//todo: loading animation
//todo: trim start zeros like 012 => 12
