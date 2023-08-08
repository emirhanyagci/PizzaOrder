import ItemCartMini from "./ItemCartMini";
import { memo } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
const ShoppingCard = memo(function ShoppingCard() {
  const shoppingCard = useSelector((state) => state.user.shoppingCard);
  const item = useRef();
  return (
    <div ref={item} className="space-y-3 h-full overflow-y-auto">
      <div>
        <span className="text-xl text-titleGray">Order Menu</span>
      </div>
      {shoppingCard.length > 0 ? (
        shoppingCard.map((card) => (
          <ItemCartMini
            key={crypto.randomUUID()}
            pizzaId={card.pizzaId}
            amount={card.amount}
          />
        ))
      ) : (
        <div className="flex justify-center text-xl text-red-500">No item</div>
      )}
    </div>
  );
});

export default ShoppingCard;
// use memo
