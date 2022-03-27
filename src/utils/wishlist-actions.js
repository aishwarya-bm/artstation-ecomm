import axios from "axios";
import { addToCart, deleteFromCart, incrementCartItem } from "./cartitem-actions";

const getWishlistItems = async (dispatchWishlist,navigate) => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchWishlist({type:"GET_WISHLIST_ITEMS", payload:response.data.wishlist})
      } else {
        navigate("/signup");
      }
    } catch (err) {
      console.log("Please login to continue", err);
    }
  };

const addToWishList = async (product,dispatchWishlist,navigate) => {
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
        dispatchWishlist({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist });
      }
      else{
          navigate("/")
      }
    } catch (err) {
     console.log("Please login to continue", err);
     navigate("/")
    }
  };

const removeFromWishlist = async (product,dispatchWishlist,navigate) => {
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
      }
      else{
          navigate("/");
      }
    } catch (err) {
      console.log("Please login to continue",err)
    }
  };

  const addWishlistItemToCart = (product,stateCart,dispatchCart,dispatchWishlist,navigate) => {
    if (stateCart.cart.find(p => p._id === product._id)) {
      incrementCartItem(product, dispatchCart)       
    } else {
      addToCart(product, dispatchCart,navigate)
    }
    removeFromWishlist(product,dispatchWishlist,navigate);
  };

  const moveItemFromCartToWishlist = (product,stateWishlist,dispatchCart,dispatchWishlist,navigate) => {
    deleteFromCart(product, dispatchCart)
    if (!stateWishlist.wishlist.find(p => p._id === product._id)) {
      addToWishList(product,dispatchWishlist,navigate);
    }
  };

  export {addToWishList,addWishlistItemToCart,getWishlistItems,removeFromWishlist,
    moveItemFromCartToWishlist }