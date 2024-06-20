import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StoreProvider } from "./contexts/Store";
import { lazy } from "react";

// const Home = ;
// const Detail = lazy(() => import("./pages/detail"));

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./pages/home"),
  },
  {
    path: "/detail",
    lazy: () => import("./pages/detail"),
  },
]);

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
