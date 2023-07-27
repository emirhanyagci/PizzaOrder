import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../store/userSlice";
import SectionTitle from "../components/SectionTitle";
import PizzaCart from "../components/PizzaCart";
import Spinner from "../components/Spinner";
import useFirestore from "../hooks/useFirestore";
function Favorite() {
  const { getFavorites, removeFromFavorite } = useFirestore();
  const [isFavoriteFetched, setIsFavoriteFetched] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const pizza = useSelector((state) => state.pizza);
  useEffect(() => {
    getFavorites().then((favorites) => {
      favorites.forEach((favoriteId) => {
        dispatch(addFavorite(favoriteId));
      });
      setIsFavoriteFetched(true);
    });
  }, []);

  // useEffect(() => {
  //   if (state.favorites.length === 0) {
  //     getFavorites().then((favorites) => {
  //       favorites.forEach((favorite) => {
  //         getPizza(favorite).then((res) => {
  //           dispatch(addFavorite(res));
  //         });
  //       });
  //     });
  //   }
  // }, []);
  return (
    <div>
      <SectionTitle>Favorites</SectionTitle>
      <div className="flex flex-wrap gap-5">
        {isFavoriteFetched ? (
          pizza.pizzas?.map(({ id, pizza }) =>
            user.favorites.includes(id) ? (
              <PizzaCart
                onFavoriteHandler={removeFromFavorite}
                key={id}
                pizzaId={id}
                pizza={pizza}
              />
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
// todo : remove ederkenki bekleme asamasinda boxin icine spinner ekle
