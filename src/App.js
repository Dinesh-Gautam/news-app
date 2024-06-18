import Home from "./pages/home";
import "./styles/App.css";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { StoreProvider } from "./contexts/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <StoreProvider>
      <main>
        <RouterProvider router={router}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </RouterProvider>
      </main>
    </StoreProvider>
  );
}

export default App;
