import React from "react";
import { Articles } from "../components/Articles";
import { Header } from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Articles />
      </main>
    </>
  );
}

export default Home;
