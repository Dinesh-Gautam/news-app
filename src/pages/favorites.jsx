import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Error from "../components/Error";
import Favorites from "../components/Favorites";

export function Component() {
  return <Favorites />;
}

export function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? (
    <Error message={`${error.status} ${error.statusText}`} />
  ) : (
    <Error />
  );
}
