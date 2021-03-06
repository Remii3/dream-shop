import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/scss/__globals.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter basename="/dream-shop">
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
