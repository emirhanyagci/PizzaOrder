function CreditCard({ cartId, currentBalance, cartNumber, lastDate }) {
  console.log(currentBalance);
  return (
    <div className="relative h-36 [&>div]:rounded-2xl text-white">
      <div className="bg-gradient-to-t from-cardGray-dark to-cardGray-light w-full h-full p-5 shadow-slate-900 shadow-md flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-lightGray">Current Balance :</span>
            <span className="text-2xl font-medium">{currentBalance}$</span>
          </div>
          <div>
            <img src="/public/mc_symbol.svg" width="56px" alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="">{cartNumber}</span>
          <span>
            {lastDate.month}/{lastDate.year}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
