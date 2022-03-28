import { createContext, useContext } from "react";
import { useReducer } from "react";
import { cartReducer } from "./cart-reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [stateCart, dispatchCart] = useReducer(cartReducer, {
    cart: [],
    cartSize: 0,
    cartPrice: 0,
    cartDiscount: 0,
  });

  return (
    <>
      <CartContext.Provider
        value={{
          cart: stateCart.cart,
          cartSize: stateCart.cartSize,
          dispatchCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
