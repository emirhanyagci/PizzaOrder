import Stars from "./Stars";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "/tailwind.config.js";

function PizzaCart() {
  const fullConfig = resolveConfig(tailwindConfig);
  console.log(fullConfig.theme.colors.secondary[500]);
  return (
    <div className="inline-block  p-5 w-48 rounded-lg border-secondary-400 border-[1px] relative">
      <button className="absolute left-0 top-0 p-2">
        <BsBookmarkPlus
          size="1.5rem"
          color={fullConfig.theme.colors.secondary[500]}
          fill="orange"
        />
      </button>
      <div className="flex flex-col space-y-1 ">
        <img
          src="https://cdn.discordapp.com/attachments/427023030418538499/1133032646235131975/Pepperoni-Pizza_7.webp"
          className="aspect-square w-32 border-secondary-500 border-2 object-cover  rounded-full self-center"
          alt=""
        />
        <span className="font-bold text-lg">Pepperoni</span>
        <div className="flex justify-between items-center">
          <div className="">
            <Stars amount="4" />
            <span className="text-xl font-bold"> 22 $</span>
          </div>
          <div>
            <Button className="bg-secondary-500 p-3 rounded-full">
              <AiOutlinePlus />
            </Button>
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaCart;