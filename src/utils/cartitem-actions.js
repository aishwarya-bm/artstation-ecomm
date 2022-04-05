import axios from "axios";
import {Toast} from "../components";

const addToCart = async (product, dispatchCart,navigate) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      }
    );
    if (response.status === 201) {
      dispatchCart({ type: "ADD_TO_CART", payload: response.data.cart });
      Toast({
        message: "Item added to cart.",
        type: "success",
      });
    }
  } catch (e) {
    if (!localStorage.getItem("userToken")) {
      navigate("/signup");
      Toast({
        message: "Please login to continue.",
        type: "warning",
      });
    }
  }
};

const incrementCartItem = async (product, dispatchCart) => {
  const path = `/api/user/cart/${product._id}`;
  try {
    const response = await axios.post(
      path,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      }
    );
    if (response.status === 200) {
      dispatchCart({ type: "INCREMENT_ITEM", payload: response.data.cart });
      Toast({
        message: "Item quantity modified.",
        type: "success",
      });
    }
  } catch (e) {
    Toast({
        message: "Please login to continue.",
        type: "warning",
      });
  }
};

const decrementCartItem = async (product, dispatchCart) => {
  const path = `/api/user/cart/${product._id}`;
  try {
    const response = await axios.post(
      path,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      }
    );
    if (response.status === 200) {
      dispatchCart({ type: "DECREMENT_ITEM", payload: response.data.cart });
      Toast({
        message: "Item quantity modified.",
        type: "success",
      });
    }
  } catch (e) {
    Toast({
        message: "Please login to continue.",
        type: "warning",
      });
  }
};

const deleteFromCart = async (product, dispatchCart) => {
  const path = `/api/user/cart/${product._id}`;
  try {
    const response = await axios.delete(path, {
      headers: {
        authorization: localStorage.getItem("userToken"),
      },
    });
    if (response.status === 200) {
      dispatchCart({ type: "REMOVE_ITEM", payload: response.data.cart });
      Toast({
        message: "Item removed from cart.",
        type: "success",
      });
    }
  } catch (err) {
    Toast({
        message: "Please login to continue.",
        type: "warning",
      });
  }
};

const getCartItems = async (dispatchCart,navigate) => {
    let response;
    try {
      response = await axios.get("/api/user/cart", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });

      if (response.status === 200) {
        dispatchCart({type:"GET_CART_ITEMS",payload:response.data.cart})
        console.log("fetched cart")
      } else {
        navigate("/signup");
        Toast({
        message: "Please login to continue.",
        type: "warning",
      });
      }
    } catch (err) {
      console.log("Request failed with error",err)
    }
    
  };

export { addToCart, incrementCartItem, decrementCartItem, deleteFromCart,getCartItems };
