import { FaMinus } from "react-icons/fa";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { decreaseFromShoppingCard } from "../store/userSlice.js";
function ItemCartMini({ pizzaId, amount }) {
  const pizzaList = useSelector((state) => state.pizza.pizzas);
  const dispatch = useDispatch();
  return (
    <>
      {pizzaList.map(({ pizza, id }) =>
        id === pizzaId ? (
          <div
            key={id}
            className="flex justify-between items-center bg-white px-5 py-2 rounded-xl"
          >
            <div className="flex items-center space-x-3 font-bold">
              <Button
                onClickHandler={() =>
                  dispatch(decreaseFromShoppingCard(pizzaId))
                }
              >
                <FaMinus color="red" />
              </Button>
              <img src={pizza.image} width="64px" alt="" />
              <div className="flex flex-col">
                <span>{pizza.name}</span>
                <span>
                  <span className="text-amber-500">x</span> {amount}
                </span>
              </div>
            </div>
            <div className="font-medium text-xl">{pizza.price * amount}$</div>
          </div>
        ) : null
      )}
    </>
  );
}

export default ItemCartMini;
