import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProductsProvider } from "./contexts/filter-context/filter-context";
import { LoginProvider } from "./contexts/login-context/login-context";
import { CartProvider } from "./contexts/cart-context/cart-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoginProvider>
      <CartProvider>
        <FilterProductsProvider>
          <App/>
        </FilterProductsProvider>
      </CartProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
