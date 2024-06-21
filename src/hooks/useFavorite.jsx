import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../state/favoriteSlice";

function useFavorite() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  function addToFavorites(id, data) {
    dispatch(addFavorite({ id, data }));
  }

  function removeFromFavorites(id) {
    dispatch(removeFavorite(id));
  }

  function isFavorite(id) {
    return id in favorites;
  }

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
}

export default useFavorite;
