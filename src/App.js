import Home from "./pages/home";
import "./styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StoreProvider } from "./contexts/Store";
import Detail from "./pages/detail";

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
