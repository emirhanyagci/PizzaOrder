import Button from "./Button";
import { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { useSelector } from "react-redux";
function CreditCard({
  cartId,
  currentBalance,
  cartNumber,
  lastDate,
  editable = true,
}) {
  const { selectSelectedCart, removeFromCards } = useFirestore();
  const [showOption, setShowOption] = useState(false);
  const wallets = useSelector((state) => state.user.wallets);
  return (
    <div
      className="relative [&>div]:rounded-2xl text-white"
      onMouseEnter={() => (editable ? setShowOption(true) : null)}
      onMouseLeave={() => (editable ? setShowOption(false) : null)}
    >
      <div className=" bg-gradient-to-t h-36 from-cardGray-dark to-cardGray-light w-full  p-5 shadow-slate-900 shadow-md flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-lightGray">Current Balance :</span>
            <span className="text-2xl font-medium">
              {parseInt(currentBalance, 10)}$
            </span>
          </div>
          <div>
            <img src="/public/mc_symbol.svg" width="56px" alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="">{cartNumber}</span>
          <span>
            {parseInt(lastDate.month, 10)}/{lastDate.year}
          </span>
        </div>
      </div>
      {showOption ? (
        <div className="w-full py-3">
          <Button
            onClickHandler={() => {
              selectSelectedCart({
                cartId,
                currentBalance,
                cartNumber,
                lastDate,
              });
            }}
            className="w-1/2 bg-secondary-500 rounded-tl-md rounded-bl-md py-1"
            disabled={wallets[0].cartId === cartId}
          >
            Select
          </Button>
          <Button
            onClickHandler={() => {
              removeFromCards({
                cartId,
                currentBalance,
                cartNumber,
                lastDate,
              });
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
