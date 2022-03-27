import { calculateDiscount, calculatePrice } from "../../utils/cart-checkout";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET_CART_ITEMS":
      return {
        cart: action.payload,
        cartSize:
          action.payload.length > 0
            ? action.payload.reduce((acc, curr) => acc + Number(curr.qty), 0)
            : 0,
        cartPrice: calculatePrice(action.payload),
        cartDiscount: calculateDiscount(action.payload),
      };

    case "ADD_TO_CART":
      return {
        cart: action.payload,
        cartSize: Number(state.cartSize) + 1,
        cartPrice: calculatePrice(action.payload),
        cartDiscount: calculateDiscount(action.payload),
      };
    case "INCREMENT_ITEM":
      return {
        cartSize: Number(state.cartSize) + 1,
        cart: action.payload,
        cartPrice: calculatePrice(action.payload),
        cartDiscount: calculateDiscount(action.payload),
      };
    case "DECREMENT_ITEM":
      return {
        cartSize: Number(state.cartSize) - 1,
        cart: action.payload,
        cartPrice: calculatePrice(action.payload),
        cartDiscount: calculateDiscount(action.payload),
      };
    case "REMOVE_ITEM":
      return {
        cart: action.payload,
        cartSize:
          action.payload.length > 0
            ? action.payload.reduce((acc, curr) => acc + Number(curr.qty), 0)
            : 0,
        cartPrice: calculatePrice(action.payload),
        cartDiscount: calculateDiscount(action.payload),
      };
    case "RESET_CART":
      return {
        cart: [],
        cartSize: 0,
        cartPrice: 0,
        cartDiscount: 0,
      };
  }
};
