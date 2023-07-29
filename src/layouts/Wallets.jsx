import CreditCard from "../components/CreditCard";
import InputCreditCard from "../components/InputCreditCard";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { addCreditCard } from "../store/userSlice";
import { useState, useEffect } from "react";
import useFirestore from "../hooks/useFirestore";
function Wallets() {
  const wallets = useSelector((state) => state.user.wallets);
  const dispatch = useDispatch();
  const { getCards } = useFirestore();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    getCards().then((res) => {
      res.forEach((cart) => {
        dispatch(addCreditCard(cart));
      });
    });
  }, []);
  return (
    <div className="h-[2500px] ">
      <ul className="flex flex-wrap gap-5">
        {wallets.map(({ cartId }) => (
          <li key={cartId} className="w-64">
            <CreditCard />
          </li>
        ))}

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
