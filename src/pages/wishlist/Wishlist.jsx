import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components";
import { useEffect } from "react";
import {
  addWishlistItemToCart,
  removeFromWishlist,
  getWishlistItems,
} from "../../utils/wishlist-actions";
import { useCart, useLogin, useWishlist } from "../../contexts/index-context";
import "./wishlist.css";

export function Wishlist() {
  const { wishlist, dispatchWishlist, wishlistSize } = useWishlist();
  const { cart, dispatchCart } = useCart();
  const { isLoggedIn } = useLogin();
  const navigate = useNavigate();
  useEffect(() => getWishlistItems(isLoggedIn, dispatchWishlist, navigate), []);

  return (
    <>
      <Header showSearchBox={false} />
      {wishlistSize === 0 ? (
        <div className="text-center empty-wishlist">
          <div>Hey, it feels so light! Lets browse some art supplies!</div>
          <div className="d-flex children-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SlfydsMiQ0ZwKRFReUC0KwzuFXVW6P1LZA&usqp=CAU" />
          </div>
          <Link to="/productlist" className="fa fa-solid btn btn-secondary">
            Browse
          </Link>
        </div>
      ) : (
        <>
          <div className="wishlist-container">
            <h3 className="text-center">My wishlist</h3>
            <ul className="product-wishlist list-no-bullet d-grid grid-gap">
              {wishlist &&
                wishlist?.map(product => {
                  return (
                    <li key={product._id}>
                      <div className="card children-stacked product-card">
                        <div className="card-media wishlist">
                          <img src={product.product_img} alt="card-img" />
                          <button
                            className="far fa-heart btn card-like wishlist-item"
                            onClick={() =>
                              removeFromWishlist(
                                isLoggedIn,
                                product,
                                dispatchWishlist,
                                navigate
                              )
                            }
                          ></button>
                        </div>
                        <div className="card-header">
                          <div className="card-title">{product.title}</div>
                        </div>
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
                            <i className="fa fa-solid fa-star"></i>{" "}
                            {product.rating}
                          </div>
                        </div>
                        <div className="children-stacked">
                          <button
                            className="fa fa-shopping-cart btn btn-secondary"
                            onClick={() =>
                              addWishlistItemToCart(
                                isLoggedIn,
                                product,
                                cart,
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
        </>
      )}
    </>
  );
}
