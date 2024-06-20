import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StoreProvider } from "./contexts/Store";
import { lazy } from "react";

const Home = lazy(() => import("./pages/home"));
const Detail = lazy(() => import("./pages/detail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
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
