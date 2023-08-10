import PizzaCart from "../components/PizzaCart";
import SectionTitle from "../components/SectionTitle";
import useFirestore from "../hooks/useFirestore";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
function Home() {
  const state = useSelector((state) => state.pizza);
  const { addToFavorite } = useFirestore();

  return (
    <div>
      <SectionTitle>Home</SectionTitle>
      <div className="flex flex-wrap gap-5 ">
        {state.pizzas.length === 0 ? (
          <Spinner />
        ) : (
          state.pizzas?.map(({ id, pizza }) => (
            <PizzaCart
              onFavoriteHandler={addToFavorite}
              key={id}
              pizzaId={id}
              pizza={pizza}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
