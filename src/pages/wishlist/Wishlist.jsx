import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import {
  addWishlistItemToCart,
  removeFromWishlist,
} from "../../utils/wishlist-actions";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  return (
    <>
      <Header />
      <div className="wishlist-container">
        <h3 className="text-center">My wishlist</h3>
        <ul className="product-wishlist list-no-bullet d-grid grid-gap">
          {wishlist &&
            wishlist?.map(product => {
              return (
                <li>
                  <div className="card children-stacked product-card">
                    <div className="card-media wishlist">
                      <a href="./product.html">
                        <img src={product.product_img} alt="card-img" />
                      </a>
                      <button
                        className="far fa-heart btn card-like wishlist-item"
                        onClick={() => removeFromWishlist(product)}
                      ></button>
                    </div>
                    <a href="./product.html">
                      <div className="card-header">
                        <div className="card-title">{product.title}</div>
                      </div>
                    </a>
                    <div className="card-content d-flex grid-gap">
                      <div>
                        <span className="curr-price">
                          ₹ {product.curr_price}
                        </span>
                        <span className="prev-price text-linethrough">
                          ₹{product.orig_price}
                        </span>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-solid fa-star"></i> {product.rating}
                      </div>
                    </div>
                    <div className="children-stacked">
                      <button
                        className="fa fa-shopping-cart btn btn-secondary"
                        onClick={() => addWishlistItemToCart(product)}
                      >
                        Move to cart
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      {localStorage.getItem("userToken") ? (
        wishlist.length === 0 && (
          <div className="text-center">
            <div>Hey, it feels so light! Lets browse some art supplies!</div>
            <Link to="/" className="fa fa-solid btn btn-secondary">
              Shop now
            </Link>{" "}
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
