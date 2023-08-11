import Button from "./Button";
import { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { useSelector } from "react-redux";
function CreditCard({
  cardId,
  currentBalance,
  cardNumber,
  lastDate,
  editable = true,
}) {
  const { selectSelectedCard, removeFromCards } = useFirestore();
  const [showOption, setShowOption] = useState(false);
  const wallets = useSelector((state) => state.user.wallets);
  return (
    <>
      <div
        className="relative [&>div]:rounded-2xl text-white"
        onMouseEnter={() => (editable ? setShowOption(true) : null)}
        onMouseLeave={() => (editable ? setShowOption(false) : null)}
      >
        <div className=" bg-gradient-to-t h-36 from-cardGray-dark to-cardGray-light w-full  p-5 shadow-slate-900 shadow-md flex flex-col justify-between">
          {showOption ? (
            <div className="w-full h-full flex items-center py-3">
              <Button
                onClickHandler={() => {
                  selectSelectedCard({
                    cardId,
                    currentBalance,
                    cardNumber,
                    lastDate,
                  });
                }}
                className="w-1/2 bg-secondary-500 rounded-tl-md rounded-bl-md py-1"
                disabled={wallets[0].cardId === cardId}
              >
                Select
              </Button>
              <Button
                onClickHandler={() => {
                  removeFromCards({
                    cardId,
                    currentBalance,
                    cardNumber,
                    lastDate,
                  });
                }}
                className="w-1/2 py-1"
              >
                Remove
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between w-full">
                <div className="flex flex-col w-3/4">
                  <div className="text-lightGray">Current Balance :</div>
                  <div
                    className={`  font-medium break-words ${
                      currentBalance.length > 20 ? "text-sm" : "text-2xl"
                    } `}
                  >
                    {parseInt(currentBalance, 10)}$
                  </div>
                </div>
                <div className="w-1/4">
                  <img src="/mc_symbol.svg" className="!w-14 " alt="" />
                </div>
              </div>
              <div className="flex justify-between">
                <span className="">{cardNumber}</span>
                <span>
                  {parseInt(lastDate.month, 10)}/{lastDate.year}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CreditCard;
