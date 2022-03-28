import { createContext } from "react";
import { useContext, useReducer } from "react";
import { wishlistReducer } from "./wishlist-reducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [stateWishlist, dispatchWishlist] = useReducer(wishlistReducer, {
    wishlist: [],
    wishlistSize: 0,
  });
  return (
    <>
      <WishlistContext.Provider
        value={{
          wishlist: stateWishlist.wishlist,
          dispatchWishlist,
          wishlistSize: stateWishlist.wishlistSize,
        }}
      >
        {children}
      </WishlistContext.Provider>
    </>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
