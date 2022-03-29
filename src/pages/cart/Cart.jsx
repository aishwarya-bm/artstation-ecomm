import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import CartPrice from "../../components/cartprice/CartPrice";
import { useCart, useLogin, useWishlist } from "../../contexts/index-context";
import "./cart.css";
import {
  decrementCartItem,
  deleteFromCart,
  incrementCartItem,
} from "../../utils/cartitem-actions";
import { moveItemFromCartToWishlist } from "../../utils/wishlist-actions";

export default function Cart() {
  const { cart, cartSize, dispatchCart } = useCart();
  const { stateUser } = useLogin();
  const { wishlist, dispatchWishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <>
      <Header showSearchBox={false} />
      <div className="cart-container d-flex">
        <div className="cart-items">
          <h3 className="text-center">My Cart</h3>
          <ul className="list-no-bullet d-grid grid-gap">
            {cart &&
              cart?.map(product => {
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
                              onClick={() =>
                                deleteFromCart(product, dispatchCart)
                              }
                            >
                              <i className="fa fa-solid fa-trash"></i>
                            </button>
                          ) : (
                            <button
                              className="btn btn-link"
                              onClick={() =>
                                decrementCartItem(product, dispatchCart)
                              }
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
                            onClick={() =>
                              incrementCartItem(product, dispatchCart)
                            }
                          >
                            <i className="fa fa-solid fa-plus"></i>
                          </button>
                        </div>
                        <div className="children-stacked grid-gap">
                          <button
                            className="fa fa-solid fa-heart btn btn-secondary"
                            onClick={() =>
                              moveItemFromCartToWishlist(
                                product,
                                wishlist,
                                dispatchCart,
                                dispatchWishlist,
                                navigate
                              )
                            }
                          >
                            Move to Wishlist
                          </button>
                          <button
                            className="fa fa-shopping-cart btn btn-light"
                            onClick={() =>
                              deleteFromCart(product, dispatchCart)
                            }
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
        {cartSize > 0 && <CartPrice />}
      </div>
      {stateUser.isLoggedIn ? (
        cartSize === 0 && (
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
