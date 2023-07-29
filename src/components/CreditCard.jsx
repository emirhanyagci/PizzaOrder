import Button from "./Button";
import { useState } from "react";
import useFirestore from "../hooks/useFirestore";
function CreditCard({ cartId, currentBalance, cartNumber, lastDate }) {
  const { selectSelectedCart, removeFromCards } = useFirestore();
  const [showOption, setShowOption] = useState(false);
  return (
    <div
      className="relative h-36 [&>div]:rounded-2xl text-white"
      onMouseEnter={() => setShowOption(true)}
      onMouseLeave={() => setShowOption(false)}
    >
      <div className=" bg-gradient-to-t from-cardGray-dark to-cardGray-light w-full h-full p-5 shadow-slate-900 shadow-md flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-lightGray">Current Balance :</span>
            <span className="text-2xl font-medium">{currentBalance}$</span>
          </div>
          <div>
            <img src="/public/mc_symbol.svg" width="56px" alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="">{cartNumber}</span>
          <span>
            {lastDate.month}/{lastDate.year}
          </span>
        </div>
      </div>
      {showOption ? (
        <div className="w-full py-3">
          <Button
            onClickHandler={() => {
              selectSelectedCart(cartId);
            }}
            className="w-1/2 bg-secondary-500 rounded-tl-md rounded-bl-md py-1"
          >
            Select
          </Button>
          <Button
            onClickHandler={() => {
              removeFromCards(cartId);
            }}
            className="w-1/2 bg-cardGray-light rounded-tr-md rounded-br-md py-1"
          >
            Remove
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default CreditCard;
