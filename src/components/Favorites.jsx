import React from "react";
import useFavorite from "../hooks/useFavorite";

function Favorites() {
  const { favorites } = useFavorite();

  console.log(favorites);
  return <div></div>;
}

export default Favorites;
