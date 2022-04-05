import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addToWishList,
  removeFromWishlist,
} from "../../utils/wishlist-actions";
import { FilterProducts, Header } from "../../components";
import { addToCart } from "../../utils/cartitem-actions";
import { compose } from "../../utils/compose";
import {
  useCart,
  useFilterProducts,
  useWishlist,
} from "../../contexts/index-context";
import {
  categoryProducts,
  priceLimitProducts,
  ratingLimitProducts,
  searchedProducts,
  sortProducts,
} from "../../utils/filter-by";
import "./productlist.css";

export function Productlist() {
  const [products, setProducts] = useState([]);
  const { state } = useFilterProducts();
  const { cart, dispatchCart } = useCart();
  const { wishlist, dispatchWishlist } = useWishlist();

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const { data } = await axios.get("/api/products");
      setProducts(() => data.products);
    } catch (e) {
      console.log("error", e);
    }
  }

  const isProductInCart = p_id => {
    return cart?.find(p => p._id === p_id);
  };

  const isProductInWishlist = p_id => {
    return wishlist?.find(p => p._id === p_id);
  };
  useEffect(() => getProducts(), []);

  const filterProducts = compose(
    searchedProducts,
    categoryProducts,
    priceLimitProducts,
    ratingLimitProducts,
    sortProducts
  )(state, products);

  const [showFilters, setShowFilters] = useState(false);
  return (
    <div>
      <Header showSearchBox={true} />
      <div className="productlist-container">
        <div className="product-grid d-grid">
          {<FilterProducts />}
          <div className="products-container">
            <div className="d-flex product-header">
              <h3 className="category-name">Products</h3>
            </div>

            <ul className="product-list list-no-bullet d-grid grid-gap">
              {filterProducts &&
                filterProducts?.map(prod => {
                  return (
                    <li key={prod._id}>
                      <div className="card children-stacked product-card">
                        <div className="card-media">
                          <img src={prod.product_img} alt="card-img" />
                          <button
                            className="far fa-heart btn card-like"
                            onClick={() =>
                              addToWishList(prod, dispatchWishlist, navigate)
                            }
                          ></button>
                          {isProductInWishlist(prod._id) ? (
                            <button
                              className="far fa-heart btn card-like wishlist-item"
                              onClick={() =>
                                removeFromWishlist(
                                  prod,
                                  dispatchWishlist,
                                  navigate
                                )
                              }
                            ></button>
                          ) : (
                            <button
                              className="far fa-heart btn card-like"
                              onClick={() =>
                                addToWishList(prod, dispatchWishlist, navigate)
                              }
                            ></button>
                          )}
                        </div>
                        <div className="card-header">
                          <div className="card-title">{prod.title}</div>
                        </div>
                        <div className="card-content d-flex grid-gap">
                          <div>
                            <span className="curr-price">
                              ₹{prod.curr_price}
                            </span>
                            <span className="prev-price text-linethrough">
                              ₹{prod.orig_price}
                            </span>
                          </div>
                          <div className="product-rating">
                            <i className="fa fa-solid fa-star"></i>{" "}
                            {prod.rating}
                          </div>
                        </div>
                        <div className="children-stacked">
                          {isProductInCart(prod._id) ? (
                            <button
                              className="fa fa-shopping-cart btn btn-light"
                              onClick={() => {
                                navigate("/cart");
                              }}
                            >
                              Go to cart
                            </button>
                          ) : (
                            <button
                              className="fa fa-shopping-cart btn btn-secondary"
                              onClick={() =>
                                addToCart(prod, dispatchCart, navigate)
                              }
                            >
                              Add to cart
                            </button>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
