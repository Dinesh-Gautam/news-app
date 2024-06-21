import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./pages/home"),
  },
  {
    path: "/detail",
    lazy: () => import("./pages/detail"),
  },
  {
    path: "/favorites",
    lazy: () => import("./pages/favorites"),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
