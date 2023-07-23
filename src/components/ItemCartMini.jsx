function ItemCartMini({ name, amount, image, pricePer }) {
  return (
    <div className="flex justify-between items-center bg-white px-5 py-2 rounded-xl">
      <div className="flex items-center space-x-3 font-bold">
        <img src="/public/pizza.png" width="64px" alt="" />
        <div className="flex flex-col">
          <span>The Roman</span>
          <span>
            <span className="text-amber-500">x</span> 2
          </span>
        </div>
      </div>
      <div className="font-medium text-xl">974$</div>
    </div>
  );
}

export default ItemCartMini;
