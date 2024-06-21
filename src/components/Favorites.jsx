import React from "react";
import useFavorite from "../hooks/useFavorite";
import { Article } from "./Article";
import { Layout } from "./Layout";
import { Header } from "./header/Header";
import Nothing from "./Nothing";

function Favorites() {
  const { favorites } = useFavorite();
  const articles = Object.values(favorites);

  if (!articles) return <Nothing message="Nothing in Favorites" />;

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
