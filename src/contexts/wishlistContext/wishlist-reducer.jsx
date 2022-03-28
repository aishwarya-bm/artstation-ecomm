const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "GET_WISHLIST_ITEMS":
      return {
        wishlist: action.payload,
        wishlistSize: action.payload.length,
      };
    case "ADD_TO_WISHLIST":
      return {
        wishlistSize: state.wishlistSize + 1,
        wishlist: action.payload,
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        wishlistSize: state.wishlistSize - 1,
        wishlist: action.payload,
      };

    case "ADD_FROM_WISHLIST_TO_CART":
      return {
        wishlistSize: state.wishlistSize - 1,
        wishlist: action.payload._id,
      };

    case "RESET_WISHLIST":
      return { wishlist: [], wishlistSize: 0 };
  }
};

export { wishlistReducer };
