import axios from "axios";

const addToCart = async (product, dispatchCart) => {
  let response;
  try {
    response = await axios.post(
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
    }
  } catch (e) {
    if (!localStorage.getItem("userToken")) {
      navigate("/signup");
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
    }
  } catch (e) {
    console.log("Please login to continue", err);
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
    }
  } catch (e) {
    console.log("Please login to continue", err);
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
    }
  } catch (err) {
    console.log("Please login to continue", err);
  }
};

export { addToCart, incrementCartItem, decrementCartItem, deleteFromCart };
