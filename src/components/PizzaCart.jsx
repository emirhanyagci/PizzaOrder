import Spinner from "./Spinner";
import Stars from "./Stars";
import Button from "./Button";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "/tailwind.config.js";
import { setBounceInBasket } from "../store/animationSlice";
import { useDispatch } from "react-redux";
import { addToShoppingCard, incrementShoppingPrice } from "../store/userSlice";

function PizzaCart({ pizza, pizzaId, onFavoriteHandler }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const fullConfig = resolveConfig(tailwindConfig);
  function onFavorite() {
    setIsLoading(true);
    onFavoriteHandler(pizzaId).then(() => {
      setIsLoading(false);
    });
  }

  function addToShoppingCardHandler() {
    dispatch(setBounceInBasket(true));
    dispatch(incrementShoppingPrice(pizza.price));
    dispatch(addToShoppingCard(pizzaId));
  }
  return (
    <div className="inline-block  p-5 w-48 rounded-lg border-secondary-400 border-[1px] relative">
      {isLoading ? (
        <Spinner size="70px" />
      ) : (
        <div className="flex flex-col space-y-1">
          <button onClick={onFavorite} className="absolute left-0 top-0 p-2">
            <BsBookmarkPlus
              size="1.5rem"
              color={fullConfig.theme.colors.secondary[500]}
              fill="orange"
            />
          </button>
          <img
            src={pizza.image}
            className="aspect-square w-32 border-secondary-500 border-2 object-cover  rounded-full self-center"
            alt=""
          />
          <span className="font-bold text-lg">{pizza.name}</span>
          <div className="flex justify-between items-center">
            <div className="">
              <Stars amount={pizza.star} />
              <span className="text-xl font-bold"> {pizza.price} $</span>
            </div>
            <div>
              <Button
                onClickHandler={addToShoppingCardHandler}
                className="bg-secondary-500 p-3 transition-all rounded-full hover:bg-secondary-400"
              >
                <AiOutlinePlus />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PizzaCart;
