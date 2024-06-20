import React, { Suspense } from "react";
import { Articles } from "../components/Articles";
import { Header } from "../components/Header";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../components/Error";

function Home() {
  return (
    <>
      <Header />
      <main>
        <ErrorBoundary
          onError={(error, info) => console.error(error, info)}
          fallback={<Error />}
        >
          <Articles />
        </ErrorBoundary>
      </main>
    </>
  );
}

function LazyHome() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}

export default LazyHome;
