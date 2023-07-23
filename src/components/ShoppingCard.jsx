import ItemCartMini from "./ItemCartMini";

function ShoppingCard() {
  return (
    <div className="space-y-3">
      <div>
        <span className="text-xl">Order Menu</span>
      </div>
      <ItemCartMini />
    </div>
  );
}

export default ShoppingCard;
