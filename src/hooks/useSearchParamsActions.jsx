import { useSearchParams } from "react-router-dom";

function useSearchParamsActions() {
  const [searchParams, setSearchParams] = useSearchParams();

  function changeParam(key, value) {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  }

  function deleteParam(key) {
    searchParams.delete(key);
    setSearchParams(searchParams);
  }

  function getParam(key) {
    return searchParams.get(key);
  }

  return { changeParam, deleteParam, getParam, searchParams };
}

export default useSearchParamsActions;
