import CreditCard from "../components/CreditCard";
import InputCreditCard from "../components/InputCreditCard";
import Button from "../components/Button";
import { useState } from "react";
function Wallets() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-[2500px] ">
      <ul className="flex flex-wrap gap-5">
        <li className="w-64">
          <CreditCard />
        </li>
        <li className="w-64">
          <CreditCard />
        </li>
        <li className="w-64">
          <CreditCard />
        </li>
        <li className="w-64">
          <CreditCard />
        </li>
        <li className="w-64 space-y-2">
          {showModal ? (
            <div className="w-64">
              <InputCreditCard />
            </div>
          ) : null}
          <Button
            onClickHandler={() => {
              setShowModal(!showModal);
            }}
            className="bg-secondary-500 text-white w-full py-2 rounded-2xl hover:bg-secondary-400"
          >
            {showModal ? "Cancel" : "Add New Cart"}
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Wallets;
