import { useEffect } from "react";
import PizzaCart from "../components/PizzaCart";
import SectionTitle from "../components/SectionTitle";
import useFirestore from "../hooks/useFirestore";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { setPizzas } from "../store/pizzaSlice";
function Home() {
  const state = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  const { getPizzas } = useFirestore();

  useEffect(() => {
    if (state.pizzas?.length <= 0) {
      getPizzas().then((res) => {
        dispatch(setPizzas(res));
      });
    }
  }, []);

  return (
    <div className="">
      <SectionTitle>Home</SectionTitle>
      <div className="flex flex-wrap gap-5 ">
        {state.pizzas.length === 0 ? (
          <Spinner size={"30px"} />
        ) : (
          state.pizzas?.map(({ id, pizza }) => (
            <PizzaCart key={id} pizza={pizza} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
