import React from "react";
import { Articles } from "../components/Articles";
import { Header } from "../components/header/Header";

import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Error from "../components/Error";

export function Component() {
  return (
    <>
      <Header />
      <main>
        <Articles />
      </main>
    </>
  );
}

export function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? (
    <h1>
      <Error message={`${error.status} ${error.statusText}`} />
    </h1>
  ) : (
    <Error />
  );
}
