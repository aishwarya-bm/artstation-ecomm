import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import CartPrice from "../../components/cartprice/CartPrice";
import { useEffect, useState } from "react";
import { useCart } from "../../contexts/cart-context/cart-context";
import { useLogin } from "../../contexts/login-context/login-context";
import axios from "axios";
import "./cart.css";

export default function Cart() {
  const { stateCart, dispatchCart } = useCart();
  const { stateUser } = useLogin();
  const navigate = useNavigate();

  const deleteFromCart = async product => {
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

  const incrementCartItem = async product => {
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
        console.log("correct status");
        dispatchCart({ type: "INCREMENT_ITEM", payload: response.data.cart });
      }
    } catch (e) {
      console.log("Please login to continue", err);
    }
  };

  const decrementCartItem = async product => {
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
  return (
    <>
      <Header />
      <div className="cart-container d-flex">
        <div className="cart-items">
          <h3 className="text-center">My Cart</h3>
          <ul className="list-no-bullet d-grid grid-gap">
            {stateCart &&
              stateCart.cart?.map(product => {
                return (
                  <li key={product._id}>
                    <div className="card card-hor d-flex">
                      <img
                        className="card-media"
                        src={product.product_img}
                        alt="image"
                      />
                      <div className="card-data children-stacked p-rel">
                        <div className="card-title">{product.title}</div>
                        <span className="product-rating">
                          <i className="fa fa-solid fa-star"></i>{" "}
                          {product.rating}
                        </span>
                        <div className="d-flex grid-gap product-price">
                          <span className="curr-price text-green">
                            ₹{product.curr_price}
                          </span>
                          <span className="prev-price text-linethrough">
                            ₹{product.orig_price}
                          </span>
                        </div>

                        <div className="btn-counter d-flex">
                          {product.qty === 1 ? (
                            <button
                              className="btn btn-link"
                              onClick={() => deleteFromCart(product)}
                            >
                              <i className="fa fa-solid fa-trash"></i>
                            </button>
                          ) : (
                            <button
                              className="btn btn-link"
                              onClick={() => decrementCartItem(product)}
                            >
                              <i className="fa fa-solid fa-minus"></i>
                            </button>
                          )}

                          <input
                            type="number"
                            value={product.qty}
                            onChange={() => {}}
                            className="item-qty text-center"
                          />
                          <button
                            className="btn btn-link"
                            onClick={() => incrementCartItem(product)}
                          >
                            <i className="fa fa-solid fa-plus"></i>
                          </button>
                        </div>
                        <div className="children-stacked grid-gap">
                          <button
                            className="fa fa-solid fa-heart btn btn-secondary"
                            onClick={() => moveFromCartToWishlist(product)}
                          >
                            Move to Wishlist
                          </button>
                          <button
                            className="fa fa-shopping-cart btn btn-light"
                            onClick={() => deleteFromCart(product)}
                          >
                            Remove from cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        {stateCart.cart.length > 0 && <CartPrice />}
      </div>
      {stateUser.isLoggedIn ? (
        stateCart.cartSize === 0 && (
          <div className="text-center">
            <div>Hey, it feels so light! Lets add some items</div>
            <Link to="/productlist" className="fa fa-solid btn btn-secondary">
              Shop now
            </Link>
          </div>
        )
      ) : (
        <div className="text-center">
          Please sign in to continue
          <Link to="/signup" className="fa fa-solid btn btn-secondary">
            LOGIN
          </Link>
        </div>
      )}
    </>
  );
}
