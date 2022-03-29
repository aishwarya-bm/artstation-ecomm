import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { getCartItems } from "../../utils/cartitem-actions";
import { cartReducer } from "./cart-reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [stateCart, dispatchCart] = useReducer(cartReducer, {
    cart: [],
    cartSize: 0,
    cartPrice: 0,
    cartDiscount: 0,
  });
  const navigate = useNavigate();

  useEffect(() => getCartItems(dispatchCart, navigate), []);
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
