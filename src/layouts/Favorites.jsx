import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../store/userSlice";
import SectionTitle from "../components/SectionTitle";
import PizzaCart from "../components/PizzaCart";
import Spinner from "../components/Spinner";
import useFirestore from "../hooks/useFirestore";
function Favorite() {
  const { getPizza, getFavorites } = useFirestore();
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.favorites.length <= 0) {
      getFavorites(state.uid).then((favorites) => {
        favorites.forEach((favorite) => {
          getPizza(favorite).then((res) => {
            dispatch(addFavorite(res));
          });
        });
      });
    }
  }, []);
  console.log(state.favorites);
  return (
    <div>
      <SectionTitle>Favorites</SectionTitle>
      {state.favorites.length !== 0 ? (
        state.favorites.map((pizza, index) => {
          return <PizzaCart key={index} pizza={pizza} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Favorite;
