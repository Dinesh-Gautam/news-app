import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATHS } from "./constants";

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    lazy: () => import("./pages/home"),
  },
  {
    path: PATHS.DETAIL,
    lazy: () => import("./pages/detail"),
  },
  {
    path: PATHS.FAVORITES,
    lazy: () => import("./pages/favorites"),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
