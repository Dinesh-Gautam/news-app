import React, { useState } from "react";

function getSearchParams() {
  const search = window.location.search;
  return new URLSearchParams(search);
}

function useSearchParams() {
  const [searchParams, setSearchParams] = useState();
}

export default useSearchParams;
