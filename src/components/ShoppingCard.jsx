import ItemCartMini from "./ItemCartMini";
import { useRef } from "react";
function ShoppingCard() {
  const item = useRef();
  return (
    <div ref={item} className="space-y-3 h-full overflow-y-auto">
      <div>
        <span className="text-xl text-titleGray">Order Menu</span>
      </div>
      <ItemCartMini />
      <ItemCartMini />
      <ItemCartMini />
      <ItemCartMini />
    </div>
  );
}

export default ShoppingCard;
