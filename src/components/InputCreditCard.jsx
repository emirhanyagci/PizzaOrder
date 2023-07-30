import { useReducer } from "react";
import Button from "../components/Button";
import useFirestore from "../hooks/useFirestore";
const cartInitialState = {
  cartId: crypto.randomUUID(),
  currentBalance: 0,
  cartNumber: "",
  lastDate: {
    month: 0,
    year: 0,
  },
};
function InputCreditCard({ setShowModalHandler }) {
  const [cart, dispatch] = useReducer(cartReducer, cartInitialState);
  const { addToCards } = useFirestore();
  const todayYear = new Date().getFullYear();

  return (
    <form className="space-y-3">
      <div className="relative h-36 bg-gradient-to-t from-cardGray-dark to-cardGray-light w-full p-5 shadow-slate-900 shadow-md flex flex-col justify-between rounded-2xl text-white">
        <div className="flex justify-between">
          <div className="flex flex-col w-4/6">
            <span className="text-lightGray">Current Balance :</span>
            <input
              className="text-lg font-medium px-3 py-1 bg-transparent border-white border-[1px] valid:border-green-400"
              value={cart.currentBalance}
              onChange={(e) => {
                dispatch({ type: "currentBalance", payload: e.target.value });
              }}
              type="number"
              min="0"
              required
            />
          </div>
          <div>
            <img src="/public/mc_symbol.svg" width="56px" alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <input
            className="text-md w-4/6 font-medium px-3  bg-transparent border-white border-[1px] valid:border-green-400"
            type="text"
            value={cart.cartNumber}
            onChange={(e) => {
              dispatch({ type: "cartNumber", payload: e.target.value });
            }}
            minLength="16"
            maxLength="16"
            required
          />
          <input
            className="text-md w-6 font-medium text-center bg-transparent border-white border-[1px] valid:border-green-500"
            type="number"
            value={cart.lastDate.month}
            onChange={(e) => {
              dispatch({ type: "month", payload: e.target.value });
            }}
            min="1"
            max="12"
            required
          />
          /
          <input
            className="text-md w-6 font-medium text-center bg-transparent border-white border-[1px] valid:border-green-500"
            type="number"
            value={cart.lastDate.year}
            onChange={(e) => {
              dispatch({ type: "year", payload: e.target.value });
            }}
            min={String(todayYear).slice(2, 4)}
            max="99"
            required
          />
        </div>
      </div>
      <Button
        type="submit"
        onClickHandler={() =>
          dispatch({
            type: "submit",
            payload: { addToCards, setShowModalHandler },
          })
        }
        className="bg-secondary-500 text-white w-full py-2 rounded-2xl hover:bg-secondary-400"
      >
        Submit
      </Button>
    </form>
  );
}

function cartReducer(state, action) {
  switch (action.type) {
    case "currentBalance":
      return {
        ...state,
        currentBalance: action.payload,
      };
    case "cartNumber":
      return {
        ...state,
        cartNumber: action.payload,
      };
    case "month":
      return {
        ...state,
        lastDate: {
          ...state.lastDate,
          month: action.payload,
        },
      };
    case "year":
      return {
        ...state,
        lastDate: {
          ...state.lastDate,
          year: action.payload,
        },
      };
    case "submit":
      action.payload.addToCards(state).then(() => {
        action.payload.setShowModalHandler(false);
      });
      return cartInitialState;
    default:
      return state;
  }
}
export default InputCreditCard;
