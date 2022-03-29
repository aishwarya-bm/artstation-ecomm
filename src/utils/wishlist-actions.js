import axios from "axios";
import Toast from "../components/toast/Toast";
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
      console.log("Request failed with error",err)
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
        Toast({
        message: "Item added to wishlist.",
        type: "success",
      });
      }
      else{
          navigate("/signup")
          Toast({
        message: "Please login to continue.",
        type: "warning",
      });
      }
    } catch (err) {
     navigate("/signup")
     Toast({
        message: "Please login to continue.",
        type: "warning",
      });
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
        Toast({
        message: "Item removed from wishlist.",
        type: "success",
      });
      }
      else{
       
          navigate("/signup");
           Toast({
        message: "Please login to continue.",
        type: "warning",
      });
         
      }
    } catch (err) {
      navigate("/signup");
      Toast({
        message: "Please login to continue.",
        type: "warning",
      });
    }
  };

  const addWishlistItemToCart = (product,cart,dispatchCart,dispatchWishlist,navigate) => {
    if (cart.find(p => p._id === product._id)) {
      incrementCartItem(product, dispatchCart)       
    } else {
      addToCart(product, dispatchCart,navigate)
    }
    removeFromWishlist(product,dispatchWishlist,navigate);
  };

  const moveItemFromCartToWishlist = (product,wishlist,dispatchCart,dispatchWishlist,navigate) => {
    deleteFromCart(product, dispatchCart)
    if (!wishlist.find(p => p._id === product._id)) {
      addToWishList(product,dispatchWishlist,navigate);
    }
  };

  export {addToWishList,addWishlistItemToCart,getWishlistItems,removeFromWishlist,
    moveItemFromCartToWishlist }