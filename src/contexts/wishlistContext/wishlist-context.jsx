import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getWishlistItems } from "../../utils/wishlist-actions";
import { wishlistReducer } from "./wishlist-reducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [stateWishlist, dispatchWishlist] = useReducer(wishlistReducer, {
    wishlist: [],
    wishlistSize: 0,
  });
  const navigate = useNavigate();
  useEffect(() => getWishlistItems(dispatchWishlist, navigate), []);
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
