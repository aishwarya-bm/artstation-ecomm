import axios from "axios";
import { Toast } from "../components";
import {
  addToCart,
  deleteFromCart,
  incrementCartItem,
} from "./cartitem-actions";

const getWishlistItems = async (isLoggedIn, dispatchWishlist, navigate) => {
  if (isLoggedIn) {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchWishlist({
          type: "GET_WISHLIST_ITEMS",
          payload: response.data.wishlist,
        });
      } else {
        Toast({
          message: "Some error occured, please try again later.",
          type: "error",
        });
      }
    } catch (err) {
      Toast({
        message: "Some error occured, please try again later.",
        type: "error",
      });
    }
  } else {
    navigate("/signup");
    Toast({
      message: "Please login to continue",
      type: "warning",
    });
  }
};

const addToWishList = async (
  isLoggedIn,
  product,
  dispatchWishlist,
  navigate
) => {
  if (isLoggedIn) {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (response.status === 201) {
        dispatchWishlist({
          type: "ADD_TO_WISHLIST",
          payload: response.data.wishlist,
        });
        Toast({
          message: "Item added to wishlist.",
          type: "success",
        });
      } else {
        Toast({
          message: "Some error occured, please try again later.",
          type: "error",
        });
      }
    } catch (err) {
      Toast({
        message: "Some error occured, please try again later.",
        type: "error",
      });
    }
  } else {
    navigate("/signup");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

const removeFromWishlist = async (
  isLoggedIn,
  product,
  dispatchWishlist,
  navigate
) => {
  if (isLoggedIn) {
    const path = `/api/user/wishlist/${product._id}`;
    try {
      const response = await axios.delete(path, {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchWishlist({
          type: "REMOVE_FROM_WISHLIST",
          payload: response.data.wishlist,
        });
        Toast({
          message: "Item removed from wishlist.",
          type: "success",
        });
      } else {
        Toast({
          message: "Some error occured, please try again later.",
          type: "error",
        });
      }
    } catch (err) {
      Toast({
        message: "Some error occured, please try again later.",
        type: "error",
      });
    }
  } else {
    navigate("/signup");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

const addWishlistItemToCart = (
  isLoggedIn,
  product,
  cart,
  dispatchCart,
  dispatchWishlist,
  navigate
) => {
  if (isLoggedIn) {
    if (cart.find(p => p._id === product._id)) {
      incrementCartItem(true, product, dispatchCart);
    } else {
      addToCart(true, product, dispatchCart, navigate);
    }
    removeFromWishlist(true, product, dispatchWishlist, navigate);
  } else {
    navigate("/signup");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

const moveItemFromCartToWishlist = (
  isLoggedIn,
  product,
  wishlist,
  dispatchCart,
  dispatchWishlist,
  navigate
) => {
  if (isLoggedIn) {
    deleteFromCart(true, product, dispatchCart);
    if (!wishlist.find(p => p._id === product._id)) {
      addToWishList(true, product, dispatchWishlist, navigate);
    }
  } else {
    navigate("/signup");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

export {
  addToWishList,
  addWishlistItemToCart,
  getWishlistItems,
  removeFromWishlist,
  moveItemFromCartToWishlist,
};
