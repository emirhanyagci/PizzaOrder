import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../store/userSlice";
import SectionTitle from "../components/SectionTitle";
import PizzaCart from "../components/PizzaCart";
import Spinner from "../components/Spinner";
import useFirestore from "../hooks/useFirestore";
import { LuAlertCircle } from "react-icons/lu";
function Favorite() {
  const { getPizza, getFavorites, removeFromFavorite } = useFirestore();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const statePizza = useSelector((state) => state.pizza.pizzas);
  useEffect(() => {}, []);
  if (state.favorites.length === 0) {
    getFavorites().then((favorites) => {
      favorites.forEach((favorite) => {
        console.log(statePizza);
        // conditional them id for same if same add to favorite section
      });
    });
  }
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
        {state.favorites.length !== 0 ? (
          state.favorites.map(({ id, pizza }) => {
            return (
              <PizzaCart
                onFavoriteHandler={removeFromFavorite}
                pizzaId={id}
                key={id}
                pizza={pizza}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Favorite;
// todo : 0 item varken goster
// todo : favoride olan itemi ekleyemesin
// todo : remove ederkenki bekleme asamasinda boxin icine spinner ekle
// useri initalize etme silerken favorite kismini sil
