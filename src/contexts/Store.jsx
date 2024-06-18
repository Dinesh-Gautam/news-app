import { createContext, useContext } from "react";

const stateContext = createContext();

export const useStore = () => useContext(stateContext);

// const initialState = {
//   searchParams: {
//     keyword: "",
//     category: "",
//   },
// };

export function StoreProvider({ children }) {
  // let [searchParams, setSearchParams] = useSearchParams();

  // const values = {
  //   searchParams,
  //   setSearchParams,
  // };

  return <stateContext.Provider value={{}}>{children}</stateContext.Provider>;
}
