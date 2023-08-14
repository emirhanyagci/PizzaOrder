import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../store/userSlice";
import SectionTitle from "../components/SectionTitle";
import PizzaCart from "../components/PizzaCart";
import Spinner from "../components/Spinner";
import useFirestore from "../hooks/useFirestore";
function Favorite() {
  const { getFavorites } = useFirestore();
  const [isFavoriteFetched, setIsFavoriteFetched] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const pizza = useSelector((state) => state.pizza);
  useEffect(() => {
    if (user.favorites.length === 0) {
      getFavorites().then((favorites) => {
        favorites.forEach((favoriteId) => {
          dispatch(addFavorite(favoriteId));
        });
        setIsFavoriteFetched(true);
      });
    } else {
      setIsFavoriteFetched(true);
    }
  }, []);

  return (
    <div>
      <SectionTitle>Favorites</SectionTitle>
      <div className="flex flex-wrap gap-5">
        {isFavoriteFetched ? (
          pizza.pizzas?.map(({ id, pizza }) =>
            user.favorites.includes(id) ? (
              <PizzaCart key={id} pizzaId={id} pizza={pizza} />
            ) : null
          )
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Favorite;
