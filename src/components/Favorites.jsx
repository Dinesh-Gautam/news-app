import React from "react";
import useFavorite from "../hooks/useFavorite";
import { Article } from "./Article";
import { Layout } from "./Layout";
import { Header } from "./header/Header";

function Favorites() {
  const { favorites } = useFavorite();
  const articles = Object.values(favorites);

  return (
    <>
      <Header>
        <h1>Favorites</h1>
      </Header>
      <main>
        <Layout.FlexContainer>
          {articles.map(({ data }) => (
            <Article key={data.uri} {...data} />
          ))}
        </Layout.FlexContainer>
      </main>
    </>
  );
}

export default Favorites;
