function CreditCard() {
  return (
    <div className="relative h-36 [&>div]:rounded-2xl text-white">
      <div className="bg-gradient-to-t from-cardGray-dark to-cardGray-light w-full z-30 absolute top-0 h-full p-5 shadow-slate-900 shadow-md flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-lightGray">Current Balance :</span>
            <span className="text-2xl font-medium">459$</span>
          </div>
          <div>
            <img src="/public/mc_symbol.svg" width="56px" alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="">3782 8224 6310 0025</span>
          <span>08/28</span>
        </div>
      </div>
      {/*main card modal*/}
    </div>
  );
}

export default CreditCard;
