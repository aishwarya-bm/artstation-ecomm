import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../components/header/Header";
import {
  addWishlistItemToCart,
  getWishlistItems,
  removeFromWishlist,
} from "../../utils/wishlist-actions";
import { useCart, useWishlist } from "../../contexts/index-context";
import "./wishlist.css";

export default function Wishlist() {
  const { stateWishlist, dispatchWishlist } = useWishlist();
  const { stateCart, dispatchCart } = useCart();
  const navigate = useNavigate();
  useEffect(() => getWishlistItems(dispatchWishlist, navigate), []);
  return (
    <>
      <Header />
      <div className="wishlist-container">
        <h3 className="text-center">My wishlist</h3>
        <ul className="product-wishlist list-no-bullet d-grid grid-gap">
          {stateWishlist.wishlist &&
            stateWishlist.wishlist?.map(product => {
              return (
                <li key={product._id}>
                  <div className="card children-stacked product-card">
                    <div className="card-media wishlist">
                      <a href="./product.html">
                        <img src={product.product_img} alt="card-img" />
                      </a>
                      <button
                        className="far fa-heart btn card-like wishlist-item"
                        onClick={() =>
                          removeFromWishlist(
                            product,
                            dispatchWishlist,
                            navigate
                          )
                        }
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
                        onClick={() =>
                          addWishlistItemToCart(
                            product,
                            stateCart,
                            dispatchCart,
                            dispatchWishlist,
                            navigate
                          )
                        }
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
        stateWishlist.wishlistSize === 0 && (
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
