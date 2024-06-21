import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import Nav from "./components/Nav";
import { store } from "./state/store";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav />
      <App />
    </Provider>
  </React.StrictMode>
);
