import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CartProvider,LoginProvider,FilterProductsProvider } from "./contexts/index-context";

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
