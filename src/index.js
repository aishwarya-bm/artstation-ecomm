import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProductsProvider } from "./contexts/filter-context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProductsProvider>
        <App/>
        </FilterProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
