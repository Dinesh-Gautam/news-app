import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../components/Error";
import { Detail } from "../components/Detail";

function lazyDetail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary
        onError={(error, info) => console.error(error, info)}
        fallback={<Error />}
      >
        <Detail />
      </ErrorBoundary>
    </Suspense>
  );
}

export default lazyDetail;
