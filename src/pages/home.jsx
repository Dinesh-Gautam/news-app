import React from "react";
import { Articles } from "../components/Articles";
import { Header } from "../components/header/Header";

import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Error from "../components/Error";
import { CategoryList } from "../components/header/Category";
import { Search } from "../components/header/Search";

export function Component() {
  return (
    <>
      <Header>
        <div>
          <h1>Latest News</h1>
          <CategoryList />
        </div>
        <Search />
      </Header>
      <main>
        <Articles />
      </main>
    </>
  );
}

export function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? (
    <Error message={`${error.status} ${error.statusText}`} />
  ) : (
    <Error />
  );
}
