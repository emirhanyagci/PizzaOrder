import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../store/userSlice";
import SectionTitle from "../components/SectionTitle";
import PizzaCart from "../components/PizzaCart";
import Spinner from "../components/Spinner";
import useFirestore from "../hooks/useFirestore";
function Favorite() {
  const { getPizza, getFavorites, removeFromFavorite } = useFirestore();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  useEffect(() => {
    if (state.favorites.length === 0) {
      getFavorites().then((favorites) => {
        favorites.forEach((favorite) => {
          getPizza(favorite).then((res) => {
            dispatch(addFavorite(res));
          });
        });
      });
    }
  }, []);
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
// TODO : unfavorite ve favorite with button
// todo : 0 item varken goster
// todo : favoride olan itemi ekleyemesin
