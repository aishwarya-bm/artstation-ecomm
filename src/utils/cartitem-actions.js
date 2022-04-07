import axios from "axios";
import { Toast } from "../components";

const addToCart = async (isLoggedIn, product, dispatchCart, navigate) => {
  if (isLoggedIn) {
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
      } else {
        Toast({
          message: "Some error occured, please try again later.",
          type: "error",
        });
      }
    } catch (e) {
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

const incrementCartItem = async (isLoggedIn, product, dispatchCart) => {
  if (isLoggedIn) {
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
      } else {
        Toast({
          message: "Some error occured, please try again later.",
          type: "error",
        });
      }
    } catch (e) {
      Toast({
        message: "Some error occured, please try again later.",
        type: "error",
      });
    }
  } else {
    navigate("/");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

const decrementCartItem = async (isLoggedIn, product, dispatchCart) => {
  if (isLoggedIn) {
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
      } else {
        Toast({
          message: "Some error occured, please try again later.",
          type: "error",
        });
      }
    } catch (e) {
      Toast({
        message: "Some error occured, please try again later.",
        type: "error",
      });
    }
  } else {
    navigate("/");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

const deleteFromCart = async (isLoggedIn, product, dispatchCart) => {
  if (isLoggedIn) {
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
    navigate("/");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

const getCartItems = async (isLoggedIn, dispatchCart, navigate) => {
  if (isLoggedIn) {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });

      if (response.status === 200) {
        dispatchCart({ type: "GET_CART_ITEMS", payload: response.data.cart });
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

export {
  addToCart,
  incrementCartItem,
  decrementCartItem,
  deleteFromCart,
  getCartItems,
};
