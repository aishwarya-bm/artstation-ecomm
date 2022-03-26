import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProductsProvider } from "./contexts/filter-context/filter-context";
import { LoginProvider } from "./contexts/login-context/login-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoginProvider>
      <FilterProductsProvider>
        <App/>
      </FilterProductsProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
