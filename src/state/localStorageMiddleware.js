import { FAVORITE_LS_KEY } from "../constants";
import { saveToLocalStorage } from "../utils/localStorage";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  saveToLocalStorage(FAVORITE_LS_KEY, state.favorites);
  return result;
};

export default localStorageMiddleware;
