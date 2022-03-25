import Header from "../../components/header/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  decrementCartItem,
  deleteFromCart,
  incrementCartItem,
  moveFromCartToWishlist,
} from "../../utils/cart-actions.js";
import "./cart.css";
import CartPrice from "../../components/cartprice/CartPrice";

export default function Cart() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header />
      <div className="cart-container d-flex">
        <div className="cart-items">
          <h3 className="text-center">My Cart</h3>
          <ul className="list-no-bullet d-grid grid-gap">
            {cart?.map(({ product }) => {
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
                        <i className="fa fa-solid fa-star"></i> {product.rating}
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
                        {product.qty !== 1 && (
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
        {cart.length > 0 && <CartPrice />}
      </div>

      {localStorage.getItem("userToken") ? (
        cart.length === 0 && (
          <div className="text-center">
            <div>Hey, it feels so light! Lets add some items</div>
            <Link to="/" className="fa fa-solid btn btn-secondary">
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
